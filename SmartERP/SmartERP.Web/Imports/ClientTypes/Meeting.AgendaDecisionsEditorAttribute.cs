using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Meeting
{
    public partial class AgendaDecisionsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Meeting.AgendaDecisionsEditor";

        public AgendaDecisionsEditorAttribute()
            : base(Key)
        {
        }
    }
}
