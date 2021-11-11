
namespace SmartERP.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.AgendaItems")]
    [BasedOnRow(typeof(Entities.AgendaItemsRow), CheckNames = true)]
    public class AgendaItemsForm
    {
        [Hidden]
        public Int64 Meeting { get; set; }
        public String Title { get; set; }
        [TextAreaEditor(Cols =1, Rows =5)]
        public String Description { get; set; }
        public Int64 ItemType { get; set; }
        public Int64 RequestedBy { get; set; }
        public Int32 SequenceNo { get; set; }
       
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Images { get; set; }
      
        [FileUploadEditor(FilenameFormat = "Files/~", CopyToHistory = true)]
        public String Attachments { get; set; }
      
    }
}