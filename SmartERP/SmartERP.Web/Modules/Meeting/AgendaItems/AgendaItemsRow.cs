
namespace SmartERP.Meeting.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.HumanResource.Entities;
    using SmartERP.Masters.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meeting"), TableName("[dbo].[AgendaItems]")]
    [DisplayName("Agenda Items"), InstanceName("Agenda Items")]
    [ReadPermission(PermissionKeys.Meetings.View)]
    [InsertPermission(PermissionKeys.Meetings.Create)]
    [UpdatePermission(PermissionKeys.Meetings.Update)]
    [DeletePermission(PermissionKeys.Meetings.Delete)]

    [LookupScript("Meetings.AgendaItems", Permission = PermissionKeys.Meetings.View,Expiration =-1)]
   
    public sealed class AgendaItemsRow : SmartERP.LoggingRow<AgendaItemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(250), NotNull, QuickSearch, LookupInclude,NameProperty]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Item Type"), NotNull,PrimaryKey, ForeignKey("[dbo].[AgendaItemTypes]", "Id"), LeftJoin("jItemType"), TextualField("ItemTypeName")]
        [LookupEditor(typeof(AgendaItemTypesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? ItemType
        {
            get { return Fields.ItemType[this]; }
            set { Fields.ItemType[this] = value; }
        }

        [DisplayName("Requested By"),PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jRequestedBy"), TextualField("RequestedByFullName")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? RequestedBy
        {
            get { return Fields.RequestedBy[this]; }
            set { Fields.RequestedBy[this] = value; }
        }
        [DisplayName("Requested By"), Expression("jRequestedBy.[FirstName] +' '+ jRequestedBy.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String RequestedByFullName
        {
            get { return Fields.RequestedByFullName[this]; }
            set { Fields.RequestedByFullName[this] = value; }
        }
        [DisplayName("Sequence No"), NotNull]
        public Int32? SequenceNo
        {
            get { return Fields.SequenceNo[this]; }
            set { Fields.SequenceNo[this] = value; }
        }

        [DisplayName("Images"), Size(4000)]
        public String Images
        {
            get { return Fields.Images[this]; }
            set { Fields.Images[this] = value; }
        }

        [DisplayName("Attachments"), Size(4000)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Meeting"), NotNull,PrimaryKey, ForeignKey("[dbo].[Meetings]", "Id"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName"), LookupInclude, Updatable(false)]
        public Int64? Meeting
        {
            get { return Fields.Meeting[this]; }
            set { Fields.Meeting[this] = value; }
        }

        [DisplayName("Item Type Name"), Expression("jItemType.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String ItemTypeName
        {
            get { return Fields.ItemTypeName[this]; }
            set { Fields.ItemTypeName[this] = value; }
        }

        [DisplayName("Requested By First Name"), Expression("jRequestedBy.[FirstName]")]
        public String RequestedByFirstName
        {
            get { return Fields.RequestedByFirstName[this]; }
            set { Fields.RequestedByFirstName[this] = value; }
        }

        [DisplayName("Requested By Last Name"), Expression("jRequestedBy.[LastName]")]
        public String RequestedByLastName
        {
            get { return Fields.RequestedByLastName[this]; }
            set { Fields.RequestedByLastName[this] = value; }
        }

        [DisplayName("Requested By Designation Id"), Expression("jRequestedBy.[DesignationId]")]
        public Int64? RequestedByDesignationId
        {
            get { return Fields.RequestedByDesignationId[this]; }
            set { Fields.RequestedByDesignationId[this] = value; }
        }

        [DisplayName("Requested By Department Id"), Expression("jRequestedBy.[DepartmentId]")]
        public Int64? RequestedByDepartmentId
        {
            get { return Fields.RequestedByDepartmentId[this]; }
            set { Fields.RequestedByDepartmentId[this] = value; }
        }

        [DisplayName("Requested By Rate Type"), Expression("jRequestedBy.[RateType]")]
        public Int32? RequestedByRateType
        {
            get { return Fields.RequestedByRateType[this]; }
            set { Fields.RequestedByRateType[this] = value; }
        }

        [DisplayName("Requested By Phone"), Expression("jRequestedBy.[Phone]")]
        public String RequestedByPhone
        {
            get { return Fields.RequestedByPhone[this]; }
            set { Fields.RequestedByPhone[this] = value; }
        }

        [DisplayName("Requested By Houre Rate Salary"), Expression("jRequestedBy.[HoureRateSalary]")]
        public Double? RequestedByHoureRateSalary
        {
            get { return Fields.RequestedByHoureRateSalary[this]; }
            set { Fields.RequestedByHoureRateSalary[this] = value; }
        }

        [DisplayName("Requested By Email"), Expression("jRequestedBy.[Email]")]
        public String RequestedByEmail
        {
            get { return Fields.RequestedByEmail[this]; }
            set { Fields.RequestedByEmail[this] = value; }
        }

        [DisplayName("Requested By Blood Group"), Expression("jRequestedBy.[BloodGroup]")]
        public Int32? RequestedByBloodGroup
        {
            get { return Fields.RequestedByBloodGroup[this]; }
            set { Fields.RequestedByBloodGroup[this] = value; }
        }

        [DisplayName("Requested By Picture"), Expression("jRequestedBy.[Picture]")]
        public String RequestedByPicture
        {
            get { return Fields.RequestedByPicture[this]; }
            set { Fields.RequestedByPicture[this] = value; }
        }

        [DisplayName("Requested By Country Id"), Expression("jRequestedBy.[CountryId]")]
        public Int64? RequestedByCountryId
        {
            get { return Fields.RequestedByCountryId[this]; }
            set { Fields.RequestedByCountryId[this] = value; }
        }

        [DisplayName("Requested By State Id"), Expression("jRequestedBy.[StateId]")]
        public Int64? RequestedByStateId
        {
            get { return Fields.RequestedByStateId[this]; }
            set { Fields.RequestedByStateId[this] = value; }
        }

        [DisplayName("Requested By City Id"), Expression("jRequestedBy.[CityId]")]
        public Int64? RequestedByCityId
        {
            get { return Fields.RequestedByCityId[this]; }
            set { Fields.RequestedByCityId[this] = value; }
        }

        [DisplayName("Requested By Zip Code"), Expression("jRequestedBy.[ZipCode]")]
        public String RequestedByZipCode
        {
            get { return Fields.RequestedByZipCode[this]; }
            set { Fields.RequestedByZipCode[this] = value; }
        }

        [DisplayName("Requested By Address"), Expression("jRequestedBy.[Address]")]
        public String RequestedByAddress
        {
            get { return Fields.RequestedByAddress[this]; }
            set { Fields.RequestedByAddress[this] = value; }
        }

        [DisplayName("Requested By User Id"), Expression("jRequestedBy.[UserId]")]
        public Int32? RequestedByUserId
        {
            get { return Fields.RequestedByUserId[this]; }
            set { Fields.RequestedByUserId[this] = value; }
        }

        [DisplayName("Requested By Region Id"), Expression("jRequestedBy.[RegionId]")]
        public Int64? RequestedByRegionId
        {
            get { return Fields.RequestedByRegionId[this]; }
            set { Fields.RequestedByRegionId[this] = value; }
        }

        [DisplayName("Requested By Territory Id"), Expression("jRequestedBy.[TerritoryId]")]
        public Int64? RequestedByTerritoryId
        {
            get { return Fields.RequestedByTerritoryId[this]; }
            set { Fields.RequestedByTerritoryId[this] = value; }
        }

        [DisplayName("Requested By Cnic"), Expression("jRequestedBy.[CNIC]")]
        public String RequestedByCnic
        {
            get { return Fields.RequestedByCnic[this]; }
            set { Fields.RequestedByCnic[this] = value; }
        }

        [DisplayName("Requested By Insert Date"), Expression("jRequestedBy.[InsertDate]")]
        public DateTime? RequestedByInsertDate
        {
            get { return Fields.RequestedByInsertDate[this]; }
            set { Fields.RequestedByInsertDate[this] = value; }
        }

        [DisplayName("Requested By Insert User Id"), Expression("jRequestedBy.[InsertUserId]")]
        public Int32? RequestedByInsertUserId
        {
            get { return Fields.RequestedByInsertUserId[this]; }
            set { Fields.RequestedByInsertUserId[this] = value; }
        }

        [DisplayName("Requested By Update Date"), Expression("jRequestedBy.[UpdateDate]")]
        public DateTime? RequestedByUpdateDate
        {
            get { return Fields.RequestedByUpdateDate[this]; }
            set { Fields.RequestedByUpdateDate[this] = value; }
        }

        [DisplayName("Requested By Update User Id"), Expression("jRequestedBy.[UpdateUserId]")]
        public Int32? RequestedByUpdateUserId
        {
            get { return Fields.RequestedByUpdateUserId[this]; }
            set { Fields.RequestedByUpdateUserId[this] = value; }
        }

        [DisplayName("Requested By Delete Date"), Expression("jRequestedBy.[DeleteDate]")]
        public DateTime? RequestedByDeleteDate
        {
            get { return Fields.RequestedByDeleteDate[this]; }
            set { Fields.RequestedByDeleteDate[this] = value; }
        }

        [DisplayName("Requested By Delete User Id"), Expression("jRequestedBy.[DeleteUserId]")]
        public Int32? RequestedByDeleteUserId
        {
            get { return Fields.RequestedByDeleteUserId[this]; }
            set { Fields.RequestedByDeleteUserId[this] = value; }
        }

        [DisplayName("Requested By Is Active"), Expression("jRequestedBy.[IsActive]")]
        public Int32? RequestedByIsActive
        {
            get { return Fields.RequestedByIsActive[this]; }
            set { Fields.RequestedByIsActive[this] = value; }
        }

        [DisplayName("Meeting Meeting Name"), Expression("jMeeting.[MeetingName]")]
        public String MeetingMeetingName
        {
            get { return Fields.MeetingMeetingName[this]; }
            set { Fields.MeetingMeetingName[this] = value; }
        }

        [DisplayName("Meeting Meeting Type"), Expression("jMeeting.[MeetingType]")]
        public Int64? MeetingMeetingType
        {
            get { return Fields.MeetingMeetingType[this]; }
            set { Fields.MeetingMeetingType[this] = value; }
        }

        [DisplayName("Meeting Start Date"), Expression("jMeeting.[StartDate]")]
        public DateTime? MeetingStartDate
        {
            get { return Fields.MeetingStartDate[this]; }
            set { Fields.MeetingStartDate[this] = value; }
        }

        [DisplayName("Meeting End Date"), Expression("jMeeting.[EndDate]")]
        public DateTime? MeetingEndDate
        {
            get { return Fields.MeetingEndDate[this]; }
            set { Fields.MeetingEndDate[this] = value; }
        }

        [DisplayName("Meeting Department"), Expression("jMeeting.[Department]")]
        public Int64? MeetingDepartment
        {
            get { return Fields.MeetingDepartment[this]; }
            set { Fields.MeetingDepartment[this] = value; }
        }

        [DisplayName("Meeting Location"), Expression("jMeeting.[Location]")]
        public Int64? MeetingLocation
        {
            get { return Fields.MeetingLocation[this]; }
            set { Fields.MeetingLocation[this] = value; }
        }

        [DisplayName("Meeting Organized By"), Expression("jMeeting.[OrganizedBy]")]
        public Int64? MeetingOrganizedBy
        {
            get { return Fields.MeetingOrganizedBy[this]; }
            set { Fields.MeetingOrganizedBy[this] = value; }
        }

        [DisplayName("Meeting Reporter"), Expression("jMeeting.[Reporter]")]
        public Int64? MeetingReporter
        {
            get { return Fields.MeetingReporter[this]; }
            set { Fields.MeetingReporter[this] = value; }
        }

        public AgendaItemsRow()
        {
        }

        public AgendaItemsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Title;
            public StringField Description;
            public Int64Field ItemType;
            public Int64Field RequestedBy;
            public Int32Field SequenceNo;
            public StringField Images;
            public StringField Attachments;
            public Int64Field Meeting;

            public StringField ItemTypeName;

            public StringField RequestedByFirstName;
            public StringField RequestedByLastName;
            public StringField RequestedByFullName;
            public Int64Field RequestedByDesignationId;
            public Int64Field RequestedByDepartmentId;
            public Int32Field RequestedByRateType;
            public StringField RequestedByPhone;
            public DoubleField RequestedByHoureRateSalary;
            public StringField RequestedByEmail;
            public Int32Field RequestedByBloodGroup;
            public StringField RequestedByPicture;
            public Int64Field RequestedByCountryId;
            public Int64Field RequestedByStateId;
            public Int64Field RequestedByCityId;
            public StringField RequestedByZipCode;
            public StringField RequestedByAddress;
            public Int32Field RequestedByUserId;
            public Int64Field RequestedByRegionId;
            public Int64Field RequestedByTerritoryId;
            public StringField RequestedByCnic;
            public DateTimeField RequestedByInsertDate;
            public Int32Field RequestedByInsertUserId;
            public DateTimeField RequestedByUpdateDate;
            public Int32Field RequestedByUpdateUserId;
            public DateTimeField RequestedByDeleteDate;
            public Int32Field RequestedByDeleteUserId;
            public Int32Field RequestedByIsActive;

            public StringField MeetingMeetingName;
            public Int64Field MeetingMeetingType;
            public DateTimeField MeetingStartDate;
            public DateTimeField MeetingEndDate;
            public Int64Field MeetingDepartment;
            public Int64Field MeetingLocation;
            public Int64Field MeetingOrganizedBy;
            public Int64Field MeetingReporter;
        }
    }
}
