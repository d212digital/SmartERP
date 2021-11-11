
namespace SmartERP.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.SupplierPayableReport")]
    [BasedOnRow(typeof(SmartERP.Suppliers.Entities.SuppliersRow), CheckNames = true)]
    public class SupplierPayableReportColumns
    {
        public String CompanyName { get; set; }
        [DisplayName("Payable")]
        public double SupplierPayable { get; set; }
        [DisplayName("Paid")]
        public double SupplierPaid { get; set; }
        [DisplayName("Balance")]
        public double SupplierBalance { get; set; }

    }
}