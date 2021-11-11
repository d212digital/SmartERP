
namespace SmartERP.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.StockReport")]
    [BasedOnRow(typeof(SmartERP.Products.Entities.ProductsRow), CheckNames = true)]
    public class StockReportColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //[EditLink]
        //public String Code { get; set; }
        
        public String ProductName { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        [Width(120)]
        public Double PurchasePrice { get; set; }
        [DisplayName("Sale Price"),Width(120)]
        public Double UnitPrice { get; set; }
       
        public Double QtyIn { get; set; }
       
        public Double QtyOut { get; set; }
        
        public Double Stock { get; set; }
        
    }
}