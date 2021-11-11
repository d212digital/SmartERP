
namespace SmartERP.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.Meetings")]
    [BasedOnRow(typeof(Entities.MeetingsRow), CheckNames = true)]
    public class MeetingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String MeetingName { get; set; }
        [QuickFilter]
        public String MeetingTypeName { get; set; }
        [QuickFilter]
        public DateTime StartDate { get; set; }
        [QuickFilter]
        public DateTime EndDate { get; set; }
        [QuickFilter]
        public String Department1 { get; set; }
        [QuickFilter]
        public String LocationName { get; set; }
        [QuickFilter]
        public String OrganizedByFullName { get; set; }
        [QuickFilter]
        public String ReporterFullName { get; set; }
    }
}