namespace SmartERP.Administration {
    export interface RegionsRow {
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

    export namespace RegionsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Regions';
        export const lookupKey = 'Administration.Regions';

        export function getLookup(): Q.Lookup<RegionsRow> {
            return Q.getLookup<RegionsRow>('Administration.Regions');
        }
        export const deletePermission = 'Masters:Region:Delete';
        export const insertPermission = 'Masters:Region:Create';
        export const readPermission = 'Masters:Region:View';
        export const updatePermission = 'Masters:Region:Update';

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
