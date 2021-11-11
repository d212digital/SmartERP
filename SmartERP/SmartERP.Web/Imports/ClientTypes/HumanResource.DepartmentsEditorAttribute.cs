using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.HumanResource
{
    public partial class DepartmentsEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SmartERP.HumanResource.DepartmentsEditor";

        public DepartmentsEditorAttribute()
            : base(Key)
        {
        }
    }
}
