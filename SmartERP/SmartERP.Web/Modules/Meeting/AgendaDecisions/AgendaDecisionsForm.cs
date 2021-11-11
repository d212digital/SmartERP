
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

    [FormScript("Meeting.AgendaDecisions")]
    [BasedOnRow(typeof(Entities.AgendaDecisionsRow), CheckNames = true)]
    public class AgendaDecisionsForm
    {
        [Hidden]
        public Int64 Meeting { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 5)]
        public String Description { get; set; }
        public DateTime DueDate { get; set; }
        public Int64 AssignedTo { get; set; }
        public Int32 DecisionNumber { get; set; }
        
        public Int64 RelatedAgendaItem { get; set; }
        public Int64 ResolutionStatus { get; set; }
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Images { get; set; }
        [FileUploadEditor(FilenameFormat = "Files/~", CopyToHistory = true)]
        public String Attachments { get; set; }
       
      
    }
}