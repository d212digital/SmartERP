using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Administration.Forms
{
    [FormScript("Administration.NavigationList")]
    [BasedOnRow(typeof(NavigationListRow), CheckNames = true)]
    public class NavigationListForm
    {
        public String Title { get; set; }
        public String Url { get; set; }
        public String Permission { get; set; }
        public String Icon { get; set; }
        public Int64 ParentId { get; set; }
        public Int32 Sort { get; set; }
    }
}