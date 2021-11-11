
namespace SmartERP.Products.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Products.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Barcode { get; set; }
        public String Sn { get; set; }
        public String ProductName { get; set; }
        public String Model { get; set; }        
        public Double UnitPrice { get; set; }
        public Double UnitsInStock { get; set; }
        public Double UnitsOnOrder { get; set; }

        public Double PurchasePrice { get; set; }

        public Double QtyIn { get; set; }
        public Double QtyOut { get; set; }
        public Double Stock { get; set; }
        

        public Double ReorderLevel { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        [QuickFilter]
        public String UnitName { get; set; }
        [QuickFilter]
        public String BrandName { get; set; }
        //public String Image { get; set; }
        public String ProductDetails { get; set; }
    }
}