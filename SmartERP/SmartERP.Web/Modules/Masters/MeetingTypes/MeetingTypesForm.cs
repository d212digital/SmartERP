
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.MeetingTypes")]
    [BasedOnRow(typeof(Entities.MeetingTypesRow), CheckNames = true)]
    public class MeetingTypesForm
    {
        public String Name { get; set; }
    }
}