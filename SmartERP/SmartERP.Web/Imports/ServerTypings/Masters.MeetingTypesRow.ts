namespace SmartERP.Masters {
    export interface MeetingTypesRow {
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

    export namespace MeetingTypesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.MeetingTypes';
        export const lookupKey = 'Masters.MeetingTypes';

        export function getLookup(): Q.Lookup<MeetingTypesRow> {
            return Q.getLookup<MeetingTypesRow>('Masters.MeetingTypes');
        }
        export const deletePermission = 'Masters:Meeting Types:Delete';
        export const insertPermission = 'Masters:Meeting Types:Create';
        export const readPermission = 'Masters:Meeting Types:View';
        export const updatePermission = 'Masters:Meeting Types:Update';

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
