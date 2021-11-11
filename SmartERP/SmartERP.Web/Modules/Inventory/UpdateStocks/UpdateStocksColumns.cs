using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Inventory.Columns
{
    [ColumnsScript("Inventory.UpdateStocks")]
    [BasedOnRow(typeof(Entities.UpdateStocksRow), CheckNames = true)]
    public class UpdateStocksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String ProductProductName { get; set; }
        public Double Quantity { get; set; }       
        [QuickFilter]
        public String WarehouseName { get; set; }
        [EditLink]
        public String Mode { get; set; }
        //public String TransactionType { get; set; }
        public Int32 Status { get; set; }
        public String Note { get; set; }
        public DateTime InsertDate { get; set; }
    }
}