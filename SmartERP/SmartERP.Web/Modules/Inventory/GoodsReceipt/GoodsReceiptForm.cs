
namespace SmartERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Inventory.Entities;

    [FormScript("Inventory.GoodsReceipt")]
    [BasedOnRow(typeof(Entities.GoodsReceiptRow), CheckNames = true)]
    public class GoodsReceiptForm
    {
        [QuarterWidth]
        public Int64 PurchaseId { get; set; }
        [QuarterWidth]
        [ReadOnly(true)]
        public Int64 SupplierId { get; set; }
        [QuarterWidth]
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        [QuarterWidth]
        public Int64 EmployeenId { get; set; }
        [HalfWidth]
        public String Reference { get; set; }
        [GoodsReceiptDetailEditor]
        public List<GoodsReceiptDetailsRow> LineItems { get; set; }
        [QuarterWidth]
        [ReadOnly(true), DefaultValue(0)]
        public Double TotalQuantity { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth]
        [TextAreaEditor(Cols =1,Rows =3)]
        public String Remarks { get; set; }
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String JournalRemarks { get; set; }
       
    }
}