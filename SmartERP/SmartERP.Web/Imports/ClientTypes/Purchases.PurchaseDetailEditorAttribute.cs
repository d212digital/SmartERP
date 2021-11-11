using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Purchases
{
    public partial class PurchaseDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Purchases.PurchaseDetailEditor";

        public PurchaseDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
