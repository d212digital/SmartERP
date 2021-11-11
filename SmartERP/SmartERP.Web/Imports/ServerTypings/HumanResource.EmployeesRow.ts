namespace SmartERP.HumanResource {
    export interface EmployeesRow {
        Id?: number;
        FirstName?: string;
        LastName?: string;
        EmployeeFullName?: string;
        DesignationId?: number;
        DepartmentId?: number;
        RateType?: RateKind;
        Phone?: string;
        HoureRateSalary?: number;
        Email?: string;
        BloodGroup?: BloodGroupKind;
        Picture?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ZipCode?: string;
        Address?: string;
        UserId?: number;
        RegionId?: number;
        TerritoryId?: number;
        Designation?: string;
        DesignationDescription?: string;
        DesignationParentDesignationId?: number;
        Department?: string;
        DepartmentDescription?: string;
        DepartmentParentDepartmentId?: number;
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
        RegionName?: string;
        RegionInsertDate?: string;
        RegionInsertUserId?: number;
        RegionUpdateDate?: string;
        RegionUpdateUserId?: number;
        RegionDeleteDate?: string;
        RegionDeleteUserId?: number;
        RegionIsActive?: number;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionId?: number;
        TerritoryInsertDate?: string;
        TerritoryInsertUserId?: number;
        TerritoryUpdateDate?: string;
        TerritoryUpdateUserId?: number;
        TerritoryDeleteDate?: string;
        TerritoryDeleteUserId?: number;
        TerritoryIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace EmployeesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EmployeeFullName';
        export const localTextPrefix = 'HumanResource.Employees';
        export const lookupKey = 'HumanResource.Employees';

        export function getLookup(): Q.Lookup<EmployeesRow> {
            return Q.getLookup<EmployeesRow>('HumanResource.Employees');
        }
        export const deletePermission = 'Human Resource:Employee:Delete';
        export const insertPermission = 'Human Resource:Employee:Create';
        export const readPermission = 'Human Resource:Employee:View';
        export const updatePermission = 'Human Resource:Employee:Update';

        export declare const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            EmployeeFullName = "EmployeeFullName",
            DesignationId = "DesignationId",
            DepartmentId = "DepartmentId",
            RateType = "RateType",
            Phone = "Phone",
            HoureRateSalary = "HoureRateSalary",
            Email = "Email",
            BloodGroup = "BloodGroup",
            Picture = "Picture",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ZipCode = "ZipCode",
            Address = "Address",
            UserId = "UserId",
            RegionId = "RegionId",
            TerritoryId = "TerritoryId",
            Designation = "Designation",
            DesignationDescription = "DesignationDescription",
            DesignationParentDesignationId = "DesignationParentDesignationId",
            Department = "Department",
            DepartmentDescription = "DepartmentDescription",
            DepartmentParentDepartmentId = "DepartmentParentDepartmentId",
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
            RegionName = "RegionName",
            RegionInsertDate = "RegionInsertDate",
            RegionInsertUserId = "RegionInsertUserId",
            RegionUpdateDate = "RegionUpdateDate",
            RegionUpdateUserId = "RegionUpdateUserId",
            RegionDeleteDate = "RegionDeleteDate",
            RegionDeleteUserId = "RegionDeleteUserId",
            RegionIsActive = "RegionIsActive",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionId = "TerritoryRegionId",
            TerritoryInsertDate = "TerritoryInsertDate",
            TerritoryInsertUserId = "TerritoryInsertUserId",
            TerritoryUpdateDate = "TerritoryUpdateDate",
            TerritoryUpdateUserId = "TerritoryUpdateUserId",
            TerritoryDeleteDate = "TerritoryDeleteDate",
            TerritoryDeleteUserId = "TerritoryDeleteUserId",
            TerritoryIsActive = "TerritoryIsActive",
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
