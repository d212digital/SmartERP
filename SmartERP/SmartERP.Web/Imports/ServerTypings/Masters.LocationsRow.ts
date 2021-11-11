namespace SmartERP.Masters {
    export interface LocationsRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        Latitude?: string;
        Longitude?: string;
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

    export namespace LocationsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Locations';
        export const lookupKey = 'Masters.Locations';

        export function getLookup(): Q.Lookup<LocationsRow> {
            return Q.getLookup<LocationsRow>('Masters.Locations');
        }
        export const deletePermission = 'Masters:Locations:Delete';
        export const insertPermission = 'Masters:Locations:Create';
        export const readPermission = 'Masters:Locations:View';
        export const updatePermission = 'Masters:Locations:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude",
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
