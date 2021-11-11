using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.HumanResource
{
    public partial class DesignationsEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SmartERP.HumanResource.DesignationsEditor";

        public DesignationsEditorAttribute()
            : base(Key)
        {
        }
    }
}
