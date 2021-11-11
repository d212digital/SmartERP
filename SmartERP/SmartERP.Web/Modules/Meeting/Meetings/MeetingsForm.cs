
namespace SmartERP.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SmartERP.Meeting.Entities;

    [FormScript("Meeting.Meetings")]
    [BasedOnRow(typeof(Entities.MeetingsRow), CheckNames = true)]
    public class MeetingsForm
    {
        [Tab("Meeting")]
        [HalfWidth(UntilNext =true)]
        public String MeetingName { get; set; }
        public Int64 MeetingType { get; set; }
        [DateTimeEditor]
        public DateTime StartDate { get; set; }
        [DateTimeEditor]
        public DateTime EndDate { get; set; }
        public Int64 Department { get; set; }
        public Int64 Location { get; set; }
        public Int64 OrganizedBy { get; set; }
        public Int64 Reporter { get; set; }
        [FullWidth]
        [MeetingAttendeesEditor]       
        public List<MeetingAttendeesRow> Attendees { get; set; }
        [Tab("Agenda Items")]
        [AgendaItemsEditor]
        public List<AgendaItemsRow> AgendaItems { get; set; }
        [Tab("Agenda Decisions")]
        [AgendaDecisionsEditor]
        public List<AgendaDecisionsRow> AgendaDecisions { get; set; }
    }
}