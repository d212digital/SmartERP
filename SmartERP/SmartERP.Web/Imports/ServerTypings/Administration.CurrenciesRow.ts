namespace SmartERP.Administration {
    export interface CurrenciesRow {
        Id?: number;
        CurrencyName?: string;
        CurrencySymbol?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CurrencyName';
        export const localTextPrefix = 'Administration.Currencies';
        export const lookupKey = 'Administration.Currencies';

        export function getLookup(): Q.Lookup<CurrenciesRow> {
            return Q.getLookup<CurrenciesRow>('Administration.Currencies');
        }
        export const deletePermission = 'Administration:Currency:Delete';
        export const insertPermission = 'Administration:Currency:Create';
        export const readPermission = 'Administration:Currency:View';
        export const updatePermission = 'Administration:Currency:Update';

        export declare const enum Fields {
            Id = "Id",
            CurrencyName = "CurrencyName",
            CurrencySymbol = "CurrencySymbol",
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
