
namespace SmartERP.Products.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Products"), TableName("[dbo].[Brands]")]
    [DisplayName("Brands"), InstanceName("Brands")]
    [ReadPermission(Inventory.PermissionKeys.Brands.View)]
    [InsertPermission(Inventory.PermissionKeys.Brands.Create)]
    [UpdatePermission(Inventory.PermissionKeys.Brands.Update)]
    [DeletePermission(Inventory.PermissionKeys.Brands.Delete)]

    [LookupScript("Products.Brands", Permission = Inventory.PermissionKeys.Brands.View,Expiration =-1)]
    public sealed class BrandsRow : SmartERP.LoggingRow<BrandsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        public BrandsRow()
        {
        }

        public BrandsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public StringField Description;
        }
    }
}
