﻿
namespace SmartERP.Products.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Products"), TableName("[dbo].[Units]")]
    [DisplayName("Units"), InstanceName("Units")]
    [ReadPermission(Inventory.PermissionKeys.Units.View)]
    [InsertPermission(Inventory.PermissionKeys.Units.Create)]
    [UpdatePermission(Inventory.PermissionKeys.Units.Update)]
    [DeletePermission(Inventory.PermissionKeys.Units.Delete)]

    [LookupScript("Products.Units", Permission = Inventory.PermissionKeys.Units.View)]
    public sealed class UnitsRow : SmartERP.LoggingRow<UnitsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch,NameProperty]
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

        public UnitsRow()
        {
        }

        public UnitsRow(RowFields fields)
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
