
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
    using SmartERP.Purchases.Entities;
    using System;

    [PageAuthorize]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.TodaysReport)]
    public class TodaysReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        public TodaysReportController(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        [Route("Reports/TodaysReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/TodaysReport/TodaysReportIndex.cshtml", data);
        }
        public object GetData()
        {
            var data = new TodaysReportData();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                data.SaleOrders = connection.List<SalesRow>(q => q
                     .SelectTableFields()
                     .Select(o.CustomerName).Where(o.Date==DateTime.Today)) ?? new List<SalesRow>();

                var p = PurchasesRow.Fields;
                data.PurchaseOrders = connection.List<PurchasesRow>(q => q
                     .SelectTableFields()
                     .Select(p.SupplierCompanyName).Where(o.Date == DateTime.Today)) ?? new List<PurchasesRow>();


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
    public class TodaysReportData
    {
        public List<SalesRow> SaleOrders { get; set; }
        public List<PurchasesRow> PurchaseOrders { get; set; }       
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}