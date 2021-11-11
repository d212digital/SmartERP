
namespace SmartERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.DamagedProducts")]
    [BasedOnRow(typeof(Entities.DamagedProductsRow), CheckNames = true)]
    public class DamagedProductsForm
    {
        [HalfWidth]
        public Int64 CategoryId { get; set; }
        [HalfWidth]
        public Int64 ProductId { get; set; }
        [ReadOnly(true)]
        [QuarterWidth(UntilNext =true)]
        public String Code { get; set; }
        [ReadOnly(true)]
        public String Name { get; set; }        
        public Double PurchasePrice { get; set; }
        public Double Quantity { get; set; }
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        [FullWidth]
        [TextAreaEditor]
        public String Note { get; set; }
      
    }
}