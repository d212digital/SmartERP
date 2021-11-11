﻿
namespace SmartERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.GoodsIssueDetails")]
    [BasedOnRow(typeof(Entities.GoodsIssueDetailsRow), CheckNames = true)]
    public class GoodsIssueDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        //public String GoodsIssueRemarks { get; set; }
        //public String ProductBarcode { get; set; }
        [EditLink]
        public String ProductName { get; set; }
        //public String Description { get; set; }
        public String WarehouseName { get; set; }
        public Double Quantity { get; set; }
       
    }
}