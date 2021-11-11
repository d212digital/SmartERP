
namespace SmartERP.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.AgendaDecisions")]
    [BasedOnRow(typeof(Entities.AgendaDecisionsRow), CheckNames = true)]
    public class AgendaDecisionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Description { get; set; }
        public DateTime DueDate { get; set; }
        public String AssignedToFullName { get; set; }
        public Int32 DecisionNumber { get; set; }
        public String RelatedAgendaItemTitle { get; set; }
        public Int64 ResolutionStatus { get; set; }
        //public String Images { get; set; }
        //public String Attachments { get; set; }
        //public String MeetingMeetingName { get; set; }
    }
}