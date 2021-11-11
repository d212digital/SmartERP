
namespace SmartERP.Sales
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using SmartERP.Administration.Entities;
    using SmartERP.Customers.Entities;
    using System;
    using System.Collections.Generic;   

    [Report("Sales.SalesReport")]
    [ReportDesign(MVC.Views.Sales.Sales_.SalesReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class SalesReport : IReport, ICustomizeHtmlToPdf
    {
        protected ISqlConnections SqlConnections { get; }
        public SalesReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        public Int64 OrderID { get; set; }

        public object GetData()
        {
            var data = new SalesReportData();

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                data.Order = connection.TryById<SalesRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.CustomerName)
                     .Select(o.CustomerAddress)) ?? new SalesRow();

                var od = SaleDetailsRow.Fields;
                data.Details = connection.List<SaleDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Select(od.Total)
                    .Where(od.SaleId == this.OrderID));

                var c = CustomersRow.Fields;
                data.Customer = connection.TryFirst<CustomersRow>(c.Id == data.Order.CustomerId.Value)
                    ?? new CustomersRow();

                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(q => q.SelectTableFields().Select(s.CurrencyCurrencySymbol).Where(s.Id > 0)) ?? new CompaniesRow();
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class SalesReportData
    {
        public SalesRow Order { get; set; }
        public List<SaleDetailsRow> Details { get; set; }
        public CustomersRow Customer { get; set; }

        public CompaniesRow Company { get; set; }
    }
}