namespace SmartERP.Meeting {
    export interface MeetingAttendeesRow {
        Id?: number;
        AttendeeType?: number;
        AttendeeTypeName?: string;
        AttendanceStatus?: number;
        AttendanceStatusName?: string;
        Attendee?: number;
        Meeting?: number;
        AttendeeFirstName?: string;
        AttendeeLastName?: string;
        AttendeeFullName?: string;
        AttendeeDesignationId?: number;
        AttendeeDepartmentId?: number;
        AttendeeRateType?: number;
        AttendeePhone?: string;
        AttendeeHoureRateSalary?: number;
        AttendeeEmail?: string;
        AttendeeBloodGroup?: number;
        AttendeePicture?: string;
        AttendeeCountryId?: number;
        AttendeeStateId?: number;
        AttendeeCityId?: number;
        AttendeeZipCode?: string;
        AttendeeAddress?: string;
        AttendeeUserId?: number;
        AttendeeRegionId?: number;
        AttendeeTerritoryId?: number;
        AttendeeCnic?: string;
        AttendeeInsertDate?: string;
        AttendeeInsertUserId?: number;
        AttendeeUpdateDate?: string;
        AttendeeUpdateUserId?: number;
        AttendeeDeleteDate?: string;
        AttendeeDeleteUserId?: number;
        AttendeeIsActive?: number;
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

    export namespace MeetingAttendeesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Meeting.MeetingAttendees';
        export const lookupKey = 'Meetings.MeetingAttendees';

        export function getLookup(): Q.Lookup<MeetingAttendeesRow> {
            return Q.getLookup<MeetingAttendeesRow>('Meetings.MeetingAttendees');
        }
        export const deletePermission = 'Masters:Meeting:Delete';
        export const insertPermission = 'Masters:Meeting:Create';
        export const readPermission = 'Masters:Meeting:View';
        export const updatePermission = 'Masters:Meeting:Update';

        export declare const enum Fields {
            Id = "Id",
            AttendeeType = "AttendeeType",
            AttendeeTypeName = "AttendeeTypeName",
            AttendanceStatus = "AttendanceStatus",
            AttendanceStatusName = "AttendanceStatusName",
            Attendee = "Attendee",
            Meeting = "Meeting",
            AttendeeFirstName = "AttendeeFirstName",
            AttendeeLastName = "AttendeeLastName",
            AttendeeFullName = "AttendeeFullName",
            AttendeeDesignationId = "AttendeeDesignationId",
            AttendeeDepartmentId = "AttendeeDepartmentId",
            AttendeeRateType = "AttendeeRateType",
            AttendeePhone = "AttendeePhone",
            AttendeeHoureRateSalary = "AttendeeHoureRateSalary",
            AttendeeEmail = "AttendeeEmail",
            AttendeeBloodGroup = "AttendeeBloodGroup",
            AttendeePicture = "AttendeePicture",
            AttendeeCountryId = "AttendeeCountryId",
            AttendeeStateId = "AttendeeStateId",
            AttendeeCityId = "AttendeeCityId",
            AttendeeZipCode = "AttendeeZipCode",
            AttendeeAddress = "AttendeeAddress",
            AttendeeUserId = "AttendeeUserId",
            AttendeeRegionId = "AttendeeRegionId",
            AttendeeTerritoryId = "AttendeeTerritoryId",
            AttendeeCnic = "AttendeeCnic",
            AttendeeInsertDate = "AttendeeInsertDate",
            AttendeeInsertUserId = "AttendeeInsertUserId",
            AttendeeUpdateDate = "AttendeeUpdateDate",
            AttendeeUpdateUserId = "AttendeeUpdateUserId",
            AttendeeDeleteDate = "AttendeeDeleteDate",
            AttendeeDeleteUserId = "AttendeeDeleteUserId",
            AttendeeIsActive = "AttendeeIsActive",
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
