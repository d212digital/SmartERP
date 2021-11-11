
namespace SmartERP.Quotations.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Quotations.Quotations")]
    [BasedOnRow(typeof(Entities.QuotationsRow), CheckNames = true)]
    public class QuotationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        public Double Vat { get; set; }
        public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        [EditLink]
        public String Details { get; set; }
        [QuickFilter]
        public DateTime ExpiryDate { get; set; }
    }
}