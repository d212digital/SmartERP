using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Services
{
    public partial class ServiceInvoicesDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Services.ServiceInvoicesDetailEditor";

        public ServiceInvoicesDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
