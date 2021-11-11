
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.SupplierGroups")]
    [BasedOnRow(typeof(Entities.SupplierGroupsRow), CheckNames = true)]
    public class SupplierGroupsForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}