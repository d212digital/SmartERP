
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.CustomerGroups")]
    [BasedOnRow(typeof(Entities.CustomerGroupsRow), CheckNames = true)]
    public class CustomerGroupsForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}