namespace SmartERP.Administration {
    export interface CitiesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace CitiesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Cities';
        export const lookupKey = 'Administration.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('Administration.Cities');
        }
        export const deletePermission = 'Masters:City:Delete';
        export const insertPermission = 'Masters:City:Create';
        export const readPermission = 'Masters:City:View';
        export const updatePermission = 'Masters:City:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
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
