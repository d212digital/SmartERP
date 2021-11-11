namespace SmartERP.Meeting {
    export interface AgendaDecisionsRow {
        Id?: number;
        Description?: string;
        DueDate?: string;
        AssignedTo?: number;
        DecisionNumber?: number;
        RelatedAgendaItem?: number;
        ResolutionStatus?: number;
        ResolutionStatusName?: string;
        Images?: string;
        Attachments?: string;
        Meeting?: number;
        AssignedToFirstName?: string;
        AssignedToLastName?: string;
        AssignedToFullName?: string;
        AssignedToDesignationId?: number;
        AssignedToDepartmentId?: number;
        AssignedToRateType?: number;
        AssignedToPhone?: string;
        AssignedToHoureRateSalary?: number;
        AssignedToEmail?: string;
        AssignedToBloodGroup?: number;
        AssignedToPicture?: string;
        AssignedToCountryId?: number;
        AssignedToStateId?: number;
        AssignedToCityId?: number;
        AssignedToZipCode?: string;
        AssignedToAddress?: string;
        AssignedToUserId?: number;
        AssignedToRegionId?: number;
        AssignedToTerritoryId?: number;
        AssignedToCnic?: string;
        AssignedToInsertDate?: string;
        AssignedToInsertUserId?: number;
        AssignedToUpdateDate?: string;
        AssignedToUpdateUserId?: number;
        AssignedToDeleteDate?: string;
        AssignedToDeleteUserId?: number;
        AssignedToIsActive?: number;
        RelatedAgendaItemTitle?: string;
        RelatedAgendaItemDescription?: string;
        RelatedAgendaItemItemType?: number;
        RelatedAgendaItemRequestedBy?: number;
        RelatedAgendaItemSequenceNo?: number;
        RelatedAgendaItemImages?: string;
        RelatedAgendaItemAttachments?: string;
        RelatedAgendaItemMeeting?: number;
        MeetingMeetingName?: string;
        MeetingMeetingType?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingDepartment?: number;
        MeetingLocation?: number;
        MeetingOrganizedBy?: number;
        MeetingReporter?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace AgendaDecisionsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Meeting.AgendaDecisions';
        export const lookupKey = 'Meetings.AgendaDecisions';

        export function getLookup(): Q.Lookup<AgendaDecisionsRow> {
            return Q.getLookup<AgendaDecisionsRow>('Meetings.AgendaDecisions');
        }
        export const deletePermission = 'Masters:Meeting:Delete';
        export const insertPermission = 'Masters:Meeting:Create';
        export const readPermission = 'Masters:Meeting:View';
        export const updatePermission = 'Masters:Meeting:Update';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description",
            DueDate = "DueDate",
            AssignedTo = "AssignedTo",
            DecisionNumber = "DecisionNumber",
            RelatedAgendaItem = "RelatedAgendaItem",
            ResolutionStatus = "ResolutionStatus",
            ResolutionStatusName = "ResolutionStatusName",
            Images = "Images",
            Attachments = "Attachments",
            Meeting = "Meeting",
            AssignedToFirstName = "AssignedToFirstName",
            AssignedToLastName = "AssignedToLastName",
            AssignedToFullName = "AssignedToFullName",
            AssignedToDesignationId = "AssignedToDesignationId",
            AssignedToDepartmentId = "AssignedToDepartmentId",
            AssignedToRateType = "AssignedToRateType",
            AssignedToPhone = "AssignedToPhone",
            AssignedToHoureRateSalary = "AssignedToHoureRateSalary",
            AssignedToEmail = "AssignedToEmail",
            AssignedToBloodGroup = "AssignedToBloodGroup",
            AssignedToPicture = "AssignedToPicture",
            AssignedToCountryId = "AssignedToCountryId",
            AssignedToStateId = "AssignedToStateId",
            AssignedToCityId = "AssignedToCityId",
            AssignedToZipCode = "AssignedToZipCode",
            AssignedToAddress = "AssignedToAddress",
            AssignedToUserId = "AssignedToUserId",
            AssignedToRegionId = "AssignedToRegionId",
            AssignedToTerritoryId = "AssignedToTerritoryId",
            AssignedToCnic = "AssignedToCnic",
            AssignedToInsertDate = "AssignedToInsertDate",
            AssignedToInsertUserId = "AssignedToInsertUserId",
            AssignedToUpdateDate = "AssignedToUpdateDate",
            AssignedToUpdateUserId = "AssignedToUpdateUserId",
            AssignedToDeleteDate = "AssignedToDeleteDate",
            AssignedToDeleteUserId = "AssignedToDeleteUserId",
            AssignedToIsActive = "AssignedToIsActive",
            RelatedAgendaItemTitle = "RelatedAgendaItemTitle",
            RelatedAgendaItemDescription = "RelatedAgendaItemDescription",
            RelatedAgendaItemItemType = "RelatedAgendaItemItemType",
            RelatedAgendaItemRequestedBy = "RelatedAgendaItemRequestedBy",
            RelatedAgendaItemSequenceNo = "RelatedAgendaItemSequenceNo",
            RelatedAgendaItemImages = "RelatedAgendaItemImages",
            RelatedAgendaItemAttachments = "RelatedAgendaItemAttachments",
            RelatedAgendaItemMeeting = "RelatedAgendaItemMeeting",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingType = "MeetingMeetingType",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingDepartment = "MeetingDepartment",
            MeetingLocation = "MeetingLocation",
            MeetingOrganizedBy = "MeetingOrganizedBy",
            MeetingReporter = "MeetingReporter",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
