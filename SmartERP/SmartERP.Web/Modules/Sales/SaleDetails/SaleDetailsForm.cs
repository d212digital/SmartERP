
namespace SmartERP.Sales.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sales.SaleDetails")]
    [BasedOnRow(typeof(Entities.SaleDetailsRow), CheckNames = true)]
    public class SaleDetailsForm
    {
        [HalfWidth]
        public Int64 BrandId { get; set; }

        [HalfWidth]
        public Int64 ProductId { get; set; }
      
        //public Int64 UnitId { get; set; }
        [HalfWidth,ReadOnly(true)]
        public Int64 UnitId { get; set; }
        [FormCssClass("line-break-sm")]
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        //public Double Total { get; set; }
        //public Int64 SaleId { get; set; }
        [FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Description { get; set; }
    }
}