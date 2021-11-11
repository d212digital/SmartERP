
namespace SmartERP.Sales.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Sales.Entities;

    [FormScript("Sales.Sales")]
    [BasedOnRow(typeof(Entities.SalesRow), CheckNames = true)]
    public class SalesForm
    {
        [HalfWidth]
        public Int64 CustomerId { get; set; }
        [DefaultValue("now"), DateEditor]
        [MediumThirdLargeQuarterWidth]
        public DateTime Date { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth]
        public Int64 PaymentAccount { get; set; }       
        [SalesDetailEditor]
        public List<SaleDetailsRow> LineItems { get; set; }

        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalDiscount { get; set; }
        [CheckboxFormatter]
        public Boolean NoTax { get; set; }

        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double Vat { get; set; }
        [Hidden]
        public Double VatPercentage { get; set; }
        [Hidden]
        public Int32 VatType { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }
        
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double NetTotal { get; set; }
        [DefaultValue(0)]
        public Double PaidAmount { get; set; }
        [ReadOnly(true)]
        public Double Due { get; set; }
        [ReadOnly(true)]
        public Double Change { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Details { get; set; }
        [Hidden]
        public byte[] RowVersion { get; set; }
    }
}