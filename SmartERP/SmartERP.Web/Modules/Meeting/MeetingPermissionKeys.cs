
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Meeting
{
    [NestedPermissionKeys]
    [DisplayName("Meeting")]
    public class PermissionKeys
    {

        [DisplayName("Meetings")]
        public class Meetings
        {
            public const string View = "Masters:Meeting:View";
            public const string Create = "Masters:Meeting:Create";
            public const string Update = "Masters:Meeting:Update";
            public const string Delete = "Masters:Meeting:Delete";
        }
       
    }
       
}
