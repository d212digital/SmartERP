
namespace SmartERP.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingAttendees")]
    [BasedOnRow(typeof(Entities.MeetingAttendeesRow), CheckNames = true)]
    public class MeetingAttendeesForm
    {
        public Int64 Attendee { get; set; }
        public Int64 AttendeeType { get; set; }
        public Int64 AttendanceStatus { get; set; }
     
        //public Int64 Meeting { get; set; }
    }
}