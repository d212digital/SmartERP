
namespace SmartERP.Sales.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sales.SaleDetails")]
    [BasedOnRow(typeof(Entities.SaleDetailsRow), CheckNames = true)]
    public class SaleDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        [EditLink]
        public String ProductName { get; set; }
      
        public String Description { get; set; }
        public String UnitName { get; set; }
        //public Int64 UnitId { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
        //public String SaleDetails { get; set; }
    }
}