
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.HumanResource
{
    [NestedPermissionKeys]
    [DisplayName("Human Resource")]
    public class PermissionKeys
    {        
        
        [DisplayName("Employees")]
        public class Employees
        {
            public const string View = "Human Resource:Employee:View";
            public const string Create = "Human Resource:Employee:Create";
            public const string Update = "Human Resource:Employee:Update";
            public const string Delete = "Human Resource:Employee:Delete";
        }
        [DisplayName("Designations")]
        public class Designations
        {
            public const string View = "Human Resource:Designation:View";
            public const string Create = "Human Resource:Designation:Create";
            public const string Update = "Human Resource:Designation:Update";
            public const string Delete = "Human Resource:Designation:Delete";
        }
        [DisplayName("Departments")]
        public class Departments
        {
            public const string View = "Human Resource:Department:View";
            public const string Create = "Human Resource:Department:Create";
            public const string Update = "Human Resource:Department:Update";
            public const string Delete = "Human Resource:Department:Delete";
        }
        [DisplayName("Attendance")]
        public class Attendance
        {
            public const string View = "Human Resource:Attendance:View";
            public const string Create = "Human Resource:Attendance:Create";
            public const string Update = "Human Resource:Attendance:Update";
            public const string Delete = "Human Resource:Attendance:Delete";
        }
    }
}
