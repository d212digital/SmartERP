
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[States]")]
    [DisplayName("States"), InstanceName("States")]
    [ReadPermission(Masters.PermissionKeys.States.View)]
    [InsertPermission(Masters.PermissionKeys.States.Create)]
    [UpdatePermission(Masters.PermissionKeys.States.Update)]
    [DeletePermission(Masters.PermissionKeys.States.Delete)]

    [LookupScript("Administration.States", Permission = Masters.PermissionKeys.States.View)]
    public sealed class StatesRow : SmartERP.LoggingRow<StatesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Country"), NotNull,PrimaryKey, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), LookupInclude, TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        public StatesRow()
        {
        }

        public StatesRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public Int64Field CountryId;

            public StringField CountryName;
        }
    }
}
