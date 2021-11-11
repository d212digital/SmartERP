
using Serenity.ComponentModel;

using System.ComponentModel;

namespace SmartERP.Services
{
    [NestedPermissionKeys]
    [DisplayName("Services")]
    public class PermissionKeys
    {       
       
        //[DisplayName("Services")]
        //public class Services
        //{
        //    public const string View = "Services:Service:View";
        //    public const string Create = "Services:Service:Create";
        //    public const string Update = "Services:Service:Update";
        //    public const string Delete = "Services:Service:Delete";
        //}
        [DisplayName("ServiceInvoices")]
        public class ServiceInvoices
        {
            public const string View = "Services:Service Invoice:View";
            public const string Create = "Services:Service Invoice:Create";
            public const string Update = "Services:Service Invoice:Update";
            public const string Delete = "Services:Service Invoice:Delete";
        }
    }
}
