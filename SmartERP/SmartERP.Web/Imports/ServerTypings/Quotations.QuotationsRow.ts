namespace SmartERP.Quotations {
    export interface QuotationsRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        Details?: string;
        ExpiryDate?: string;
        LineItems?: QuotationDetailsRow[];
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        RowVersion?: number[];
        VatPercentage?: number;
        NoTax?: boolean;
        VatType?: VatKind;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace QuotationsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Quotations.Quotations';
        export const lookupKey = 'Quotations.Quotations';

        export function getLookup(): Q.Lookup<QuotationsRow> {
            return Q.getLookup<QuotationsRow>('Quotations.Quotations');
        }
        export const deletePermission = 'Sales:Quotation:Delete';
        export const insertPermission = 'Sales:Quotation:Create';
        export const readPermission = 'Sales:Quotation:View';
        export const updatePermission = 'Sales:Quotation:Update';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            Details = "Details",
            ExpiryDate = "ExpiryDate",
            LineItems = "LineItems",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            RowVersion = "RowVersion",
            VatPercentage = "VatPercentage",
            NoTax = "NoTax",
            VatType = "VatType",
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
