namespace SmartERP.Administration {
    export interface CompaniesRow {
        Id?: number;
        CompanyName?: string;
        CompanyEmail?: string;
        Address?: string;
        Phone?: string;
        CurrencyId?: number;
        VatPercentage?: number;
        Logo?: string;
        SaleLogo?: string;
        Favicon?: string;
        CurrencyPosition?: CurrencyPositionKind;
        FooterText?: string;
        VatType?: VatKind;
        Vat?: string;
        CurrencyCurrencyName?: string;
        CurrencyCurrencySymbol?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace CompaniesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Administration.Companies';
        export const lookupKey = 'Administration.Companies';

        export function getLookup(): Q.Lookup<CompaniesRow> {
            return Q.getLookup<CompaniesRow>('Administration.Companies');
        }
        export const deletePermission = 'Administration:Settings';
        export const insertPermission = 'Administration:Settings';
        export const readPermission = 'Administration:Settings';
        export const updatePermission = 'Administration:Settings';

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CompanyEmail = "CompanyEmail",
            Address = "Address",
            Phone = "Phone",
            CurrencyId = "CurrencyId",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            SaleLogo = "SaleLogo",
            Favicon = "Favicon",
            CurrencyPosition = "CurrencyPosition",
            FooterText = "FooterText",
            VatType = "VatType",
            Vat = "Vat",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyCurrencySymbol = "CurrencyCurrencySymbol",
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
