
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

    [ConnectionKey("Default"), Module("Meeting"), TableName("[dbo].[MeetingAttendees]")]
    [DisplayName("Meeting Attendees"), InstanceName("Meeting Attendees")]
    [ReadPermission(PermissionKeys.Meetings.View)]
    [InsertPermission(PermissionKeys.Meetings.Create)]
    [UpdatePermission(PermissionKeys.Meetings.Update)]
    [DeletePermission(PermissionKeys.Meetings.Delete)]

    [LookupScript("Meetings.MeetingAttendees", Permission = PermissionKeys.Meetings.View)]
    public sealed class MeetingAttendeesRow : SmartERP.LoggingRow<MeetingAttendeesRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

       
        [DisplayName("Attendee Type"), NotNull, LookupInclude]
        [PrimaryKey, ForeignKey("[dbo].[AttendeeTypes]", "Id"), LeftJoin("jAttendeeTypes"), TextualField("AttendeeTypeName")]
        [LookupEditor(typeof(AttendeeTypesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", LookupKey = "Masters.AttendeeTypes")]
        public Int64? AttendeeType
        {
            get { return Fields.AttendeeType[this]; }
            set { Fields.AttendeeType[this] = value; }
        }
        [DisplayName("Attendee Type"), Expression("jAttendeeTypes.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String AttendeeTypeName
        {
            get { return Fields.AttendeeTypeName[this]; }
            set { Fields.AttendeeTypeName[this] = value; }
        }



        [DisplayName("Attendance Status"), NotNull, LookupInclude]
        [PrimaryKey, ForeignKey("[dbo].[AttendanceStatuses]", "Id"), LeftJoin("jAttendanceStatuses"), TextualField("AttendanceStatusName")]
        [LookupEditor(typeof(AttendanceStatusesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", LookupKey = "Masters.AttendanceStatuses")]
        public Int64? AttendanceStatus
        {
            get { return Fields.AttendanceStatus[this]; }
            set { Fields.AttendanceStatus[this] = value; }
        }
        [DisplayName("Attendance Status"), Expression("jAttendanceStatuses.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String AttendanceStatusName
        {
            get { return Fields.AttendanceStatusName[this]; }
            set { Fields.AttendanceStatusName[this] = value; }
        }
        [DisplayName("Attendee"), NotNull, PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jAttendee"), TextualField("AttendeeFullName")]
        [LookupEditor(typeof(EmployeesRow), FilterField = "IsActive", FilterValue = "1")]

        public Int64? Attendee
        {
            get { return Fields.Attendee[this]; }
            set { Fields.Attendee[this] = value; }
        }

        [DisplayName("Attendee"), Expression("jAttendee.[FirstName] +' '+ jAttendee.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String AttendeeFullName
        {
            get { return Fields.AttendeeFullName[this]; }
            set { Fields.AttendeeFullName[this] = value; }
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("[dbo].[Meetings]", "Id"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName"), Updatable(false)]
        public Int64? Meeting
        {
            get { return Fields.Meeting[this]; }
            set { Fields.Meeting[this] = value; }
        }

        [DisplayName("Attendee First Name"), Expression("jAttendee.[FirstName]")]
        public String AttendeeFirstName
        {
            get { return Fields.AttendeeFirstName[this]; }
            set { Fields.AttendeeFirstName[this] = value; }
        }

        [DisplayName("Attendee Last Name"), Expression("jAttendee.[LastName]")]
        public String AttendeeLastName
        {
            get { return Fields.AttendeeLastName[this]; }
            set { Fields.AttendeeLastName[this] = value; }
        }

        [DisplayName("Attendee Designation Id"), Expression("jAttendee.[DesignationId]")]
        public Int64? AttendeeDesignationId
        {
            get { return Fields.AttendeeDesignationId[this]; }
            set { Fields.AttendeeDesignationId[this] = value; }
        }

        [DisplayName("Attendee Department Id"), Expression("jAttendee.[DepartmentId]")]
        public Int64? AttendeeDepartmentId
        {
            get { return Fields.AttendeeDepartmentId[this]; }
            set { Fields.AttendeeDepartmentId[this] = value; }
        }

        [DisplayName("Attendee Rate Type"), Expression("jAttendee.[RateType]")]
        public Int32? AttendeeRateType
        {
            get { return Fields.AttendeeRateType[this]; }
            set { Fields.AttendeeRateType[this] = value; }
        }

        [DisplayName("Attendee Phone"), Expression("jAttendee.[Phone]")]
        public String AttendeePhone
        {
            get { return Fields.AttendeePhone[this]; }
            set { Fields.AttendeePhone[this] = value; }
        }

        [DisplayName("Attendee Houre Rate Salary"), Expression("jAttendee.[HoureRateSalary]")]
        public Double? AttendeeHoureRateSalary
        {
            get { return Fields.AttendeeHoureRateSalary[this]; }
            set { Fields.AttendeeHoureRateSalary[this] = value; }
        }

        [DisplayName("Attendee Email"), Expression("jAttendee.[Email]")]
        public String AttendeeEmail
        {
            get { return Fields.AttendeeEmail[this]; }
            set { Fields.AttendeeEmail[this] = value; }
        }

        [DisplayName("Attendee Blood Group"), Expression("jAttendee.[BloodGroup]")]
        public Int32? AttendeeBloodGroup
        {
            get { return Fields.AttendeeBloodGroup[this]; }
            set { Fields.AttendeeBloodGroup[this] = value; }
        }

        [DisplayName("Attendee Picture"), Expression("jAttendee.[Picture]")]
        public String AttendeePicture
        {
            get { return Fields.AttendeePicture[this]; }
            set { Fields.AttendeePicture[this] = value; }
        }

        [DisplayName("Attendee Country Id"), Expression("jAttendee.[CountryId]")]
        public Int64? AttendeeCountryId
        {
            get { return Fields.AttendeeCountryId[this]; }
            set { Fields.AttendeeCountryId[this] = value; }
        }

        [DisplayName("Attendee State Id"), Expression("jAttendee.[StateId]")]
        public Int64? AttendeeStateId
        {
            get { return Fields.AttendeeStateId[this]; }
            set { Fields.AttendeeStateId[this] = value; }
        }

        [DisplayName("Attendee City Id"), Expression("jAttendee.[CityId]")]
        public Int64? AttendeeCityId
        {
            get { return Fields.AttendeeCityId[this]; }
            set { Fields.AttendeeCityId[this] = value; }
        }

        [DisplayName("Attendee Zip Code"), Expression("jAttendee.[ZipCode]")]
        public String AttendeeZipCode
        {
            get { return Fields.AttendeeZipCode[this]; }
            set { Fields.AttendeeZipCode[this] = value; }
        }

        [DisplayName("Attendee Address"), Expression("jAttendee.[Address]")]
        public String AttendeeAddress
        {
            get { return Fields.AttendeeAddress[this]; }
            set { Fields.AttendeeAddress[this] = value; }
        }

        [DisplayName("Attendee User Id"), Expression("jAttendee.[UserId]")]
        public Int32? AttendeeUserId
        {
            get { return Fields.AttendeeUserId[this]; }
            set { Fields.AttendeeUserId[this] = value; }
        }

        [DisplayName("Attendee Region Id"), Expression("jAttendee.[RegionId]")]
        public Int64? AttendeeRegionId
        {
            get { return Fields.AttendeeRegionId[this]; }
            set { Fields.AttendeeRegionId[this] = value; }
        }

        [DisplayName("Attendee Territory Id"), Expression("jAttendee.[TerritoryId]")]
        public Int64? AttendeeTerritoryId
        {
            get { return Fields.AttendeeTerritoryId[this]; }
            set { Fields.AttendeeTerritoryId[this] = value; }
        }

        [DisplayName("Attendee Cnic"), Expression("jAttendee.[CNIC]")]
        public String AttendeeCnic
        {
            get { return Fields.AttendeeCnic[this]; }
            set { Fields.AttendeeCnic[this] = value; }
        }

        [DisplayName("Attendee Insert Date"), Expression("jAttendee.[InsertDate]")]
        public DateTime? AttendeeInsertDate
        {
            get { return Fields.AttendeeInsertDate[this]; }
            set { Fields.AttendeeInsertDate[this] = value; }
        }

        [DisplayName("Attendee Insert User Id"), Expression("jAttendee.[InsertUserId]")]
        public Int32? AttendeeInsertUserId
        {
            get { return Fields.AttendeeInsertUserId[this]; }
            set { Fields.AttendeeInsertUserId[this] = value; }
        }

        [DisplayName("Attendee Update Date"), Expression("jAttendee.[UpdateDate]")]
        public DateTime? AttendeeUpdateDate
        {
            get { return Fields.AttendeeUpdateDate[this]; }
            set { Fields.AttendeeUpdateDate[this] = value; }
        }

        [DisplayName("Attendee Update User Id"), Expression("jAttendee.[UpdateUserId]")]
        public Int32? AttendeeUpdateUserId
        {
            get { return Fields.AttendeeUpdateUserId[this]; }
            set { Fields.AttendeeUpdateUserId[this] = value; }
        }

        [DisplayName("Attendee Delete Date"), Expression("jAttendee.[DeleteDate]")]
        public DateTime? AttendeeDeleteDate
        {
            get { return Fields.AttendeeDeleteDate[this]; }
            set { Fields.AttendeeDeleteDate[this] = value; }
        }

        [DisplayName("Attendee Delete User Id"), Expression("jAttendee.[DeleteUserId]")]
        public Int32? AttendeeDeleteUserId
        {
            get { return Fields.AttendeeDeleteUserId[this]; }
            set { Fields.AttendeeDeleteUserId[this] = value; }
        }

        [DisplayName("Attendee Is Active"), Expression("jAttendee.[IsActive]")]
        public Int32? AttendeeIsActive
        {
            get { return Fields.AttendeeIsActive[this]; }
            set { Fields.AttendeeIsActive[this] = value; }
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

        public MeetingAttendeesRow()
        {
        }

        public MeetingAttendeesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field AttendeeType;
            public StringField AttendeeTypeName;
            public Int64Field AttendanceStatus;
            public StringField AttendanceStatusName;
            public Int64Field Attendee;
            public Int64Field Meeting;

            public StringField AttendeeFirstName;
            public StringField AttendeeLastName;
            public StringField AttendeeFullName;
            public Int64Field AttendeeDesignationId;
            public Int64Field AttendeeDepartmentId;
            public Int32Field AttendeeRateType;
            public StringField AttendeePhone;
            public DoubleField AttendeeHoureRateSalary;
            public StringField AttendeeEmail;
            public Int32Field AttendeeBloodGroup;
            public StringField AttendeePicture;
            public Int64Field AttendeeCountryId;
            public Int64Field AttendeeStateId;
            public Int64Field AttendeeCityId;
            public StringField AttendeeZipCode;
            public StringField AttendeeAddress;
            public Int32Field AttendeeUserId;
            public Int64Field AttendeeRegionId;
            public Int64Field AttendeeTerritoryId;
            public StringField AttendeeCnic;
            public DateTimeField AttendeeInsertDate;
            public Int32Field AttendeeInsertUserId;
            public DateTimeField AttendeeUpdateDate;
            public Int32Field AttendeeUpdateUserId;
            public DateTimeField AttendeeDeleteDate;
            public Int32Field AttendeeDeleteUserId;
            public Int32Field AttendeeIsActive;

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
