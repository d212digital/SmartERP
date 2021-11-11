
namespace SmartERP.Meeting.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.HumanResource.Entities;
    using SmartERP.Masters.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meeting"), TableName("[dbo].[Meetings]")]
    [DisplayName("Meetings"), InstanceName("Meetings")]
    [ReadPermission(PermissionKeys.Meetings.View)]
    [InsertPermission(PermissionKeys.Meetings.Create)]
    [UpdatePermission(PermissionKeys.Meetings.Update)]
    [DeletePermission(PermissionKeys.Meetings.Delete)]

    [LookupScript("Meetings.Meetings", Permission = PermissionKeys.Meetings.View)]
   
    public sealed class MeetingsRow : SmartERP.LoggingRow<MeetingsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Meeting Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String MeetingName
        {
            get { return Fields.MeetingName[this]; }
            set { Fields.MeetingName[this] = value; }
        }

        [DisplayName("Meeting Type"), NotNull,PrimaryKey, ForeignKey("[dbo].[MeetingTypes]", "Id"), LeftJoin("jMeetingType"), TextualField("MeetingTypeName")]
        [LookupEditor(typeof(MeetingTypesRow),InplaceAdd =true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? MeetingType
        {
            get { return Fields.MeetingType[this]; }
            set { Fields.MeetingType[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Department"), PrimaryKey, ForeignKey("[dbo].[Departments]", "Id"), LeftJoin("jDepartment"), TextualField("Department1")]
        [LookupEditor(typeof(DepartmentsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        [DisplayName("Location"), NotNull, PrimaryKey, ForeignKey("[dbo].[Locations]", "Id"), LeftJoin("jLocation"), TextualField("LocationName")]
        [LookupEditor(typeof(LocationsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Organized By"), PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jOrganizedBy"), TextualField("OrganizedByFullName")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? OrganizedBy
        {
            get { return Fields.OrganizedBy[this]; }
            set { Fields.OrganizedBy[this] = value; }
        }
        [DisplayName("Organized By"), Expression("jOrganizedBy.[FirstName] +' '+ jOrganizedBy.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String OrganizedByFullName
        {
            get { return Fields.OrganizedByFullName[this]; }
            set { Fields.OrganizedByFullName[this] = value; }
        }
        [DisplayName("Reporter"), PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jReporter"), TextualField("ReporterFullName")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? Reporter
        {
            get { return Fields.Reporter[this]; }
            set { Fields.Reporter[this] = value; }
        }
        [DisplayName("Reporter"), Expression("jReporter.[FirstName] +' '+ jReporter.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String ReporterFullName
        {
            get { return Fields.ReporterFullName[this]; }
            set { Fields.ReporterFullName[this] = value; }
        }
        [MasterDetailRelation(foreignKey: "Meeting")]
        [DisplayName("Attendees"), NotMapped]
        public List<MeetingAttendeesRow> Attendees
        {
            get { return Fields.Attendees[this]; }
            set { Fields.Attendees[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "Meeting")]
        [DisplayName("Agenda Items"), NotMapped]
        public List<AgendaItemsRow> AgendaItems
        {
            get { return Fields.AgendaItems[this]; }
            set { Fields.AgendaItems[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "Meeting")]
        [DisplayName("Agenda Decisions"), NotMapped]
        public List<AgendaDecisionsRow> AgendaDecisions
        {
            get { return Fields.AgendaDecisions[this]; }
            set { Fields.AgendaDecisions[this] = value; }
        }




        [DisplayName("Meeting Type Name"), Expression("jMeetingType.[Name]")]
        public String MeetingTypeName
        {
            get { return Fields.MeetingTypeName[this]; }
            set { Fields.MeetingTypeName[this] = value; }
        }

        [DisplayName("Department"), Expression("jDepartment.[Department]")]
        public String Department1
        {
            get { return Fields.Department1[this]; }
            set { Fields.Department1[this] = value; }
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

        [DisplayName("Department Insert Date"), Expression("jDepartment.[InsertDate]")]
        public DateTime? DepartmentInsertDate
        {
            get { return Fields.DepartmentInsertDate[this]; }
            set { Fields.DepartmentInsertDate[this] = value; }
        }

        [DisplayName("Department Insert User Id"), Expression("jDepartment.[InsertUserId]")]
        public Int32? DepartmentInsertUserId
        {
            get { return Fields.DepartmentInsertUserId[this]; }
            set { Fields.DepartmentInsertUserId[this] = value; }
        }

        [DisplayName("Department Update Date"), Expression("jDepartment.[UpdateDate]")]
        public DateTime? DepartmentUpdateDate
        {
            get { return Fields.DepartmentUpdateDate[this]; }
            set { Fields.DepartmentUpdateDate[this] = value; }
        }

        [DisplayName("Department Update User Id"), Expression("jDepartment.[UpdateUserId]")]
        public Int32? DepartmentUpdateUserId
        {
            get { return Fields.DepartmentUpdateUserId[this]; }
            set { Fields.DepartmentUpdateUserId[this] = value; }
        }

        [DisplayName("Department Delete Date"), Expression("jDepartment.[DeleteDate]")]
        public DateTime? DepartmentDeleteDate
        {
            get { return Fields.DepartmentDeleteDate[this]; }
            set { Fields.DepartmentDeleteDate[this] = value; }
        }

        [DisplayName("Department Delete User Id"), Expression("jDepartment.[DeleteUserId]")]
        public Int32? DepartmentDeleteUserId
        {
            get { return Fields.DepartmentDeleteUserId[this]; }
            set { Fields.DepartmentDeleteUserId[this] = value; }
        }

        [DisplayName("Department Is Active"), Expression("jDepartment.[IsActive]")]
        public Int32? DepartmentIsActive
        {
            get { return Fields.DepartmentIsActive[this]; }
            set { Fields.DepartmentIsActive[this] = value; }
        }

        [DisplayName("Location Name"), Expression("jLocation.[Name]")]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
        }

        [DisplayName("Location Country Id"), Expression("jLocation.[CountryId]")]
        public Int64? LocationCountryId
        {
            get { return Fields.LocationCountryId[this]; }
            set { Fields.LocationCountryId[this] = value; }
        }

        [DisplayName("Location State Id"), Expression("jLocation.[StateId]")]
        public Int64? LocationStateId
        {
            get { return Fields.LocationStateId[this]; }
            set { Fields.LocationStateId[this] = value; }
        }

        [DisplayName("Location City Id"), Expression("jLocation.[CityId]")]
        public Int64? LocationCityId
        {
            get { return Fields.LocationCityId[this]; }
            set { Fields.LocationCityId[this] = value; }
        }

        [DisplayName("Location Address"), Expression("jLocation.[Address]")]
        public String LocationAddress
        {
            get { return Fields.LocationAddress[this]; }
            set { Fields.LocationAddress[this] = value; }
        }

        [DisplayName("Location Latitude"), Expression("jLocation.[Latitude]")]
        public String LocationLatitude
        {
            get { return Fields.LocationLatitude[this]; }
            set { Fields.LocationLatitude[this] = value; }
        }

        [DisplayName("Location Longitude"), Expression("jLocation.[Longitude]")]
        public String LocationLongitude
        {
            get { return Fields.LocationLongitude[this]; }
            set { Fields.LocationLongitude[this] = value; }
        }

        [DisplayName("Organized By First Name"), Expression("jOrganizedBy.[FirstName]")]
        public String OrganizedByFirstName
        {
            get { return Fields.OrganizedByFirstName[this]; }
            set { Fields.OrganizedByFirstName[this] = value; }
        }

        [DisplayName("Organized By Last Name"), Expression("jOrganizedBy.[LastName]")]
        public String OrganizedByLastName
        {
            get { return Fields.OrganizedByLastName[this]; }
            set { Fields.OrganizedByLastName[this] = value; }
        }

        [DisplayName("Organized By Designation Id"), Expression("jOrganizedBy.[DesignationId]")]
        public Int64? OrganizedByDesignationId
        {
            get { return Fields.OrganizedByDesignationId[this]; }
            set { Fields.OrganizedByDesignationId[this] = value; }
        }

        [DisplayName("Organized By Department Id"), Expression("jOrganizedBy.[DepartmentId]")]
        public Int64? OrganizedByDepartmentId
        {
            get { return Fields.OrganizedByDepartmentId[this]; }
            set { Fields.OrganizedByDepartmentId[this] = value; }
        }

        [DisplayName("Organized By Rate Type"), Expression("jOrganizedBy.[RateType]")]
        public Int32? OrganizedByRateType
        {
            get { return Fields.OrganizedByRateType[this]; }
            set { Fields.OrganizedByRateType[this] = value; }
        }

        [DisplayName("Organized By Phone"), Expression("jOrganizedBy.[Phone]")]
        public String OrganizedByPhone
        {
            get { return Fields.OrganizedByPhone[this]; }
            set { Fields.OrganizedByPhone[this] = value; }
        }

        [DisplayName("Organized By Houre Rate Salary"), Expression("jOrganizedBy.[HoureRateSalary]")]
        public Double? OrganizedByHoureRateSalary
        {
            get { return Fields.OrganizedByHoureRateSalary[this]; }
            set { Fields.OrganizedByHoureRateSalary[this] = value; }
        }

        [DisplayName("Organized By Email"), Expression("jOrganizedBy.[Email]")]
        public String OrganizedByEmail
        {
            get { return Fields.OrganizedByEmail[this]; }
            set { Fields.OrganizedByEmail[this] = value; }
        }

        [DisplayName("Organized By Blood Group"), Expression("jOrganizedBy.[BloodGroup]")]
        public Int32? OrganizedByBloodGroup
        {
            get { return Fields.OrganizedByBloodGroup[this]; }
            set { Fields.OrganizedByBloodGroup[this] = value; }
        }

        [DisplayName("Organized By Picture"), Expression("jOrganizedBy.[Picture]")]
        public String OrganizedByPicture
        {
            get { return Fields.OrganizedByPicture[this]; }
            set { Fields.OrganizedByPicture[this] = value; }
        }

        [DisplayName("Organized By Country Id"), Expression("jOrganizedBy.[CountryId]")]
        public Int64? OrganizedByCountryId
        {
            get { return Fields.OrganizedByCountryId[this]; }
            set { Fields.OrganizedByCountryId[this] = value; }
        }

        [DisplayName("Organized By State Id"), Expression("jOrganizedBy.[StateId]")]
        public Int64? OrganizedByStateId
        {
            get { return Fields.OrganizedByStateId[this]; }
            set { Fields.OrganizedByStateId[this] = value; }
        }

        [DisplayName("Organized By City Id"), Expression("jOrganizedBy.[CityId]")]
        public Int64? OrganizedByCityId
        {
            get { return Fields.OrganizedByCityId[this]; }
            set { Fields.OrganizedByCityId[this] = value; }
        }

        [DisplayName("Organized By Zip Code"), Expression("jOrganizedBy.[ZipCode]")]
        public String OrganizedByZipCode
        {
            get { return Fields.OrganizedByZipCode[this]; }
            set { Fields.OrganizedByZipCode[this] = value; }
        }

        [DisplayName("Organized By Address"), Expression("jOrganizedBy.[Address]")]
        public String OrganizedByAddress
        {
            get { return Fields.OrganizedByAddress[this]; }
            set { Fields.OrganizedByAddress[this] = value; }
        }

        [DisplayName("Organized By User Id"), Expression("jOrganizedBy.[UserId]")]
        public Int32? OrganizedByUserId
        {
            get { return Fields.OrganizedByUserId[this]; }
            set { Fields.OrganizedByUserId[this] = value; }
        }

        [DisplayName("Organized By Region Id"), Expression("jOrganizedBy.[RegionId]")]
        public Int64? OrganizedByRegionId
        {
            get { return Fields.OrganizedByRegionId[this]; }
            set { Fields.OrganizedByRegionId[this] = value; }
        }

        [DisplayName("Organized By Territory Id"), Expression("jOrganizedBy.[TerritoryId]")]
        public Int64? OrganizedByTerritoryId
        {
            get { return Fields.OrganizedByTerritoryId[this]; }
            set { Fields.OrganizedByTerritoryId[this] = value; }
        }

        [DisplayName("Organized By Cnic"), Expression("jOrganizedBy.[CNIC]")]
        public String OrganizedByCnic
        {
            get { return Fields.OrganizedByCnic[this]; }
            set { Fields.OrganizedByCnic[this] = value; }
        }

        [DisplayName("Organized By Insert Date"), Expression("jOrganizedBy.[InsertDate]")]
        public DateTime? OrganizedByInsertDate
        {
            get { return Fields.OrganizedByInsertDate[this]; }
            set { Fields.OrganizedByInsertDate[this] = value; }
        }

        [DisplayName("Organized By Insert User Id"), Expression("jOrganizedBy.[InsertUserId]")]
        public Int32? OrganizedByInsertUserId
        {
            get { return Fields.OrganizedByInsertUserId[this]; }
            set { Fields.OrganizedByInsertUserId[this] = value; }
        }

        [DisplayName("Organized By Update Date"), Expression("jOrganizedBy.[UpdateDate]")]
        public DateTime? OrganizedByUpdateDate
        {
            get { return Fields.OrganizedByUpdateDate[this]; }
            set { Fields.OrganizedByUpdateDate[this] = value; }
        }

        [DisplayName("Organized By Update User Id"), Expression("jOrganizedBy.[UpdateUserId]")]
        public Int32? OrganizedByUpdateUserId
        {
            get { return Fields.OrganizedByUpdateUserId[this]; }
            set { Fields.OrganizedByUpdateUserId[this] = value; }
        }

        [DisplayName("Organized By Delete Date"), Expression("jOrganizedBy.[DeleteDate]")]
        public DateTime? OrganizedByDeleteDate
        {
            get { return Fields.OrganizedByDeleteDate[this]; }
            set { Fields.OrganizedByDeleteDate[this] = value; }
        }

        [DisplayName("Organized By Delete User Id"), Expression("jOrganizedBy.[DeleteUserId]")]
        public Int32? OrganizedByDeleteUserId
        {
            get { return Fields.OrganizedByDeleteUserId[this]; }
            set { Fields.OrganizedByDeleteUserId[this] = value; }
        }

        [DisplayName("Organized By Is Active"), Expression("jOrganizedBy.[IsActive]")]
        public Int32? OrganizedByIsActive
        {
            get { return Fields.OrganizedByIsActive[this]; }
            set { Fields.OrganizedByIsActive[this] = value; }
        }

        [DisplayName("Reporter First Name"), Expression("jReporter.[FirstName]")]
        public String ReporterFirstName
        {
            get { return Fields.ReporterFirstName[this]; }
            set { Fields.ReporterFirstName[this] = value; }
        }

        [DisplayName("Reporter Last Name"), Expression("jReporter.[LastName]")]
        public String ReporterLastName
        {
            get { return Fields.ReporterLastName[this]; }
            set { Fields.ReporterLastName[this] = value; }
        }

        [DisplayName("Reporter Designation Id"), Expression("jReporter.[DesignationId]")]
        public Int64? ReporterDesignationId
        {
            get { return Fields.ReporterDesignationId[this]; }
            set { Fields.ReporterDesignationId[this] = value; }
        }

        [DisplayName("Reporter Department Id"), Expression("jReporter.[DepartmentId]")]
        public Int64? ReporterDepartmentId
        {
            get { return Fields.ReporterDepartmentId[this]; }
            set { Fields.ReporterDepartmentId[this] = value; }
        }

        [DisplayName("Reporter Rate Type"), Expression("jReporter.[RateType]")]
        public Int32? ReporterRateType
        {
            get { return Fields.ReporterRateType[this]; }
            set { Fields.ReporterRateType[this] = value; }
        }

        [DisplayName("Reporter Phone"), Expression("jReporter.[Phone]")]
        public String ReporterPhone
        {
            get { return Fields.ReporterPhone[this]; }
            set { Fields.ReporterPhone[this] = value; }
        }

        [DisplayName("Reporter Houre Rate Salary"), Expression("jReporter.[HoureRateSalary]")]
        public Double? ReporterHoureRateSalary
        {
            get { return Fields.ReporterHoureRateSalary[this]; }
            set { Fields.ReporterHoureRateSalary[this] = value; }
        }

        [DisplayName("Reporter Email"), Expression("jReporter.[Email]")]
        public String ReporterEmail
        {
            get { return Fields.ReporterEmail[this]; }
            set { Fields.ReporterEmail[this] = value; }
        }

        [DisplayName("Reporter Blood Group"), Expression("jReporter.[BloodGroup]")]
        public Int32? ReporterBloodGroup
        {
            get { return Fields.ReporterBloodGroup[this]; }
            set { Fields.ReporterBloodGroup[this] = value; }
        }

        [DisplayName("Reporter Picture"), Expression("jReporter.[Picture]")]
        public String ReporterPicture
        {
            get { return Fields.ReporterPicture[this]; }
            set { Fields.ReporterPicture[this] = value; }
        }

        [DisplayName("Reporter Country Id"), Expression("jReporter.[CountryId]")]
        public Int64? ReporterCountryId
        {
            get { return Fields.ReporterCountryId[this]; }
            set { Fields.ReporterCountryId[this] = value; }
        }

        [DisplayName("Reporter State Id"), Expression("jReporter.[StateId]")]
        public Int64? ReporterStateId
        {
            get { return Fields.ReporterStateId[this]; }
            set { Fields.ReporterStateId[this] = value; }
        }

        [DisplayName("Reporter City Id"), Expression("jReporter.[CityId]")]
        public Int64? ReporterCityId
        {
            get { return Fields.ReporterCityId[this]; }
            set { Fields.ReporterCityId[this] = value; }
        }

        [DisplayName("Reporter Zip Code"), Expression("jReporter.[ZipCode]")]
        public String ReporterZipCode
        {
            get { return Fields.ReporterZipCode[this]; }
            set { Fields.ReporterZipCode[this] = value; }
        }

        [DisplayName("Reporter Address"), Expression("jReporter.[Address]")]
        public String ReporterAddress
        {
            get { return Fields.ReporterAddress[this]; }
            set { Fields.ReporterAddress[this] = value; }
        }

        [DisplayName("Reporter User Id"), Expression("jReporter.[UserId]")]
        public Int32? ReporterUserId
        {
            get { return Fields.ReporterUserId[this]; }
            set { Fields.ReporterUserId[this] = value; }
        }

        [DisplayName("Reporter Region Id"), Expression("jReporter.[RegionId]")]
        public Int64? ReporterRegionId
        {
            get { return Fields.ReporterRegionId[this]; }
            set { Fields.ReporterRegionId[this] = value; }
        }

        [DisplayName("Reporter Territory Id"), Expression("jReporter.[TerritoryId]")]
        public Int64? ReporterTerritoryId
        {
            get { return Fields.ReporterTerritoryId[this]; }
            set { Fields.ReporterTerritoryId[this] = value; }
        }

        [DisplayName("Reporter Cnic"), Expression("jReporter.[CNIC]")]
        public String ReporterCnic
        {
            get { return Fields.ReporterCnic[this]; }
            set { Fields.ReporterCnic[this] = value; }
        }

        [DisplayName("Reporter Insert Date"), Expression("jReporter.[InsertDate]")]
        public DateTime? ReporterInsertDate
        {
            get { return Fields.ReporterInsertDate[this]; }
            set { Fields.ReporterInsertDate[this] = value; }
        }

        [DisplayName("Reporter Insert User Id"), Expression("jReporter.[InsertUserId]")]
        public Int32? ReporterInsertUserId
        {
            get { return Fields.ReporterInsertUserId[this]; }
            set { Fields.ReporterInsertUserId[this] = value; }
        }

        [DisplayName("Reporter Update Date"), Expression("jReporter.[UpdateDate]")]
        public DateTime? ReporterUpdateDate
        {
            get { return Fields.ReporterUpdateDate[this]; }
            set { Fields.ReporterUpdateDate[this] = value; }
        }

        [DisplayName("Reporter Update User Id"), Expression("jReporter.[UpdateUserId]")]
        public Int32? ReporterUpdateUserId
        {
            get { return Fields.ReporterUpdateUserId[this]; }
            set { Fields.ReporterUpdateUserId[this] = value; }
        }

        [DisplayName("Reporter Delete Date"), Expression("jReporter.[DeleteDate]")]
        public DateTime? ReporterDeleteDate
        {
            get { return Fields.ReporterDeleteDate[this]; }
            set { Fields.ReporterDeleteDate[this] = value; }
        }

        [DisplayName("Reporter Delete User Id"), Expression("jReporter.[DeleteUserId]")]
        public Int32? ReporterDeleteUserId
        {
            get { return Fields.ReporterDeleteUserId[this]; }
            set { Fields.ReporterDeleteUserId[this] = value; }
        }

        [DisplayName("Reporter Is Active"), Expression("jReporter.[IsActive]")]
        public Int32? ReporterIsActive
        {
            get { return Fields.ReporterIsActive[this]; }
            set { Fields.ReporterIsActive[this] = value; }
        }

        public MeetingsRow()
        {
        }

        public MeetingsRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField MeetingName;
            public Int64Field MeetingType;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int64Field Department;
            public Int64Field Location;
            public Int64Field OrganizedBy;
            public Int64Field Reporter;

            public StringField MeetingTypeName;

            public StringField Department1;
            public StringField DepartmentDescription;
            public Int64Field DepartmentParentDepartmentId;
            public DateTimeField DepartmentInsertDate;
            public Int32Field DepartmentInsertUserId;
            public DateTimeField DepartmentUpdateDate;
            public Int32Field DepartmentUpdateUserId;
            public DateTimeField DepartmentDeleteDate;
            public Int32Field DepartmentDeleteUserId;
            public Int32Field DepartmentIsActive;

            public StringField LocationName;
            public Int64Field LocationCountryId;
            public Int64Field LocationStateId;
            public Int64Field LocationCityId;
            public StringField LocationAddress;
            public StringField LocationLatitude;
            public StringField LocationLongitude;

            public StringField OrganizedByFirstName;
            public StringField OrganizedByLastName;
            public StringField OrganizedByFullName;
            public Int64Field OrganizedByDesignationId;
            public Int64Field OrganizedByDepartmentId;
            public Int32Field OrganizedByRateType;
            public StringField OrganizedByPhone;
            public DoubleField OrganizedByHoureRateSalary;
            public StringField OrganizedByEmail;
            public Int32Field OrganizedByBloodGroup;
            public StringField OrganizedByPicture;
            public Int64Field OrganizedByCountryId;
            public Int64Field OrganizedByStateId;
            public Int64Field OrganizedByCityId;
            public StringField OrganizedByZipCode;
            public StringField OrganizedByAddress;
            public Int32Field OrganizedByUserId;
            public Int64Field OrganizedByRegionId;
            public Int64Field OrganizedByTerritoryId;
            public StringField OrganizedByCnic;
            public DateTimeField OrganizedByInsertDate;
            public Int32Field OrganizedByInsertUserId;
            public DateTimeField OrganizedByUpdateDate;
            public Int32Field OrganizedByUpdateUserId;
            public DateTimeField OrganizedByDeleteDate;
            public Int32Field OrganizedByDeleteUserId;
            public Int32Field OrganizedByIsActive;

            public StringField ReporterFirstName;
            public StringField ReporterLastName;
            public StringField ReporterFullName;
            public Int64Field ReporterDesignationId;
            public Int64Field ReporterDepartmentId;
            public Int32Field ReporterRateType;
            public StringField ReporterPhone;
            public DoubleField ReporterHoureRateSalary;
            public StringField ReporterEmail;
            public Int32Field ReporterBloodGroup;
            public StringField ReporterPicture;
            public Int64Field ReporterCountryId;
            public Int64Field ReporterStateId;
            public Int64Field ReporterCityId;
            public StringField ReporterZipCode;
            public StringField ReporterAddress;
            public Int32Field ReporterUserId;
            public Int64Field ReporterRegionId;
            public Int64Field ReporterTerritoryId;
            public StringField ReporterCnic;
            public DateTimeField ReporterInsertDate;
            public Int32Field ReporterInsertUserId;
            public DateTimeField ReporterUpdateDate;
            public Int32Field ReporterUpdateUserId;
            public DateTimeField ReporterDeleteDate;
            public Int32Field ReporterDeleteUserId;
            public Int32Field ReporterIsActive;


            public readonly RowListField<MeetingAttendeesRow> Attendees;
            public readonly RowListField<AgendaItemsRow> AgendaItems;
            public readonly RowListField<AgendaDecisionsRow> AgendaDecisions;
           
        }
    }
}
