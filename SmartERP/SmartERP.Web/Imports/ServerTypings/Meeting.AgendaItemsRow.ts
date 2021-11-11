namespace SmartERP.Meeting {
    export interface AgendaItemsRow {
        Id?: number;
        Title?: string;
        Description?: string;
        ItemType?: number;
        RequestedBy?: number;
        SequenceNo?: number;
        Images?: string;
        Attachments?: string;
        Meeting?: number;
        ItemTypeName?: string;
        RequestedByFirstName?: string;
        RequestedByLastName?: string;
        RequestedByFullName?: string;
        RequestedByDesignationId?: number;
        RequestedByDepartmentId?: number;
        RequestedByRateType?: number;
        RequestedByPhone?: string;
        RequestedByHoureRateSalary?: number;
        RequestedByEmail?: string;
        RequestedByBloodGroup?: number;
        RequestedByPicture?: string;
        RequestedByCountryId?: number;
        RequestedByStateId?: number;
        RequestedByCityId?: number;
        RequestedByZipCode?: string;
        RequestedByAddress?: string;
        RequestedByUserId?: number;
        RequestedByRegionId?: number;
        RequestedByTerritoryId?: number;
        RequestedByCnic?: string;
        RequestedByInsertDate?: string;
        RequestedByInsertUserId?: number;
        RequestedByUpdateDate?: string;
        RequestedByUpdateUserId?: number;
        RequestedByDeleteDate?: string;
        RequestedByDeleteUserId?: number;
        RequestedByIsActive?: number;
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

    export namespace AgendaItemsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Meeting.AgendaItems';
        export const lookupKey = 'Meetings.AgendaItems';

        export function getLookup(): Q.Lookup<AgendaItemsRow> {
            return Q.getLookup<AgendaItemsRow>('Meetings.AgendaItems');
        }
        export const deletePermission = 'Masters:Meeting:Delete';
        export const insertPermission = 'Masters:Meeting:Create';
        export const readPermission = 'Masters:Meeting:View';
        export const updatePermission = 'Masters:Meeting:Update';

        export declare const enum Fields {
            Id = "Id",
            Title = "Title",
            Description = "Description",
            ItemType = "ItemType",
            RequestedBy = "RequestedBy",
            SequenceNo = "SequenceNo",
            Images = "Images",
            Attachments = "Attachments",
            Meeting = "Meeting",
            ItemTypeName = "ItemTypeName",
            RequestedByFirstName = "RequestedByFirstName",
            RequestedByLastName = "RequestedByLastName",
            RequestedByFullName = "RequestedByFullName",
            RequestedByDesignationId = "RequestedByDesignationId",
            RequestedByDepartmentId = "RequestedByDepartmentId",
            RequestedByRateType = "RequestedByRateType",
            RequestedByPhone = "RequestedByPhone",
            RequestedByHoureRateSalary = "RequestedByHoureRateSalary",
            RequestedByEmail = "RequestedByEmail",
            RequestedByBloodGroup = "RequestedByBloodGroup",
            RequestedByPicture = "RequestedByPicture",
            RequestedByCountryId = "RequestedByCountryId",
            RequestedByStateId = "RequestedByStateId",
            RequestedByCityId = "RequestedByCityId",
            RequestedByZipCode = "RequestedByZipCode",
            RequestedByAddress = "RequestedByAddress",
            RequestedByUserId = "RequestedByUserId",
            RequestedByRegionId = "RequestedByRegionId",
            RequestedByTerritoryId = "RequestedByTerritoryId",
            RequestedByCnic = "RequestedByCnic",
            RequestedByInsertDate = "RequestedByInsertDate",
            RequestedByInsertUserId = "RequestedByInsertUserId",
            RequestedByUpdateDate = "RequestedByUpdateDate",
            RequestedByUpdateUserId = "RequestedByUpdateUserId",
            RequestedByDeleteDate = "RequestedByDeleteDate",
            RequestedByDeleteUserId = "RequestedByDeleteUserId",
            RequestedByIsActive = "RequestedByIsActive",
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
