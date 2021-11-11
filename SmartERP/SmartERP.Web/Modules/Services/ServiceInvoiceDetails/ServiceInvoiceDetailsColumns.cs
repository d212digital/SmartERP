
namespace SmartERP.Services.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Services.ServiceInvoiceDetails")]
    [BasedOnRow(typeof(Entities.ServiceInvoiceDetailsRow), CheckNames = true)]
    public class ServiceInvoiceDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        [EditLink]
        public String ServiceName { get; set; }
        
        public String Description { get; set; }
        [AlignRight, Width(100)]
        public Double UnitPrice { get; set; }
        [AlignRight, Width(100)]
        public Double Quantity { get; set; }
        
        [AlignRight, Width(100)]
        public Double Discount { get; set; }
        [AlignRight, Width(100)]
        public Double Total { get; set; }
        //public String ServiceInvoiceDetails { get; set; }
    }
}