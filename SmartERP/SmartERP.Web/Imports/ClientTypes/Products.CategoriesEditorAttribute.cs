using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Products
{
    public partial class CategoriesEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SmartERP.Products.CategoriesEditor";

        public CategoriesEditorAttribute()
            : base(Key)
        {
        }
    }
}
