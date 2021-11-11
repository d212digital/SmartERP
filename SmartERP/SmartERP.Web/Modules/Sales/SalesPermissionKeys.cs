
using Serenity.ComponentModel;

using System.ComponentModel;

namespace SmartERP.Sales
{
    [NestedPermissionKeys]
    [DisplayName("Sales")]
    public class PermissionKeys
    {        
        
        [DisplayName("Sales")]
        public class Sales
        {
            public const string View = "Sales:Sale:View";
            public const string Create = "Sales:Sale:Create";
            public const string Update = "Sales:Sale:Update";
            public const string Delete = "Sales:Sale:Delete";
        }
        [DisplayName("Quotations")]
        public class Quotations
        {
            public const string View = "Sales:Quotation:View";
            public const string Create = "Sales:Quotation:Create";
            public const string Update = "Sales:Quotation:Update";
            public const string Delete = "Sales:Quotation:Delete";
        }
    }
}
