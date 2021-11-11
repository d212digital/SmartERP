
namespace SmartERP.Services.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Services.ServiceInvoiceDetails")]
    [BasedOnRow(typeof(Entities.ServiceInvoiceDetailsRow), CheckNames = true)]
    public class ServiceInvoiceDetailsForm
    {
        public Int64 ServiceId { get; set; }
       
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        //public Double Total { get; set; }
        //public Int64 ServiceInvoiceId { get; set; }
        //[FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}