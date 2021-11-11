
using Serenity.ComponentModel;

using System.ComponentModel;

namespace SmartERP.BusinessPartners
{
    [NestedPermissionKeys]
    [DisplayName("Reports")]
    public class PermissionKeys
    {

        [DisplayName("Customers")]
        public class Customers
        {
            public const string View = "Business Partners:Customer:View";
            public const string Create = "Business Partners:Customer:Create";
            public const string Update = "Business Partners:Customer:Update";
            public const string Delete = "Business Partners:Customer:Delete";
        }
        [DisplayName("Suppliers")]
        public class Suppliers
        {
            public const string View = "Business Partners:Supplier:View";
            public const string Create = "Business Partners:Supplier:Create";
            public const string Update = "Business Partners:Supplier:Update";
            public const string Delete = "Business Partners:Supplier:Delete";
        }
    }
}
