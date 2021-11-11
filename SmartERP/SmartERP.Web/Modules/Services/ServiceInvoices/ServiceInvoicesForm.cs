
namespace SmartERP.Services.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Services.Entities;

    [FormScript("Services.ServiceInvoices")]
    [BasedOnRow(typeof(Entities.ServiceInvoicesRow), CheckNames = true)]
    public class ServiceInvoicesForm
    {
        [HalfWidth]
        public Int64 CustomerId { get; set; }
        [MediumThirdLargeQuarterWidth]
        [DefaultValue("now"), DateEditor]
        public DateTime Date { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth]
        public Int64 PaymentAccount { get; set; }
        [HalfWidth]
        public Int64 EmployeeId { get; set; }
       
        [ServiceInvoicesDetailEditor]
        public List<ServiceInvoiceDetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true)]
        public Double TotalDiscount { get; set; }
        [ReadOnly(true)]
        public Double Vat { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }
        [ReadOnly(true)]
        public Double GrandTotal { get; set; }
        [ReadOnly(true)]
        public Double NetTotal { get; set; }
       
        [DefaultValue(0)]
        public Double PaidAmount { get; set; }
        [ReadOnly(true)]
        public Double Due { get; set; }
        [ReadOnly(true)]
        public Double Change { get; set; }
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Details { get; set; }
    }
}