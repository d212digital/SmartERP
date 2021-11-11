
namespace SmartERP.Products.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Products.Units")]
    [BasedOnRow(typeof(Entities.UnitsRow), CheckNames = true)]
    public class UnitsForm
    {
        public String Name { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}