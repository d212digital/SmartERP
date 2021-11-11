
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Settings")]
        public const string Settings = "Administration:Settings";

        
        [DisplayName("Currencies")]
        public class Currencies
        {
            public const string View = "Administration:Currency:View";
            public const string Create = "Administration:Currency:Create";
            public const string Update = "Administration:Currency:Update";
            public const string Delete = "Administration:Currency:Delete";
        }
       

    }
}
