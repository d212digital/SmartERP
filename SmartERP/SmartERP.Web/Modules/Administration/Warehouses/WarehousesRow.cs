
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Warehouses]")]
    [DisplayName("Warehouses"), InstanceName("Warehouses")]
  
    [ReadPermission(Masters.PermissionKeys.Warehouses.View)]
    [InsertPermission(Masters.PermissionKeys.Warehouses.Create)]
    [UpdatePermission(Masters.PermissionKeys.Warehouses.Update)]
    [DeletePermission(Masters.PermissionKeys.Warehouses.Delete)]

    [LookupScript("Administration.Warehouses", Permission = Masters.PermissionKeys.Warehouses.View)]
    public sealed class WarehousesRow : SmartERP.LoggingRow<WarehousesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("State"), ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "Administration.States")]
        public Int64? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[Cities]", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "Administration.Cities")]
        public Int64? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Phone"), Size(250)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        [DisplayName("Country Insert Date"), Expression("jCountry.[InsertDate]")]
        public DateTime? CountryInsertDate
        {
            get { return Fields.CountryInsertDate[this]; }
            set { Fields.CountryInsertDate[this] = value; }
        }

        [DisplayName("Country Insert User Id"), Expression("jCountry.[InsertUserId]")]
        public Int32? CountryInsertUserId
        {
            get { return Fields.CountryInsertUserId[this]; }
            set { Fields.CountryInsertUserId[this] = value; }
        }

        [DisplayName("Country Update Date"), Expression("jCountry.[UpdateDate]")]
        public DateTime? CountryUpdateDate
        {
            get { return Fields.CountryUpdateDate[this]; }
            set { Fields.CountryUpdateDate[this] = value; }
        }

        [DisplayName("Country Update User Id"), Expression("jCountry.[UpdateUserId]")]
        public Int32? CountryUpdateUserId
        {
            get { return Fields.CountryUpdateUserId[this]; }
            set { Fields.CountryUpdateUserId[this] = value; }
        }

        [DisplayName("Country Delete Date"), Expression("jCountry.[DeleteDate]")]
        public DateTime? CountryDeleteDate
        {
            get { return Fields.CountryDeleteDate[this]; }
            set { Fields.CountryDeleteDate[this] = value; }
        }

        [DisplayName("Country Delete User Id"), Expression("jCountry.[DeleteUserId]")]
        public Int32? CountryDeleteUserId
        {
            get { return Fields.CountryDeleteUserId[this]; }
            set { Fields.CountryDeleteUserId[this] = value; }
        }

        [DisplayName("Country Is Active"), Expression("jCountry.[IsActive]")]
        public Int32? CountryIsActive
        {
            get { return Fields.CountryIsActive[this]; }
            set { Fields.CountryIsActive[this] = value; }
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

        [DisplayName("State Insert Date"), Expression("jState.[InsertDate]")]
        public DateTime? StateInsertDate
        {
            get { return Fields.StateInsertDate[this]; }
            set { Fields.StateInsertDate[this] = value; }
        }

        [DisplayName("State Insert User Id"), Expression("jState.[InsertUserId]")]
        public Int32? StateInsertUserId
        {
            get { return Fields.StateInsertUserId[this]; }
            set { Fields.StateInsertUserId[this] = value; }
        }

        [DisplayName("State Update Date"), Expression("jState.[UpdateDate]")]
        public DateTime? StateUpdateDate
        {
            get { return Fields.StateUpdateDate[this]; }
            set { Fields.StateUpdateDate[this] = value; }
        }

        [DisplayName("State Update User Id"), Expression("jState.[UpdateUserId]")]
        public Int32? StateUpdateUserId
        {
            get { return Fields.StateUpdateUserId[this]; }
            set { Fields.StateUpdateUserId[this] = value; }
        }

        [DisplayName("State Delete Date"), Expression("jState.[DeleteDate]")]
        public DateTime? StateDeleteDate
        {
            get { return Fields.StateDeleteDate[this]; }
            set { Fields.StateDeleteDate[this] = value; }
        }

        [DisplayName("State Delete User Id"), Expression("jState.[DeleteUserId]")]
        public Int32? StateDeleteUserId
        {
            get { return Fields.StateDeleteUserId[this]; }
            set { Fields.StateDeleteUserId[this] = value; }
        }

        [DisplayName("State Is Active"), Expression("jState.[IsActive]")]
        public Int32? StateIsActive
        {
            get { return Fields.StateIsActive[this]; }
            set { Fields.StateIsActive[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("City Country Id"), Expression("jCity.[CountryId]")]
        public Int64? CityCountryId
        {
            get { return Fields.CityCountryId[this]; }
            set { Fields.CityCountryId[this] = value; }
        }

        [DisplayName("City State Id"), Expression("jCity.[StateId]")]
        public Int64? CityStateId
        {
            get { return Fields.CityStateId[this]; }
            set { Fields.CityStateId[this] = value; }
        }

        [DisplayName("City Insert Date"), Expression("jCity.[InsertDate]")]
        public DateTime? CityInsertDate
        {
            get { return Fields.CityInsertDate[this]; }
            set { Fields.CityInsertDate[this] = value; }
        }

        [DisplayName("City Insert User Id"), Expression("jCity.[InsertUserId]")]
        public Int32? CityInsertUserId
        {
            get { return Fields.CityInsertUserId[this]; }
            set { Fields.CityInsertUserId[this] = value; }
        }

        [DisplayName("City Update Date"), Expression("jCity.[UpdateDate]")]
        public DateTime? CityUpdateDate
        {
            get { return Fields.CityUpdateDate[this]; }
            set { Fields.CityUpdateDate[this] = value; }
        }

        [DisplayName("City Update User Id"), Expression("jCity.[UpdateUserId]")]
        public Int32? CityUpdateUserId
        {
            get { return Fields.CityUpdateUserId[this]; }
            set { Fields.CityUpdateUserId[this] = value; }
        }

        [DisplayName("City Delete Date"), Expression("jCity.[DeleteDate]")]
        public DateTime? CityDeleteDate
        {
            get { return Fields.CityDeleteDate[this]; }
            set { Fields.CityDeleteDate[this] = value; }
        }

        [DisplayName("City Delete User Id"), Expression("jCity.[DeleteUserId]")]
        public Int32? CityDeleteUserId
        {
            get { return Fields.CityDeleteUserId[this]; }
            set { Fields.CityDeleteUserId[this] = value; }
        }

        [DisplayName("City Is Active"), Expression("jCity.[IsActive]")]
        public Int32? CityIsActive
        {
            get { return Fields.CityIsActive[this]; }
            set { Fields.CityIsActive[this] = value; }
        }

        public WarehousesRow()
        {
        }

        public WarehousesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public StringField Description;
            public Int64Field CountryId;
            public Int64Field StateId;
            public Int64Field CityId;
            public StringField Phone;
            public StringField Address;

            public StringField CountryName;
            public DateTimeField CountryInsertDate;
            public Int32Field CountryInsertUserId;
            public DateTimeField CountryUpdateDate;
            public Int32Field CountryUpdateUserId;
            public DateTimeField CountryDeleteDate;
            public Int32Field CountryDeleteUserId;
            public Int32Field CountryIsActive;

            public StringField StateName;
            public Int64Field StateCountryId;
            public DateTimeField StateInsertDate;
            public Int32Field StateInsertUserId;
            public DateTimeField StateUpdateDate;
            public Int32Field StateUpdateUserId;
            public DateTimeField StateDeleteDate;
            public Int32Field StateDeleteUserId;
            public Int32Field StateIsActive;

            public StringField CityName;
            public Int64Field CityCountryId;
            public Int64Field CityStateId;
            public DateTimeField CityInsertDate;
            public Int32Field CityInsertUserId;
            public DateTimeField CityUpdateDate;
            public Int32Field CityUpdateUserId;
            public DateTimeField CityDeleteDate;
            public Int32Field CityDeleteUserId;
            public Int32Field CityIsActive;
        }
    }
}
