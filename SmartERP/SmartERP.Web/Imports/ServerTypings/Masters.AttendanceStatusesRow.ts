namespace SmartERP.Masters {
    export interface AttendanceStatusesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace AttendanceStatusesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.AttendanceStatuses';
        export const lookupKey = 'Masters.AttendanceStatuses';

        export function getLookup(): Q.Lookup<AttendanceStatusesRow> {
            return Q.getLookup<AttendanceStatusesRow>('Masters.AttendanceStatuses');
        }
        export const deletePermission = 'Masters:Attendance Statuses:Delete';
        export const insertPermission = 'Masters:Attendance Statuses:Create';
        export const readPermission = 'Masters:Attendance Statusess:View';
        export const updatePermission = 'Masters:Attendance Statuses:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
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
