
namespace SmartERP.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using SmartERP.Sales.Entities;
    using SmartERP.Customers.Entities;
    using SmartERP.Suppliers.Entities;
    using SmartERP.Products.Entities;
    using SmartERP.Administration.Entities;
    using SmartERP.Purchases.Entities;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using System.Collections.Generic;
    using SmartERP.Expenses.Entities;
    using Serenity.Abstractions;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public DashboardController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));

        }

        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {           

            var model = new DashboardPageModel();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                model.TodaySale = connection.List<SalesRow>().Where(x => x.Date.Value.Date == DateTime.Now.Date).Sum(x => x.GrandTotal).Value;

                var c = CustomersRow.Fields;
                model.CustomerCount = connection.List<CustomersRow>(c.IsActive == 1).Count;

                var s = SuppliersRow.Fields;
                model.SupplierCount = connection.List<SuppliersRow>(s.IsActive == 1).Count;

                var p = ProductsRow.Fields;
                model.ProductCount = connection.List<ProductsRow>(p.IsActive == 1).Count;
                model.LatestProducts = connection.List<ProductsRow>(q => q.SelectTableFields().Where(p.IsActive == 1).OrderBy(p.InsertDate, true).Take(10));

                var od = SaleDetailsRow.Fields;
                model.LatestSales = connection.List<SaleDetailsRow>(q => q.SelectTableFields().OrderBy(od.SaleDate, true).Take(10));

                var se = CompaniesRow.Fields;
                model.Company = connection.TryFirst<CompaniesRow>(q=>q.SelectTableFields().Select(se.CurrencyCurrencySymbol).Where(se.Id > 0)) ?? new CompaniesRow();
                DateTime dt = DateTime.Now;
                var starYearDate = new DateTime(dt.Year, 01, 01);
                var endYearDate = new DateTime(dt.Year, 12, 31);
                var sale= SalesRow.Fields;
                var saleYearly = connection.List<SalesRow>(q => q.SelectTableFields().Where(sale.Date>= starYearDate && sale.Date<= endYearDate).OrderBy(sale.Date, true));
                var purchase = PurchasesRow.Fields;
                var purchaseYearly = connection.List<PurchasesRow>(q => q.SelectTableFields().Where(purchase.Date >= starYearDate && purchase.Date <= endYearDate).OrderBy(purchase.Date, true));

                var expense = ExpensesRow.Fields;
                var expenseYearly = connection.List<ExpensesRow>(q => q.SelectTableFields().Select(expense.ExpenseTypeType).Where(expense.Date >= starYearDate && purchase.Date <= endYearDate).OrderBy(purchase.Date, true));


                List<Double> SaleYearly = new List<Double>();
                List<Double> PurchaseYearly = new List<Double>();
                List<Double> ExpenseYearly = new List<Double>();
                for (int i = 1; i <= 12; i++)
                {
                    var _Sale = saleYearly.Where(x => x.Date.Value.Month == i).Sum(x => x.NetTotal).Value;
                    SaleYearly.Add(_Sale);

                    var _Purchase = purchaseYearly.Where(x => x.Date.Value.Month == i).Sum(x => x.NetTotal).Value;
                    PurchaseYearly.Add(_Purchase);
                    var _Expense = expenseYearly.Where(x => x.Date.Value.Month == i).Sum(x => x.Amount).Value;
                    ExpenseYearly.Add(_Expense);
                }
                model.SaleYearly = JsonConvert.SerializeObject(SaleYearly);
                model.PurchaseYearly = JsonConvert.SerializeObject(PurchaseYearly);
                model.ExpenseYearly = JsonConvert.SerializeObject(ExpenseYearly);


                List<Int32> LabelsMonthly = new List<Int32>();
                List<Double> SaleMonthly = new List<Double>();
                List<Double> PurchaseMonthly = new List<Double>();
                List<Double> ExpenseMonthly = new List<Double>();

                int days = DateTime.DaysInMonth(dt.Year, dt.Month);
                for (int i = 1; i <= days; i++)
                {
                    LabelsMonthly.Add(i);
                    var _Sale = saleYearly.Where(x => x.Date.Value.Month== dt.Month && x.Date.Value.Day == i).Sum(x => x.NetTotal).Value;
                    SaleMonthly.Add(_Sale);

                    var _Purchase = purchaseYearly.Where(x => x.Date.Value.Month == dt.Month && x.Date.Value.Day == i).Sum(x => x.NetTotal).Value;
                    PurchaseMonthly.Add(_Purchase);
                    var _Expense = expenseYearly.Where(x => x.Date.Value.Month == dt.Month && x.Date.Value.Day == i).Sum(x => x.Amount).Value;
                    ExpenseMonthly.Add(_Expense);
                }
                model.LabelsMonthly = JsonConvert.SerializeObject(LabelsMonthly);
                model.SaleMonthly = JsonConvert.SerializeObject(SaleMonthly);
                model.PurchaseMonthly = JsonConvert.SerializeObject(PurchaseMonthly);
                model.ExpenseMonthly = JsonConvert.SerializeObject(ExpenseMonthly);
                List<string> expneseTypes = new List<string>();
                foreach (var item in expenseYearly)
                {
                    if (!expneseTypes.Contains(item.ExpenseTypeType))
                    {
                        expneseTypes.Add(item.ExpenseTypeType);
                    }
                }
                List<Double> ExpenseStatement = new List<Double>();
                List<string> expneseColors = new List<string>();
                List<string> expneseLables = new List<string>();
                int k= 0;
                foreach (var item in expneseTypes)
                {
                    var _Expense = expenseYearly.Where(x => x.ExpenseTypeType == item).Sum(x => x.Amount).Value;
                    ExpenseStatement.Add(_Expense);
                    expneseColors.Add(GetColors()[k]);
                    expneseLables.Add(item);
                    k++;
                    if (k>= GetColors().Count)
                    {
                        break;
                    }
                }
                model.ExpenseStatementLabels = JsonConvert.SerializeObject(expneseLables);
                model.ExpenseStatementData = JsonConvert.SerializeObject(ExpenseStatement);
                model.ExpenseStatementColors = JsonConvert.SerializeObject(expneseColors);

                var SaleDetails = connection.List<SaleDetailsRow>(q => q.SelectTableFields().Where(od.SaleDate >= starYearDate && od.SaleDate <= endYearDate));
                var products= connection.List<ProductsRow>(q => q.SelectTableFields().Where(p.IsActive == 1));
                List<BestSaleProduct> BestSaleProductList = new List<BestSaleProduct>();
                foreach (var prod in products)
                {
                    var sumQuantiy = SaleDetails.Where(x => x.ProductId == prod.Id).Sum(x => x.Quantity).Value;
                    BestSaleProductList.Add(new BestSaleProduct() { Name=prod.ProductName, Qty= sumQuantiy });
                }

                List<Double> BestSaleProductData = new List<Double>();                
                List<string> BestSaleProductLables = new List<string>();
                foreach (var item in BestSaleProductList.OrderByDescending(x=>x.Qty).Take(10))
                {
                    BestSaleProductData.Add(item.Qty);
                    BestSaleProductLables.Add(item.Name);
                }
                model.BestSaleProductData = JsonConvert.SerializeObject(BestSaleProductData);
                model.BestSaleProductLables = JsonConvert.SerializeObject(BestSaleProductLables);
            }
            return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
        }
        private List<String> GetColors()
        {
            List<String> colors = new List<string>();
            
            colors.Add("BlueViolet");
            colors.Add("Brown");
            colors.Add("BurlyWood");
            colors.Add("CadetBlue");
            colors.Add("Chartreuse");
            colors.Add("Chocolate");
            colors.Add("Coral");
            colors.Add("CornflowerBlue");
            colors.Add("Cornsilk");
            colors.Add("Crimson");
            colors.Add("Cyan");
            colors.Add("DarkBlue");
            colors.Add("DarkCyan");
            colors.Add("DarkGoldenrod");
            colors.Add("DarkGray");
            colors.Add("DarkGreen");
            colors.Add("DarkKhaki");
            colors.Add("DarkMagena");
            colors.Add("DarkOliveGreen");
            colors.Add("DarkOrange");
            colors.Add("DarkOrchid");
            colors.Add("DarkRed");
           
            return colors;
        }
        
    }
}
