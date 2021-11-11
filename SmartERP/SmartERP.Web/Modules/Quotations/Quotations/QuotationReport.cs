
namespace SmartERP.Quotations
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using SmartERP.Administration.Entities;
    using SmartERP.Customers.Entities;
    using System;
    using System.Collections.Generic;   

    [Report("Quotations.QuotationReport")]
    [ReportDesign(MVC.Views.Quotations.Quotations_.QuotationReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class QuotationReport : IReport, ICustomizeHtmlToPdf
    {
        protected ISqlConnections SqlConnections { get; }
        public QuotationReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        public Int64 OrderID { get; set; }

        public object GetData()
        {
            var data = new QuotationReportData();

            using (var connection = SqlConnections.NewFor<QuotationsRow>())
            {
                var o = QuotationsRow.Fields;

                data.Order = connection.TryById<QuotationsRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.CustomerName)
                     .Select(o.CustomerAddress)) ?? new QuotationsRow();

                var od = QuotationDetailsRow.Fields;
                data.Details = connection.List<QuotationDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Select(od.Total)
                    .Where(od.QuotationId == this.OrderID));

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

    public class QuotationReportData
    {
        public QuotationsRow Order { get; set; }
        public List<QuotationDetailsRow> Details { get; set; }
        public CustomersRow Customer { get; set; }

        public CompaniesRow Company { get; set; }
    }
}