
namespace SmartERP.Quotations.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Quotations.Entities;

    [FormScript("Quotations.Quotations")]
    [BasedOnRow(typeof(Entities.QuotationsRow), CheckNames = true)]
    public class QuotationsForm
    {
        [HalfWidth]
        public Int64 CustomerId { get; set; }
        [MediumThirdLargeQuarterWidth]
        [DefaultValue("now"), DateEditor]
        public DateTime Date { get; set; }
        [DateEditor]
        [MediumThirdLargeQuarterWidth]
        public DateTime ExpiryDate { get; set; }
        [QuotationsDetailEditor]
        public List<QuotationDetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true), ReadOnly(true), DefaultValue(0)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double TotalDiscount { get; set; }
        [CheckboxFormatter]
        public Boolean NoTax { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double Vat { get; set; }
        [Hidden]
        public Double VatPercentage { get; set; }
        [Hidden]
        public Int32 VatType { get; set; }


        [ReadOnly(true), DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }
        
        [ReadOnly(true), DefaultValue(0)]
        public Double NetTotal { get; set; }
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Details { get; set; }
        [Hidden]
        public byte[] RowVersion { get; set; }

    }
}