namespace SmartERP.Masters {
    export interface AttendeeTypesRow {
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

    export namespace AttendeeTypesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.AttendeeTypes';
        export const lookupKey = 'Masters.AttendeeTypes';

        export function getLookup(): Q.Lookup<AttendeeTypesRow> {
            return Q.getLookup<AttendeeTypesRow>('Masters.AttendeeTypes');
        }
        export const deletePermission = 'Masters:Attendee Types:Delete';
        export const insertPermission = 'Masters:Attendee Types:Create';
        export const readPermission = 'Masters:Attendee Types:View';
        export const updatePermission = 'Masters:Attendee Types:Update';

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
