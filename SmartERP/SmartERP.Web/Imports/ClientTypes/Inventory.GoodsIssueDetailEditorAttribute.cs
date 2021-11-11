using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Inventory
{
    public partial class GoodsIssueDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Inventory.GoodsIssueDetailEditor";

        public GoodsIssueDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
