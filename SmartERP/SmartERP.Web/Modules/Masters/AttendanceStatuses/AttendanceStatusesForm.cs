
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.AttendanceStatuses")]
    [BasedOnRow(typeof(Entities.AttendanceStatusesRow), CheckNames = true)]
    public class AttendanceStatusesForm
    {
        public String Name { get; set; }
    }
}