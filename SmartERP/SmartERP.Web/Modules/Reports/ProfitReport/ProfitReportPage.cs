
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

    [PageAuthorize]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.ProfitReport)]
    public class ProfitReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        public ProfitReportController(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }

        [Route("Reports/ProfitReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/ProfitReport/ProfitReportIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/ProfitReport")]
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
            return View("~/Modules/Reports/ProfitReport/ProfitReportIndex.cshtml", data);
        }
        public object GetData(DateTime? startDate = null, DateTime? endDate = null)
        {
            var data = new ProfitReportData();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                
                if (startDate != null && endDate == null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                      .SelectTableFields()
                      .Select(o.CustomerName).Where(o.Date >= startDate.Value)) ?? new List<SalesRow>();
                  
                }
                else if (startDate != null && endDate != null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                    .SelectTableFields()
                    .Select(o.CustomerName).Where(o.Date >= startDate.Value && o.Date <= endDate.Value)) ?? new List<SalesRow>();
                    
                }
                else if (startDate == null && endDate != null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                    .SelectTableFields()
                    .Select(o.CustomerName).Where(o.Date <= endDate.Value)) ?? new List<SalesRow>();                   
                }
                else
                {
                    data.Orders = connection.List<SalesRow>(q => q
                      .SelectTableFields()
                      .Select(o.CustomerName)) ?? new List<SalesRow>();
                }

                var od = SaleDetailsRow.Fields;
                data.OrderDetails = connection.List<SaleDetailsRow>(q => q
                    .SelectTableFields()) ?? new List<SaleDetailsRow>();
                              

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
    public class ProfitReportData
    {
        public List<SalesRow> Orders { get; set; }
        public List<SaleDetailsRow> OrderDetails { get; set; }
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}