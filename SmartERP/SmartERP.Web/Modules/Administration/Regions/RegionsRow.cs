
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Regions]")]
    [DisplayName("Regions"), InstanceName("Regions")]
    [ReadPermission(Masters.PermissionKeys.Regions.View)]
    [InsertPermission(Masters.PermissionKeys.Regions.Create)]
    [UpdatePermission(Masters.PermissionKeys.Regions.Update)]
    [DeletePermission(Masters.PermissionKeys.Regions.Delete)]

    [LookupScript("Administration.Regions", Permission = Masters.PermissionKeys.Regions.View)]
    public sealed class RegionsRow : SmartERP.LoggingRow<RegionsRow.RowFields>, IIdRow, INameRow
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

        public RegionsRow()
        {
        }

        public RegionsRow(RowFields fields)
            : base(fields)
        {
        }
       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
        }
    }
}
