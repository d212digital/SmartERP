
namespace SmartERP.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using SmartERP.Sales;
    using Serenity.Data;
    using SmartERP.Sales.Entities;
    using SmartERP.Customers.Entities;
    using System.Collections.Generic;
    using SmartERP.Administration.Entities;
    using SmartERP.Accounts.Entities;
    using System;
    using SmartERP.Purchases.Entities;

    [PageAuthorize]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.PurchaseReport)]
    public class PurchaseReporController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        public PurchaseReporController(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        [Route("Reports/PurchaseRepor")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/PurchaseRepor/PurchaseReporIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/PurchaseRepor")]
        public ActionResult Search(string StartDate, string EndDate)
        {
            DateTime? startDate = null;
            DateTime? endDate = null;
            if (!string.IsNullOrWhiteSpace(StartDate))
            {
                startDate = Convert.ToDateTime(StartDate);
            }
            if (!string.IsNullOrWhiteSpace(EndDate))
            {
                endDate = Convert.ToDateTime(EndDate);
            }
            var data = GetData(startDate, endDate);
            return View("~/Modules/Reports/PurchaseRepor/PurchaseReporIndex.cshtml", data);
        }
        public object GetData(DateTime? startDate = null, DateTime? endDate = null)
        {
            var data = new PurchaseReporData();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = PurchasesRow.Fields;

                
                if (startDate != null && endDate == null)
                {
                    data.Orders = connection.List<PurchasesRow>(q => q
                      .SelectTableFields()
                      .Select(o.SupplierCompanyName).Where(o.Date >= startDate.Value)) ?? new List<PurchasesRow>();
                  
                }
                else if (startDate != null && endDate != null)
                {
                    data.Orders = connection.List<PurchasesRow>(q => q
                    .SelectTableFields()
                    .Select(o.SupplierCompanyName).Where(o.Date >= startDate.Value && o.Date <= endDate.Value)) ?? new List<PurchasesRow>();
                    
                }
                else if (startDate == null && endDate != null)
                {
                    data.Orders = connection.List<PurchasesRow>(q => q
                    .SelectTableFields()
                    .Select(o.SupplierCompanyName).Where(o.Date <= endDate.Value)) ?? new List<PurchasesRow>();                   
                }
                else
                {
                    data.Orders = connection.List<PurchasesRow>(q => q
                      .SelectTableFields()
                      .Select(o.SupplierCompanyName)) ?? new List<PurchasesRow>();
                }

                var od = SaleDetailsRow.Fields;
                data.OrderDetails = connection.List<PurchaseDetailsRow>(q => q
                    .SelectTableFields()) ?? new List<PurchaseDetailsRow>();
                              

                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(s.Id > 0) ?? new CompaniesRow();

                var a = AccountsRow.Fields;               
                data.Accounts = connection.List<AccountsRow>(q => q
                    .SelectTableFields()
                    ) ?? new List<AccountsRow>();
            }

            return data;
        }
    }
    public class PurchaseReporData
    {
        public List<PurchasesRow> Orders { get; set; }
        public List<PurchaseDetailsRow> OrderDetails { get; set; }
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}