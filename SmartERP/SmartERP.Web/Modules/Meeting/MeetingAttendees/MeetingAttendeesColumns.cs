
namespace SmartERP.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingAttendees")]
    [BasedOnRow(typeof(Entities.MeetingAttendeesRow), CheckNames = true)]
    public class MeetingAttendeesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        [EditLink]
        public String AttendeeFullName { get; set; }
        public String AttendeeTypeName { get; set; }
        public String AttendanceStatusName { get; set; }
       
        //public String MeetingMeetingName { get; set; }
    }
}