using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Meeting
{
    public partial class AgendaItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Meeting.AgendaItemsEditor";

        public AgendaItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
