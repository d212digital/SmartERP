using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Inventory.Forms
{
    [FormScript("Inventory.UpdateStocks")]
    [BasedOnRow(typeof(Entities.UpdateStocksRow), CheckNames = true)]
    public class UpdateStocksForm
    {
        public Int64 ProductId { get; set; }
        public Double Quantity { get; set; }     
        
        public Int64 WarehouseId { get; set; }
        public Int32 StockMode { get; set; }       
        public Int32 Status { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String Note { get; set; }
      
    }
}