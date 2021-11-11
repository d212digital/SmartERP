namespace SmartERP.Administration {
    export interface StatesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        CountryName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace StatesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.States';
        export const lookupKey = 'Administration.States';

        export function getLookup(): Q.Lookup<StatesRow> {
            return Q.getLookup<StatesRow>('Administration.States');
        }
        export const deletePermission = 'Masters:State:Delete';
        export const insertPermission = 'Masters:State:Create';
        export const readPermission = 'Masters:State:View';
        export const updatePermission = 'Masters:State:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            CountryName = "CountryName",
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
