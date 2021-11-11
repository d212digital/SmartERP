using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Inventory
{
    public partial class GoodsReceiptDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Inventory.GoodsReceiptDetailEditor";

        public GoodsReceiptDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
