
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Inventory
{
    [NestedPermissionKeys]
    [DisplayName("Inventory")]
    public class PermissionKeys
    {

        [DisplayName("Products")]
        public class Products
        {
            public const string View = "Inventory:Product:View";
            public const string Create = "Inventory:Product:Create";
            public const string Update = "Inventory:Product:Update";
            public const string Delete = "Inventory:Product:Delete";
        }
        [DisplayName("Categories")]
        public class Categories
        {
            public const string View = "Inventory:Category:View";
            public const string Create = "Inventory:Category:Create";
            public const string Update = "Inventory:Category:Update";
            public const string Delete = "Inventory:Category:Delete";
        }

        [DisplayName("Units")]
        public class Units
        {
            public const string View = "Inventory:Unit:View";
            public const string Create = "Inventory:Unit:Create";
            public const string Update = "Inventory:Unit:Update";
            public const string Delete = "Inventory:Unit:Delete";
        }
        [DisplayName("Brands")]
        public class Brands
        {
            public const string View = "Inventory:Brand:View";
            public const string Create = "Inventory:Brand:Create";
            public const string Update = "Inventory:Brand:Update";
            public const string Delete = "Inventory:Brand:Delete";
        }
        [DisplayName("Damaged Products")]
        public class DamagedProducts
        {
            public const string View = "Inventory:Damaged Product:View";
            public const string Create = "Inventory:Damaged Product:Create";
            public const string Update = "Inventory:Damaged Product:Update";
            public const string Delete = "Inventory:Damaged Product:Delete";
        }

        [DisplayName("Goods Receipt")]
        public class GoodsReceipt
        {
            public const string View = "Inventory:Goods Receipt:View";
            public const string Create = "Inventory:Goods Receipt:Create";
            public const string Update = "Inventory:Goods Receipt:Update";
            public const string Delete = "Inventory:Goods Receipt:Delete";
        }

        [DisplayName("Goods Issue")]
        public class GoodsIssue
        {
            public const string View = "Inventory:Goods Issue:View";
            public const string Create = "Inventory:Goods Issue:Create";
            public const string Update = "Inventory:Goods Issue:Update";
            public const string Delete = "Inventory:Goods Issue:Delete";
        }


        [DisplayName("Stocks")]
        public class Stocks
        {
            public const string View = "Inventory:Stocks:View";
            public const string Create = "Inventory:Stocks:Create";
            public const string Update = "Inventory:Stocks:Update";
            public const string Delete = "Inventory:Stocks:Delete";
        }
    }
}
