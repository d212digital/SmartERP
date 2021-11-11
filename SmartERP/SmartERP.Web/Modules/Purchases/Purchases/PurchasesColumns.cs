
namespace SmartERP.Purchases.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Purchases.Purchases")]
    [BasedOnRow(typeof(Entities.PurchasesRow), CheckNames = true)]
    public class PurchasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String SupplierCompanyName { get; set; }
        [EditLink]
        public String InvoiceNo { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public Int64 PaymentAccount { get; set; }       
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        //public Double Vat { get; set; }
        //public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        public Double PaidAmount { get; set; }
        public Double Due { get; set; }
        public Double Change { get; set; }
        public String Details { get; set; }
    }
}