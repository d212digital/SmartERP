
namespace SmartERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.DamagedProducts")]
    [BasedOnRow(typeof(Entities.DamagedProductsRow), CheckNames = true)]
    public class DamagedProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        public Double PurchasePrice { get; set; }
        public Double Quantity { get; set; }
        public DateTime Date { get; set; }
        public String Note { get; set; }
        //[QuickFilter,DisplayName("Product")]
        //public String ProductBarcode { get; set; }
    }
}