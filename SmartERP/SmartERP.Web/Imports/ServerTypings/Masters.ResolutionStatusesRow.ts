namespace SmartERP.Masters {
    export interface ResolutionStatusesRow {
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

    export namespace ResolutionStatusesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.ResolutionStatuses';
        export const lookupKey = 'Masters.ResolutionStatuses';

        export function getLookup(): Q.Lookup<ResolutionStatusesRow> {
            return Q.getLookup<ResolutionStatusesRow>('Masters.ResolutionStatuses');
        }
        export const deletePermission = 'Masters:Resolution Statuses:Delete';
        export const insertPermission = 'Masters:Resolution Statuses:Create';
        export const readPermission = 'Masters:Resolution Statuses:View';
        export const updatePermission = 'Masters:Resolution Statuses:Update';

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
