
namespace SmartERP.Purchases.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchases.PurchaseDetails")]
    [BasedOnRow(typeof(Entities.PurchaseDetailsRow), CheckNames = true)]
    public class PurchaseDetailsForm
    {
        [HalfWidth]
        public Int64 BrandId { get; set; }

        [HalfWidth]
        public Int64 ProductId { get; set; }
        [HalfWidth,ReadOnly(true)]
        public Int64 UnitId { get; set; }
        [FormCssClass("line-break-sm")]
        //public Int64 UnitId { get; set; }
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