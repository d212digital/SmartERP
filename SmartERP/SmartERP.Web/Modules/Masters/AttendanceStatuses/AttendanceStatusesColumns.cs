
namespace SmartERP.Masters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Masters.AttendanceStatuses")]
    [BasedOnRow(typeof(Entities.AttendanceStatusesRow), CheckNames = true)]
    public class AttendanceStatusesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}