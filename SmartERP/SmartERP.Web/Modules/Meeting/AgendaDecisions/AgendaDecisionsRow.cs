
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

    [ConnectionKey("Default"), Module("Meeting"), TableName("[dbo].[AgendaDecisions]")]
    [DisplayName("Agenda Decisions"), InstanceName("Agenda Decisions")]
    [ReadPermission(PermissionKeys.Meetings.View)]
    [InsertPermission(PermissionKeys.Meetings.Create)]
    [UpdatePermission(PermissionKeys.Meetings.Update)]
    [DeletePermission(PermissionKeys.Meetings.Delete)]

    [LookupScript("Meetings.AgendaDecisions", Permission = PermissionKeys.Meetings.View, Expiration =-1)]
    
    public sealed class AgendaDecisionsRow : SmartERP.LoggingRow<AgendaDecisionsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Description"), Size(4000), NotNull, QuickSearch,NameProperty]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Assigned To"),PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jAssignedTo"), TextualField("AssignedToFullName")]
        [LookupEditor(typeof(EmployeesRow), FilterField = "IsActive", FilterValue = "1")]
        public Int64? AssignedTo
        {
            get { return Fields.AssignedTo[this]; }
            set { Fields.AssignedTo[this] = value; }
        }
        [DisplayName("Assigned To"), Expression("jAssignedTo.[FirstName] +' '+ jAssignedTo.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String AssignedToFullName
        {
            get { return Fields.AssignedToFullName[this]; }
            set { Fields.AssignedToFullName[this] = value; }
        }
        [DisplayName("Decision Number")]
        public Int32? DecisionNumber
        {
            get { return Fields.DecisionNumber[this]; }
            set { Fields.DecisionNumber[this] = value; }
        }
        [DisplayName("Meeting"), NotNull, PrimaryKey, ForeignKey("[dbo].[Meetings]", "Id"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName"), LookupInclude,Updatable(false)]
        public Int64? Meeting
        {
            get { return Fields.Meeting[this]; }
            set { Fields.Meeting[this] = value; }
        }

        [DisplayName("Related Agenda Item"), PrimaryKey, ForeignKey("[dbo].[AgendaItems]", "Id"), LeftJoin("jRelatedAgendaItem"), TextualField("RelatedAgendaItemTitle")]
        [LookupEditor(typeof(AgendaItemsRow), CascadeField = "Meeting", CascadeFrom = "Meeting", FilterField = "IsActive", FilterValue = "1"),LookupInclude]
        public Int64? RelatedAgendaItem
        {
            get { return Fields.RelatedAgendaItem[this]; }
            set { Fields.RelatedAgendaItem[this] = value; }
        }

        [DisplayName("Resolution Status"), NotNull, LookupInclude]
        [PrimaryKey, ForeignKey("[dbo].[ResolutionStatuses]", "Id"), LeftJoin("jResolutionStatuses"), TextualField("ResolutionStatusName")]
        [LookupEditor(typeof(ResolutionStatusesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", LookupKey = "Masters.ResolutionStatuses")]
        public Int64? ResolutionStatus
        {
            get { return Fields.ResolutionStatus[this]; }
            set { Fields.ResolutionStatus[this] = value; }
        }
        [DisplayName("Resolution Status"), Expression("jResolutionStatuses.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String ResolutionStatusName
        {
            get { return Fields.ResolutionStatusName[this]; }
            set { Fields.ResolutionStatusName[this] = value; }
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

       

        [DisplayName("Assigned To First Name"), Expression("jAssignedTo.[FirstName]")]
        public String AssignedToFirstName
        {
            get { return Fields.AssignedToFirstName[this]; }
            set { Fields.AssignedToFirstName[this] = value; }
        }

        [DisplayName("Assigned To Last Name"), Expression("jAssignedTo.[LastName]")]
        public String AssignedToLastName
        {
            get { return Fields.AssignedToLastName[this]; }
            set { Fields.AssignedToLastName[this] = value; }
        }

        [DisplayName("Assigned To Designation Id"), Expression("jAssignedTo.[DesignationId]")]
        public Int64? AssignedToDesignationId
        {
            get { return Fields.AssignedToDesignationId[this]; }
            set { Fields.AssignedToDesignationId[this] = value; }
        }

        [DisplayName("Assigned To Department Id"), Expression("jAssignedTo.[DepartmentId]")]
        public Int64? AssignedToDepartmentId
        {
            get { return Fields.AssignedToDepartmentId[this]; }
            set { Fields.AssignedToDepartmentId[this] = value; }
        }

        [DisplayName("Assigned To Rate Type"), Expression("jAssignedTo.[RateType]")]
        public Int32? AssignedToRateType
        {
            get { return Fields.AssignedToRateType[this]; }
            set { Fields.AssignedToRateType[this] = value; }
        }

        [DisplayName("Assigned To Phone"), Expression("jAssignedTo.[Phone]")]
        public String AssignedToPhone
        {
            get { return Fields.AssignedToPhone[this]; }
            set { Fields.AssignedToPhone[this] = value; }
        }

        [DisplayName("Assigned To Houre Rate Salary"), Expression("jAssignedTo.[HoureRateSalary]")]
        public Double? AssignedToHoureRateSalary
        {
            get { return Fields.AssignedToHoureRateSalary[this]; }
            set { Fields.AssignedToHoureRateSalary[this] = value; }
        }

        [DisplayName("Assigned To Email"), Expression("jAssignedTo.[Email]")]
        public String AssignedToEmail
        {
            get { return Fields.AssignedToEmail[this]; }
            set { Fields.AssignedToEmail[this] = value; }
        }

        [DisplayName("Assigned To Blood Group"), Expression("jAssignedTo.[BloodGroup]")]
        public Int32? AssignedToBloodGroup
        {
            get { return Fields.AssignedToBloodGroup[this]; }
            set { Fields.AssignedToBloodGroup[this] = value; }
        }

        [DisplayName("Assigned To Picture"), Expression("jAssignedTo.[Picture]")]
        public String AssignedToPicture
        {
            get { return Fields.AssignedToPicture[this]; }
            set { Fields.AssignedToPicture[this] = value; }
        }

        [DisplayName("Assigned To Country Id"), Expression("jAssignedTo.[CountryId]")]
        public Int64? AssignedToCountryId
        {
            get { return Fields.AssignedToCountryId[this]; }
            set { Fields.AssignedToCountryId[this] = value; }
        }

        [DisplayName("Assigned To State Id"), Expression("jAssignedTo.[StateId]")]
        public Int64? AssignedToStateId
        {
            get { return Fields.AssignedToStateId[this]; }
            set { Fields.AssignedToStateId[this] = value; }
        }

        [DisplayName("Assigned To City Id"), Expression("jAssignedTo.[CityId]")]
        public Int64? AssignedToCityId
        {
            get { return Fields.AssignedToCityId[this]; }
            set { Fields.AssignedToCityId[this] = value; }
        }

        [DisplayName("Assigned To Zip Code"), Expression("jAssignedTo.[ZipCode]")]
        public String AssignedToZipCode
        {
            get { return Fields.AssignedToZipCode[this]; }
            set { Fields.AssignedToZipCode[this] = value; }
        }

        [DisplayName("Assigned To Address"), Expression("jAssignedTo.[Address]")]
        public String AssignedToAddress
        {
            get { return Fields.AssignedToAddress[this]; }
            set { Fields.AssignedToAddress[this] = value; }
        }

        [DisplayName("Assigned To User Id"), Expression("jAssignedTo.[UserId]")]
        public Int32? AssignedToUserId
        {
            get { return Fields.AssignedToUserId[this]; }
            set { Fields.AssignedToUserId[this] = value; }
        }

        [DisplayName("Assigned To Region Id"), Expression("jAssignedTo.[RegionId]")]
        public Int64? AssignedToRegionId
        {
            get { return Fields.AssignedToRegionId[this]; }
            set { Fields.AssignedToRegionId[this] = value; }
        }

        [DisplayName("Assigned To Territory Id"), Expression("jAssignedTo.[TerritoryId]")]
        public Int64? AssignedToTerritoryId
        {
            get { return Fields.AssignedToTerritoryId[this]; }
            set { Fields.AssignedToTerritoryId[this] = value; }
        }

        [DisplayName("Assigned To Cnic"), Expression("jAssignedTo.[CNIC]")]
        public String AssignedToCnic
        {
            get { return Fields.AssignedToCnic[this]; }
            set { Fields.AssignedToCnic[this] = value; }
        }

        [DisplayName("Assigned To Insert Date"), Expression("jAssignedTo.[InsertDate]")]
        public DateTime? AssignedToInsertDate
        {
            get { return Fields.AssignedToInsertDate[this]; }
            set { Fields.AssignedToInsertDate[this] = value; }
        }

        [DisplayName("Assigned To Insert User Id"), Expression("jAssignedTo.[InsertUserId]")]
        public Int32? AssignedToInsertUserId
        {
            get { return Fields.AssignedToInsertUserId[this]; }
            set { Fields.AssignedToInsertUserId[this] = value; }
        }

        [DisplayName("Assigned To Update Date"), Expression("jAssignedTo.[UpdateDate]")]
        public DateTime? AssignedToUpdateDate
        {
            get { return Fields.AssignedToUpdateDate[this]; }
            set { Fields.AssignedToUpdateDate[this] = value; }
        }

        [DisplayName("Assigned To Update User Id"), Expression("jAssignedTo.[UpdateUserId]")]
        public Int32? AssignedToUpdateUserId
        {
            get { return Fields.AssignedToUpdateUserId[this]; }
            set { Fields.AssignedToUpdateUserId[this] = value; }
        }

        [DisplayName("Assigned To Delete Date"), Expression("jAssignedTo.[DeleteDate]")]
        public DateTime? AssignedToDeleteDate
        {
            get { return Fields.AssignedToDeleteDate[this]; }
            set { Fields.AssignedToDeleteDate[this] = value; }
        }

        [DisplayName("Assigned To Delete User Id"), Expression("jAssignedTo.[DeleteUserId]")]
        public Int32? AssignedToDeleteUserId
        {
            get { return Fields.AssignedToDeleteUserId[this]; }
            set { Fields.AssignedToDeleteUserId[this] = value; }
        }

        [DisplayName("Assigned To Is Active"), Expression("jAssignedTo.[IsActive]")]
        public Int32? AssignedToIsActive
        {
            get { return Fields.AssignedToIsActive[this]; }
            set { Fields.AssignedToIsActive[this] = value; }
        }

        [DisplayName("Related Agenda Item Title"), Expression("jRelatedAgendaItem.[Title]"), MinSelectLevel(SelectLevel.List)]
        public String RelatedAgendaItemTitle
        {
            get { return Fields.RelatedAgendaItemTitle[this]; }
            set { Fields.RelatedAgendaItemTitle[this] = value; }
        }

        [DisplayName("Related Agenda Item Description"), Expression("jRelatedAgendaItem.[Description]")]
        public String RelatedAgendaItemDescription
        {
            get { return Fields.RelatedAgendaItemDescription[this]; }
            set { Fields.RelatedAgendaItemDescription[this] = value; }
        }

        [DisplayName("Related Agenda Item Item Type"), Expression("jRelatedAgendaItem.[ItemType]")]
        public Int64? RelatedAgendaItemItemType
        {
            get { return Fields.RelatedAgendaItemItemType[this]; }
            set { Fields.RelatedAgendaItemItemType[this] = value; }
        }

        [DisplayName("Related Agenda Item Requested By"), Expression("jRelatedAgendaItem.[RequestedBy]")]
        public Int64? RelatedAgendaItemRequestedBy
        {
            get { return Fields.RelatedAgendaItemRequestedBy[this]; }
            set { Fields.RelatedAgendaItemRequestedBy[this] = value; }
        }

        [DisplayName("Related Agenda Item Sequence No"), Expression("jRelatedAgendaItem.[SequenceNo]")]
        public Int32? RelatedAgendaItemSequenceNo
        {
            get { return Fields.RelatedAgendaItemSequenceNo[this]; }
            set { Fields.RelatedAgendaItemSequenceNo[this] = value; }
        }

        [DisplayName("Related Agenda Item Images"), Expression("jRelatedAgendaItem.[Images]")]
        public String RelatedAgendaItemImages
        {
            get { return Fields.RelatedAgendaItemImages[this]; }
            set { Fields.RelatedAgendaItemImages[this] = value; }
        }

        [DisplayName("Related Agenda Item Attachments"), Expression("jRelatedAgendaItem.[Attachments]")]
        public String RelatedAgendaItemAttachments
        {
            get { return Fields.RelatedAgendaItemAttachments[this]; }
            set { Fields.RelatedAgendaItemAttachments[this] = value; }
        }

        [DisplayName("Related Agenda Item Meeting"), Expression("jRelatedAgendaItem.[Meeting]")]
        public Int64? RelatedAgendaItemMeeting
        {
            get { return Fields.RelatedAgendaItemMeeting[this]; }
            set { Fields.RelatedAgendaItemMeeting[this] = value; }
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

        public AgendaDecisionsRow()
        {
        }

        public AgendaDecisionsRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Description;
            public DateTimeField DueDate;
            public Int64Field AssignedTo;
            public Int32Field DecisionNumber;
            public Int64Field RelatedAgendaItem;
            public Int64Field ResolutionStatus;
            public StringField ResolutionStatusName;
            public StringField Images;
            public StringField Attachments;
            public Int64Field Meeting;

            public StringField AssignedToFirstName;
            public StringField AssignedToLastName;
            public StringField AssignedToFullName;
            public Int64Field AssignedToDesignationId;
            public Int64Field AssignedToDepartmentId;
            public Int32Field AssignedToRateType;
            public StringField AssignedToPhone;
            public DoubleField AssignedToHoureRateSalary;
            public StringField AssignedToEmail;
            public Int32Field AssignedToBloodGroup;
            public StringField AssignedToPicture;
            public Int64Field AssignedToCountryId;
            public Int64Field AssignedToStateId;
            public Int64Field AssignedToCityId;
            public StringField AssignedToZipCode;
            public StringField AssignedToAddress;
            public Int32Field AssignedToUserId;
            public Int64Field AssignedToRegionId;
            public Int64Field AssignedToTerritoryId;
            public StringField AssignedToCnic;
            public DateTimeField AssignedToInsertDate;
            public Int32Field AssignedToInsertUserId;
            public DateTimeField AssignedToUpdateDate;
            public Int32Field AssignedToUpdateUserId;
            public DateTimeField AssignedToDeleteDate;
            public Int32Field AssignedToDeleteUserId;
            public Int32Field AssignedToIsActive;

            public StringField RelatedAgendaItemTitle;
            public StringField RelatedAgendaItemDescription;
            public Int64Field RelatedAgendaItemItemType;
            public Int64Field RelatedAgendaItemRequestedBy;
            public Int32Field RelatedAgendaItemSequenceNo;
            public StringField RelatedAgendaItemImages;
            public StringField RelatedAgendaItemAttachments;
            public Int64Field RelatedAgendaItemMeeting;

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
