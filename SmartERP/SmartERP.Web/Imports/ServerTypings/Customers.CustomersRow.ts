namespace SmartERP.Customers {
    export interface CustomersRow {
        Id?: number;
        Name?: string;
        ContactName?: string;
        ContactTitle?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
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
        CustomerReceivable?: number;
        CustomerReceived?: number;
        CustomerBalance?: number;
        CustomerGroupId?: number;
        CustomerGroupName?: string;
        CNIC?: string;
        NTN?: string;
        STRN?: string;
        SalesMan?: number;
        SalesManName?: string;
        Vat?: string;
        OrderBooker?: number;
        OrderBookerName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace CustomersRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Customers.Customers';
        export const lookupKey = 'Customers.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('Customers.Customers');
        }
        export const deletePermission = 'Business Partners:Customer:Delete';
        export const insertPermission = 'Business Partners:Customer:Create';
        export const readPermission = 'Business Partners:Customer:View';
        export const updatePermission = 'Business Partners:Customer:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
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
            CustomerReceivable = "CustomerReceivable",
            CustomerReceived = "CustomerReceived",
            CustomerBalance = "CustomerBalance",
            CustomerGroupId = "CustomerGroupId",
            CustomerGroupName = "CustomerGroupName",
            CNIC = "CNIC",
            NTN = "NTN",
            STRN = "STRN",
            SalesMan = "SalesMan",
            SalesManName = "SalesManName",
            Vat = "Vat",
            OrderBooker = "OrderBooker",
            OrderBookerName = "OrderBookerName",
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
