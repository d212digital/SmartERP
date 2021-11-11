
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.ResolutionStatuses")]
    [BasedOnRow(typeof(Entities.ResolutionStatusesRow), CheckNames = true)]
    public class ResolutionStatusesForm
    {
        public String Name { get; set; }
    }
}