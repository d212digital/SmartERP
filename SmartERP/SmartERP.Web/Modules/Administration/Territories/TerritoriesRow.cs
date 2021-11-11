
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Territories]")]
    [DisplayName("Territories"), InstanceName("Territories")]
    [ReadPermission(Masters.PermissionKeys.Territories.View)]
    [InsertPermission(Masters.PermissionKeys.Territories.Create)]
    [UpdatePermission(Masters.PermissionKeys.Territories.Update)]
    [DeletePermission(Masters.PermissionKeys.Territories.Delete)]

    [LookupScript("Administration.Territories", Permission = Masters.PermissionKeys.Territories.View)]
    public sealed class TerritoriesRow : SmartERP.LoggingRow<TerritoriesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Territory Description"), Size(250), NotNull, QuickSearch,NameProperty]
        public String TerritoryDescription
        {
            get { return Fields.TerritoryDescription[this]; }
            set { Fields.TerritoryDescription[this] = value; }
        }

        [DisplayName("Region"), NotNull,PrimaryKey, ForeignKey("[dbo].[Regions]", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(RegionsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Regions")]
        public Int64? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public String RegionName
        {
            get { return Fields.RegionName[this]; }
            set { Fields.RegionName[this] = value; }
        }

        public TerritoriesRow()
        {
        }

        public TerritoriesRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField TerritoryDescription;
            public Int64Field RegionId;

            public StringField RegionName;
        }
    }
}
