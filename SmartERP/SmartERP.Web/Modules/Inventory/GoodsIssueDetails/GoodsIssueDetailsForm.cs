
namespace SmartERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.GoodsIssueDetails")]
    [BasedOnRow(typeof(Entities.GoodsIssueDetailsRow), CheckNames = true)]
    public class GoodsIssueDetailsForm
    {
        //public Int64 GoodsIssueId { get; set; }
        public Int64 ProductId { get; set; }
        public Double Quantity { get; set; }
        public Int64 WarehouseId { get; set; }
        //public String ProductName { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
       
    }
}