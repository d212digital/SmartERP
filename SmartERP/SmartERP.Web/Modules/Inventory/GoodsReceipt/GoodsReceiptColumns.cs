
namespace SmartERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.GoodsReceipt")]
    [BasedOnRow(typeof(Entities.GoodsReceiptRow), CheckNames = true)]
    public class GoodsReceiptColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter,DisplayName("Supplier")]
        public String SupplierCompanyName { get; set; }
        [QuickFilter]
        public String PurchaseBill { get; set; }
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