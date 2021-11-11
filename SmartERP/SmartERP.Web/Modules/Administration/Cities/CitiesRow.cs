
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Cities]")]
    [DisplayName("Cities"), InstanceName("Cities")]
   
    [ReadPermission(Masters.PermissionKeys.Cities.View)]
    [InsertPermission(Masters.PermissionKeys.Cities.Create)]
    [UpdatePermission(Masters.PermissionKeys.Cities.Update)]
    [DeletePermission(Masters.PermissionKeys.Cities.Delete)]

    [LookupScript("Administration.Cities", Permission = Masters.PermissionKeys.Cities.View)]
    
    public sealed class CitiesRow : SmartERP.LoggingRow<CitiesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
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

        [DisplayName("Country"), NotNull,PrimaryKey, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryName"), LookupInclude]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("State"), NotNull, ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName"), LookupInclude]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, FilterField = "IsActive",CascadeField = "CountryId", CascadeFrom = "CountryId", FilterValue = "1", DialogType = "Administration.States")]
        public Int64? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        [DisplayName("State Name"), Expression("jState.[Name]")]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }

        [DisplayName("State Country Id"), Expression("jState.[CountryId]")]
        public Int64? StateCountryId
        {
            get { return Fields.StateCountryId[this]; }
            set { Fields.StateCountryId[this] = value; }
        }

      
        public CitiesRow()
        {
        }

        public CitiesRow(RowFields fields)
            : base(fields)
        {
        }
        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public Int64Field CountryId;
            public Int64Field StateId;

            public StringField CountryName;

            public StringField StateName;
            public Int64Field StateCountryId;
        }
    }
}
