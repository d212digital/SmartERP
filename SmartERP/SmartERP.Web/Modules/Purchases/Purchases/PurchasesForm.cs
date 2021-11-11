
namespace SmartERP.Purchases.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Purchases.Entities;

    [FormScript("Purchases.Purchases")]
    [BasedOnRow(typeof(Entities.PurchasesRow), CheckNames = true)]
    public class PurchasesForm
    {
        [HalfWidth]
        public Int64 SupplierId { get; set; }
        [MediumThirdLargeQuarterWidth]
        public String InvoiceNo { get; set; }
        [DefaultValue("now"), DateEditor]
        [MediumThirdLargeQuarterWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public Int64 PaymentAccount { get; set; }
        //public Int64 BankId { get; set; }
        [PurchaseDetailEditor]
        public List<PurchaseDetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true)]
        public Double TotalDiscount { get; set; }
        [CheckboxFormatter]
        public Boolean NoTax { get; set; }
        [DefaultValue(0)]
        //[FormCssClass("line-break-sm")]
        [ReadOnly(true)]
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
        public Double NetTotal { get; set; }
        [DefaultValue(0)]
        [FormCssClass("line-break-sm")]
        public Double PaidAmount { get; set; }
        [ReadOnly(true)]
        public Double Due { get; set; }
        [ReadOnly(true)]
        public Double Change { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        [HalfWidth]
        [FormCssClass("line-break-sm")]
        public String Details { get; set; }

        [Hidden]
        public byte[] RowVersion { get; set; }
    }
}