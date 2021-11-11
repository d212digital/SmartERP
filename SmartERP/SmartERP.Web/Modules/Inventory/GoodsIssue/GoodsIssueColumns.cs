
namespace SmartERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.GoodsIssue")]
    [BasedOnRow(typeof(Entities.GoodsIssueRow), CheckNames = true)]
    public class GoodsIssueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter,DisplayName("Customer")]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String SaleInvoice { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public Double TotalQuantity { get; set; }
        [QuickFilter]
        public String EmployeeFullName { get; set; }
        [EditLink]
        public String Remarks { get; set; }
        //public String JournalRemarks { get; set; }
        public String Reference { get; set; }
    }
}