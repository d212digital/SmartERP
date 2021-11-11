namespace SmartERP.Administration {
    export interface CountriesRow {
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

    export namespace CountriesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Countries';
        export const lookupKey = 'Administration.Countries';

        export function getLookup(): Q.Lookup<CountriesRow> {
            return Q.getLookup<CountriesRow>('Administration.Countries');
        }
        export const deletePermission = 'Masters:Country:Delete';
        export const insertPermission = 'Masters:Country:Create';
        export const readPermission = 'Masters:Country:View';
        export const updatePermission = 'Masters:Country:Update';

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
