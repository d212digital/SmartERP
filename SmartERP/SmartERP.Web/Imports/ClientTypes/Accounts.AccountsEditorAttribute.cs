using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Accounts
{
    public partial class AccountsEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SmartERP.Accounts.AccountsEditor";

        public AccountsEditorAttribute()
            : base(Key)
        {
        }
    }
}
