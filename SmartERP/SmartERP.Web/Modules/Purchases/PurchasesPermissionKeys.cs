
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Purchases
{
    [NestedPermissionKeys]
    [DisplayName("Purchases")]
    public class PermissionKeys
    {       
       
        [DisplayName("Purchasing")]
        public class Purchases
        {
            public const string View = "Purchasing:Purchase:View";
            public const string Create = "Purchasing:Purchase:Create";
            public const string Update = "Purchasing:Purchase:Update";
            public const string Delete = "Purchasing:Purchase:Delete";
        }
    }
}
