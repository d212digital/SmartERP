
namespace SmartERP.Services
{
    using Entities;
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using SmartERP.Administration.Entities;
    using SmartERP.Customers.Entities;
    using System;
    using System.Collections.Generic;   

    [Report("Services.ServiceReport")]
    [ReportDesign(MVC.Views.Services.ServiceInvoices.ServiceInvoicesReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class ServiceReport : IReport, ICustomizeHtmlToPdf
    {
        protected ISqlConnections SqlConnections { get; }
      
        public ServiceReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
           
        }
        public Int64 OrderID { get; set; }

        public object GetData()
        {
            var data = new ServiceReportData();

            using (var connection = SqlConnections.NewFor<ServiceInvoicesRow>())
            {
                var o = ServiceInvoicesRow.Fields;

                data.Order = connection.TryById<ServiceInvoicesRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.CustomerName)
                     .Select(o.CustomerAddress)) ?? new ServiceInvoicesRow();

                var od = ServiceInvoiceDetailsRow.Fields;
                data.Details = connection.List<ServiceInvoiceDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.ServiceName)
                    .Select(od.Total)
                    .Where(od.ServiceInvoiceId == this.OrderID));

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

    public class ServiceReportData
    {
        public ServiceInvoicesRow Order { get; set; }
        public List<ServiceInvoiceDetailsRow> Details { get; set; }
        public CustomersRow Customer { get; set; }

        public CompaniesRow Company { get; set; }
    }
}