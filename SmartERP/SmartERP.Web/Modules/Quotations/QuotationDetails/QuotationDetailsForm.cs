
namespace SmartERP.Quotations.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Quotations.QuotationDetails")]
    [BasedOnRow(typeof(Entities.QuotationDetailsRow), CheckNames = true)]
    public class QuotationDetailsForm
    {        
        public Int64 BrandId { get; set; }
        public Int64 ProductId { get; set; }
        [ReadOnly(true)]
        public Int64 UnitId { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        //public Double Total { get; set; }
        //public Int64 QuotationId { get; set; }
        //[FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}