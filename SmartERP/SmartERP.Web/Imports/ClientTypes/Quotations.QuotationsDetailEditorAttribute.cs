using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Quotations
{
    public partial class QuotationsDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Quotations.QuotationsDetailEditor";

        public QuotationsDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
