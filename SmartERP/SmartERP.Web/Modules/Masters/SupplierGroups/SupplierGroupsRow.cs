
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[SupplierGroups]")]
    [DisplayName("Supplier Groups"), InstanceName("Supplier Groups")]
  
    [ReadPermission(PermissionKeys.SupplierGroups.View)]
    [InsertPermission(PermissionKeys.SupplierGroups.Create)]
    [UpdatePermission(PermissionKeys.SupplierGroups.Update)]
    [DeletePermission(PermissionKeys.SupplierGroups.Delete)]


    [LookupScript("Masters.SupplierGroups", Permission = PermissionKeys.SupplierGroups.View)]
    public sealed class SupplierGroupsRow : SmartERP.LoggingRow<SupplierGroupsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
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

        public SupplierGroupsRow()
        {
        }

        public SupplierGroupsRow(RowFields fields)
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
