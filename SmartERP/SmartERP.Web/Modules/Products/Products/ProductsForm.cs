
namespace SmartERP.Products.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Products.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [MediumThirdLargeQuarterWidth(UntilNext =true)]
        public String Barcode { get; set; }
        [HalfWidth]
        public String ProductName { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        [ReadOnly(true)]
        public String Sn { get; set; }
       
        [HalfWidth]
        public String Model { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        [DefaultValue(0)]
        public Double UnitPrice { get; set; }
        [ReadOnly(true), DefaultValue(0),Hidden]
        public Double UnitsInStock { get; set; }
        [ReadOnly(true),DefaultValue(0),Hidden]
        public Double UnitsOnOrder { get; set; }
        [DefaultValue(10)]
        public Double ReorderLevel { get; set; }
        [HalfWidth]
        public Int64 CategoryId { get; set; }
        [HalfWidth]
        public Int64 UnitId { get; set; }
        [HalfWidth]
        public Int64 BrandId { get; set; }
        [FullWidth]
        public String Image { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String ProductDetails { get; set; }
    }
}