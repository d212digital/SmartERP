namespace SmartERP.Suppliers {
    export interface SuppliersRow {
        Id?: number;
        CompanyName?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        SupplierPayable?: number;
        SupplierPaid?: number;
        SupplierBalance?: number;
        SupplierGroupId?: number;
        SupplierGroupName?: string;
        CNIC?: string;
        NTN?: string;
        STRN?: string;
        OrderBooker?: number;
        OrderBookerName?: string;
        Vat?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace SuppliersRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Suppliers.Suppliers';
        export const lookupKey = 'Suppliers.Suppliers';

        export function getLookup(): Q.Lookup<SuppliersRow> {
            return Q.getLookup<SuppliersRow>('Suppliers.Suppliers');
        }
        export const deletePermission = 'Business Partners:Supplier:Delete';
        export const insertPermission = 'Business Partners:Supplier:Create';
        export const readPermission = 'Business Partners:Supplier:View';
        export const updatePermission = 'Business Partners:Supplier:Update';

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            SupplierPayable = "SupplierPayable",
            SupplierPaid = "SupplierPaid",
            SupplierBalance = "SupplierBalance",
            SupplierGroupId = "SupplierGroupId",
            SupplierGroupName = "SupplierGroupName",
            CNIC = "CNIC",
            NTN = "NTN",
            STRN = "STRN",
            OrderBooker = "OrderBooker",
            OrderBookerName = "OrderBookerName",
            Vat = "Vat",
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
