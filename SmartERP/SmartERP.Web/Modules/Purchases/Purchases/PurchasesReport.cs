
namespace SmartERP.Purchases
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using SmartERP.Administration.Entities;
    using SmartERP.Customers.Entities;
    using SmartERP.Suppliers.Entities;
    using System;
    using System.Collections.Generic;   

    [Report("Purchases.PurchaseReport")]
    [ReportDesign(MVC.Views.Purchases.Purchases_.PurchasesReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class PurchaseReport : IReport, ICustomizeHtmlToPdf
    {
        protected ISqlConnections SqlConnections { get; }
        public PurchaseReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        public Int64 OrderID { get; set; }

        public object GetData()
        {
            var data = new PurchaseReportData();

            using (var connection = SqlConnections.NewFor<PurchasesRow>())
            {
                var o = PurchasesRow.Fields;

                data.Order = connection.TryById<PurchasesRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.SupplierCompanyName)
                     .Select(o.SupplierAddress)) ?? new PurchasesRow();

                var od = PurchaseDetailsRow.Fields;
                data.Details = connection.List<PurchaseDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Select(od.Total)
                    .Where(od.PurchaseId == this.OrderID));

                var c = SuppliersRow.Fields;
                data.Supplier = connection.TryFirst<SuppliersRow>(c.Id == data.Order.SupplierId.Value)
                    ?? new SuppliersRow();

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

    public class PurchaseReportData
    {
        public PurchasesRow Order { get; set; }
        public List<PurchaseDetailsRow> Details { get; set; }
        public SuppliersRow Supplier { get; set; }

        public CompaniesRow Company { get; set; }
    }
}