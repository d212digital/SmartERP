
namespace SmartERP.HumanResource.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Administration.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HumanResource"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission(PermissionKeys.Employees.View)]
    [InsertPermission(PermissionKeys.Employees.Create)]
    [UpdatePermission(PermissionKeys.Employees.Update)]
    [DeletePermission(PermissionKeys.Employees.Delete)]
    [LookupScript("HumanResource.Employees", Permission = PermissionKeys.Employees.View)]
    public sealed class EmployeesRow : SmartERP.LoggingRow<EmployeesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("First Name"), Size(100), NotNull, QuickSearch]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(100), NotNull]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Designation"), NotNull,PrimaryKey, ForeignKey("[dbo].[Designations]", "Id"), LeftJoin("jDesignation"), TextualField("Designation")]
        [DesignationsEditor(InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "HumanResource.Designations")]
        public Int64? DesignationId
        {
            get { return Fields.DesignationId[this]; }
            set { Fields.DesignationId[this] = value; }
        }

        [DisplayName("Department"), NotNull,PrimaryKey, ForeignKey("[dbo].[Departments]", "Id"), LeftJoin("jDepartment"), TextualField("Department")]
        [DepartmentsEditor(InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "HumanResource.Departments")]
        public Int64? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Rate Type"), NotNull]
        public RateKind? RateType
        {
            get { return (RateKind)Fields.RateType[this]; }
            set { Fields.RateType[this] = (Int32)value; }
        }

        [DisplayName("Phone"), Size(250), NotNull]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Houre Rate Salary"), NotNull]
        public Double? HoureRateSalary
        {
            get { return Fields.HoureRateSalary[this]; }
            set { Fields.HoureRateSalary[this] = value; }
        }

        [DisplayName("Email"), Size(250)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Blood Group")]
        public BloodGroupKind BloodGroup
        {
            get { return (BloodGroupKind)Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] =(Int32) value; }
        }

        [DisplayName("Picture"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Picture
        {
            get { return Fields.Picture[this]; }
            set { Fields.Picture[this] = value; }
        }

        [DisplayName("Country"), NotNull, PrimaryKey,  ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("State"), NotNull, PrimaryKey, ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "Administration.States")]
        public Int64? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("City"), NotNull, PrimaryKey, ForeignKey("[dbo].[Cities]", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "Administration.Cities")]
        public Int64? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Zip Code"), Size(50)]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("Address"), Size(4000), NotNull]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("User")] 
        [LookupEditor(typeof(UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Region"), PrimaryKey, ForeignKey("[dbo].[Regions]", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(RegionsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Regions")]
        public Int64? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Territory"), PrimaryKey, ForeignKey("[dbo].[Territories]", "Id"), LeftJoin("jTerritory"), TextualField("TerritoryTerritoryDescription")]
        [LookupEditor(typeof(TerritoriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1",  CascadeField = "RegionId", CascadeFrom = "RegionId", DialogType = "Administration.Territories")]
        public Int64? TerritoryId
        {
            get { return Fields.TerritoryId[this]; }
            set { Fields.TerritoryId[this] = value; }
        }

        [DisplayName("Designation"), Expression("jDesignation.[Designation]")]
        public String Designation
        {
            get { return Fields.Designation[this]; }
            set { Fields.Designation[this] = value; }
        }

        [DisplayName("Designation Description"), Expression("jDesignation.[Description]")]
        public String DesignationDescription
        {
            get { return Fields.DesignationDescription[this]; }
            set { Fields.DesignationDescription[this] = value; }
        }

        [DisplayName("Designation Parent Designation Id"), Expression("jDesignation.[ParentDesignationId]")]
        public Int64? DesignationParentDesignationId
        {
            get { return Fields.DesignationParentDesignationId[this]; }
            set { Fields.DesignationParentDesignationId[this] = value; }
        }

        [DisplayName("Department"), Expression("jDepartment.[Department]")]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        [DisplayName("Department Description"), Expression("jDepartment.[Description]")]
        public String DepartmentDescription
        {
            get { return Fields.DepartmentDescription[this]; }
            set { Fields.DepartmentDescription[this] = value; }
        }

        [DisplayName("Department Parent Department Id"), Expression("jDepartment.[ParentDepartmentId]")]
        public Int64? DepartmentParentDepartmentId
        {
            get { return Fields.DepartmentParentDepartmentId[this]; }
            set { Fields.DepartmentParentDepartmentId[this] = value; }
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

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public String RegionName
        {
            get { return Fields.RegionName[this]; }
            set { Fields.RegionName[this] = value; }
        }

        [DisplayName("Region Insert Date"), Expression("jRegion.[InsertDate]")]
        public DateTime? RegionInsertDate
        {
            get { return Fields.RegionInsertDate[this]; }
            set { Fields.RegionInsertDate[this] = value; }
        }

        [DisplayName("Region Insert User Id"), Expression("jRegion.[InsertUserId]")]
        public Int32? RegionInsertUserId
        {
            get { return Fields.RegionInsertUserId[this]; }
            set { Fields.RegionInsertUserId[this] = value; }
        }

        [DisplayName("Region Update Date"), Expression("jRegion.[UpdateDate]")]
        public DateTime? RegionUpdateDate
        {
            get { return Fields.RegionUpdateDate[this]; }
            set { Fields.RegionUpdateDate[this] = value; }
        }

        [DisplayName("Region Update User Id"), Expression("jRegion.[UpdateUserId]")]
        public Int32? RegionUpdateUserId
        {
            get { return Fields.RegionUpdateUserId[this]; }
            set { Fields.RegionUpdateUserId[this] = value; }
        }

        [DisplayName("Region Delete Date"), Expression("jRegion.[DeleteDate]")]
        public DateTime? RegionDeleteDate
        {
            get { return Fields.RegionDeleteDate[this]; }
            set { Fields.RegionDeleteDate[this] = value; }
        }

        [DisplayName("Region Delete User Id"), Expression("jRegion.[DeleteUserId]")]
        public Int32? RegionDeleteUserId
        {
            get { return Fields.RegionDeleteUserId[this]; }
            set { Fields.RegionDeleteUserId[this] = value; }
        }

        [DisplayName("Region Is Active"), Expression("jRegion.[IsActive]")]
        public Int32? RegionIsActive
        {
            get { return Fields.RegionIsActive[this]; }
            set { Fields.RegionIsActive[this] = value; }
        }

        [DisplayName("Territory Territory Description"), Expression("jTerritory.[TerritoryDescription]")]
        public String TerritoryTerritoryDescription
        {
            get { return Fields.TerritoryTerritoryDescription[this]; }
            set { Fields.TerritoryTerritoryDescription[this] = value; }
        }

        [DisplayName("Territory Region Id"), Expression("jTerritory.[RegionId]")]
        public Int64? TerritoryRegionId
        {
            get { return Fields.TerritoryRegionId[this]; }
            set { Fields.TerritoryRegionId[this] = value; }
        }

        [DisplayName("Territory Insert Date"), Expression("jTerritory.[InsertDate]")]
        public DateTime? TerritoryInsertDate
        {
            get { return Fields.TerritoryInsertDate[this]; }
            set { Fields.TerritoryInsertDate[this] = value; }
        }

        [DisplayName("Territory Insert User Id"), Expression("jTerritory.[InsertUserId]")]
        public Int32? TerritoryInsertUserId
        {
            get { return Fields.TerritoryInsertUserId[this]; }
            set { Fields.TerritoryInsertUserId[this] = value; }
        }

        [DisplayName("Territory Update Date"), Expression("jTerritory.[UpdateDate]")]
        public DateTime? TerritoryUpdateDate
        {
            get { return Fields.TerritoryUpdateDate[this]; }
            set { Fields.TerritoryUpdateDate[this] = value; }
        }

        [DisplayName("Territory Update User Id"), Expression("jTerritory.[UpdateUserId]")]
        public Int32? TerritoryUpdateUserId
        {
            get { return Fields.TerritoryUpdateUserId[this]; }
            set { Fields.TerritoryUpdateUserId[this] = value; }
        }

        [DisplayName("Territory Delete Date"), Expression("jTerritory.[DeleteDate]")]
        public DateTime? TerritoryDeleteDate
        {
            get { return Fields.TerritoryDeleteDate[this]; }
            set { Fields.TerritoryDeleteDate[this] = value; }
        }

        [DisplayName("Territory Delete User Id"), Expression("jTerritory.[DeleteUserId]")]
        public Int32? TerritoryDeleteUserId
        {
            get { return Fields.TerritoryDeleteUserId[this]; }
            set { Fields.TerritoryDeleteUserId[this] = value; }
        }

        [DisplayName("Territory Is Active"), Expression("jTerritory.[IsActive]")]
        public Int32? TerritoryIsActive
        {
            get { return Fields.TerritoryIsActive[this]; }
            set { Fields.TerritoryIsActive[this] = value; }
        }
        [Expression("(t0.[FirstName] + ' ' + t0.[LastName])"),NameProperty]
        public string EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }
        public EmployeesRow()
        {
        }

        public EmployeesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField FirstName;
            public StringField LastName;
            public StringField EmployeeFullName;
            public Int64Field DesignationId;
            public Int64Field DepartmentId;
            public Int32Field RateType;
            public StringField Phone;
            public DoubleField HoureRateSalary;
            public StringField Email;
            public Int32Field BloodGroup;
            public StringField Picture;
            public Int64Field CountryId;
            public Int64Field StateId;
            public Int64Field CityId;
            public StringField ZipCode;
            public StringField Address;
            public Int32Field UserId;
            public Int64Field RegionId;
            public Int64Field TerritoryId;

            public StringField Designation;
            public StringField DesignationDescription;
            public Int64Field DesignationParentDesignationId;

            public StringField Department;
            public StringField DepartmentDescription;
            public Int64Field DepartmentParentDepartmentId;

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

            public StringField RegionName;
            public DateTimeField RegionInsertDate;
            public Int32Field RegionInsertUserId;
            public DateTimeField RegionUpdateDate;
            public Int32Field RegionUpdateUserId;
            public DateTimeField RegionDeleteDate;
            public Int32Field RegionDeleteUserId;
            public Int32Field RegionIsActive;

            public StringField TerritoryTerritoryDescription;
            public Int64Field TerritoryRegionId;
            public DateTimeField TerritoryInsertDate;
            public Int32Field TerritoryInsertUserId;
            public DateTimeField TerritoryUpdateDate;
            public Int32Field TerritoryUpdateUserId;
            public DateTimeField TerritoryDeleteDate;
            public Int32Field TerritoryDeleteUserId;
            public Int32Field TerritoryIsActive;
        }
    }
}
