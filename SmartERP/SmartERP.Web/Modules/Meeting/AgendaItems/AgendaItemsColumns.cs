
namespace SmartERP.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.AgendaItems")]
    [BasedOnRow(typeof(Entities.AgendaItemsRow), CheckNames = true)]
    public class AgendaItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Description { get; set; }
        public String ItemTypeName { get; set; }
        public String RequestedByFullName { get; set; }
        public Int32 SequenceNo { get; set; }
        //public String Images { get; set; }
        //public String Attachments { get; set; }
        //public String MeetingMeetingName { get; set; }
    }
}