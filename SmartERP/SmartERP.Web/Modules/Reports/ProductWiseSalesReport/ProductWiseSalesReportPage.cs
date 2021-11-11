
namespace SmartERP.Reports.Pages
{
    using System;
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using SmartERP.Sales;
    using Serenity.Data;
    using SmartERP.Sales.Entities;
    using SmartERP.Customers.Entities;
    using System.Collections.Generic;
    using SmartERP.Administration.Entities;

    [PageAuthorize]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.ProductWiseSaleReport)]
    public class ProductWiseSalesReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        public ProductWiseSalesReportController(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }

        [Route("Reports/ProductWiseSalesReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/ProductWiseSalesReport/ProductWiseSalesReportIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/ProductWiseSalesReport")]
        public ActionResult Search(string StartDate, string EndDate)
        {
            DateTime? startDate=null;
            DateTime? endDate=null;
            if (!string.IsNullOrWhiteSpace(StartDate))
            {
                startDate = Convert.ToDateTime(StartDate);
            }
            if (!string.IsNullOrWhiteSpace(EndDate))
            {
                endDate = Convert.ToDateTime(EndDate);
            }
            var data = GetData(startDate, endDate);
            return View("~/Modules/Reports/ProductWiseSalesReport/ProductWiseSalesReportIndex.cshtml", data);
        }

        public object GetData(DateTime? startDate=null, DateTime? endDate=null)
        {
            var data = new ProductWiseSalesReportData();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                data.Orders = connection.List<SalesRow>(q => q
                     .SelectTableFields()
                     .Select(o.CustomerName)) ?? new List<SalesRow>();


                var od = SaleDetailsRow.Fields;
                
                if (startDate != null && endDate == null)
                {
                    data.OrderDetails = connection.List<SaleDetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate >= startDate.Value)) ?? new List<SaleDetailsRow>();
                }
                else if (startDate != null && endDate != null)
                {
                    data.OrderDetails = connection.List<SaleDetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate >= startDate.Value && od.SaleDate <= endDate.Value)) ?? new List<SaleDetailsRow>();
                }
                else if (startDate == null && endDate != null)
                {
                    data.OrderDetails = connection.List<SaleDetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate <= endDate.Value)) ?? new List<SaleDetailsRow>();
                }
                else
                {
                    data.OrderDetails = connection.List<SaleDetailsRow>(q => q
                   .SelectTableFields()) ?? new List<SaleDetailsRow>();
                }



                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(s.Id > 0) ?? new CompaniesRow();
            }

            return data;
        }
    }
    public class ProductWiseSalesReportData
    {
        public List<SalesRow> Orders { get; set; }
        public List<SaleDetailsRow> OrderDetails { get; set; }

        public CompaniesRow Company { get; set; }
    }
}