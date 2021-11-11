
namespace SmartERP.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.CustomerReceivableReport")]
    [BasedOnRow(typeof(SmartERP.Customers.Entities.CustomersRow), CheckNames = true)]
    public class CustomerReceivableReportColumns
    {
        public String Name { get; set; }
        [DisplayName("Receivable")]
        public double CustomerReceivable { get; set; }
        [DisplayName("Received")]
        public double CustomerReceived { get; set; }
        [DisplayName("Balance")]
        public double CustomerBalance { get; set; }

    }
}