
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.AttendeeTypes")]
    [BasedOnRow(typeof(Entities.AttendeeTypesRow), CheckNames = true)]
    public class AttendeeTypesForm
    {
        public String Name { get; set; }
    }
}