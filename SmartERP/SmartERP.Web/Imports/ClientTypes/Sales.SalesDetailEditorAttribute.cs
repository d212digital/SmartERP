using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Sales
{
    public partial class SalesDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Sales.SalesDetailEditor";

        public SalesDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
