
namespace SmartERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.GoodsReceiptDetails")]
    [BasedOnRow(typeof(Entities.GoodsReceiptDetailsRow), CheckNames = true)]
    public class GoodsReceiptDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        //public String GoodsReceiptRemarks { get; set; }
        //public String ProductBarcode { get; set; }
        [EditLink]
        public String ProductName { get; set; }
        //public String Description { get; set; }
        public String WarehouseName { get; set; }
        public Double Quantity { get; set; }
        
    }
}