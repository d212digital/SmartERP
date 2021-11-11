namespace SmartERP.Administration {
    export interface WarehousesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Phone?: string;
        Address?: string;
        CountryName?: string;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryDeleteDate?: string;
        CountryDeleteUserId?: number;
        CountryIsActive?: number;
        StateName?: string;
        StateCountryId?: number;
        StateInsertDate?: string;
        StateInsertUserId?: number;
        StateUpdateDate?: string;
        StateUpdateUserId?: number;
        StateDeleteDate?: string;
        StateDeleteUserId?: number;
        StateIsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityDeleteDate?: string;
        CityDeleteUserId?: number;
        CityIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace WarehousesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Warehouses';
        export const lookupKey = 'Administration.Warehouses';

        export function getLookup(): Q.Lookup<WarehousesRow> {
            return Q.getLookup<WarehousesRow>('Administration.Warehouses');
        }
        export const deletePermission = 'Masters:Warehouse:Delete';
        export const insertPermission = 'Masters:Warehouse:Create';
        export const readPermission = 'Masters:Warehouse:View';
        export const updatePermission = 'Masters:Warehouse:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Phone = "Phone",
            Address = "Address",
            CountryName = "CountryName",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryDeleteDate = "CountryDeleteDate",
            CountryDeleteUserId = "CountryDeleteUserId",
            CountryIsActive = "CountryIsActive",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            StateInsertDate = "StateInsertDate",
            StateInsertUserId = "StateInsertUserId",
            StateUpdateDate = "StateUpdateDate",
            StateUpdateUserId = "StateUpdateUserId",
            StateDeleteDate = "StateDeleteDate",
            StateDeleteUserId = "StateDeleteUserId",
            StateIsActive = "StateIsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            CityInsertDate = "CityInsertDate",
            CityInsertUserId = "CityInsertUserId",
            CityUpdateDate = "CityUpdateDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityDeleteDate = "CityDeleteDate",
            CityDeleteUserId = "CityDeleteUserId",
            CityIsActive = "CityIsActive",
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
