using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Administration.Columns
{
    [ColumnsScript("Administration.NavigationList")]
    [BasedOnRow(typeof(NavigationListRow), CheckNames = true)]
    public class NavigationListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Url { get; set; }
        public String Permission { get; set; }
        public String Icon { get; set; }
        public Int64 ParentId { get; set; }
        public Int32 Sort { get; set; }
    }
}