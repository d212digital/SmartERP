namespace SmartERP.Accounts {
    export interface AccountsRow {
        Id?: number;
        HeadCode?: number;
        HeadName?: string;
        ParentHead?: number;
        PHeadName?: string;
        HeadLevel?: number;
        HeadType?: string;
        IsTransaction?: boolean;
        IsGl?: boolean;
        IsBudget?: boolean;
        IsDepreciation?: boolean;
        CustomerId?: number;
        SupplierId?: number;
        DepreciationRate?: number;
        OpeningBalance?: number;
        Balance?: number;
        HeadCodeName?: string;
        ParentHeadHeadCode?: number;
        ParentHeadHeadName?: string;
        ParentHead1?: number;
        ParentHeadPHeadName?: string;
        ParentHeadHeadLevel?: number;
        ParentHeadHeadType?: string;
        ParentHeadIsTransaction?: boolean;
        ParentHeadIsGl?: boolean;
        ParentHeadIsBudget?: boolean;
        ParentHeadIsDepreciation?: boolean;
        ParentHeadCustomerId?: number;
        ParentHeadSupplierId?: number;
        ParentHeadDepreciationRate?: number;
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
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierInsertDate?: string;
        SupplierInsertUserId?: number;
        SupplierUpdateDate?: string;
        SupplierUpdateUserId?: number;
        SupplierDeleteDate?: string;
        SupplierDeleteUserId?: number;
        SupplierIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace AccountsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'HeadName';
        export const localTextPrefix = 'Accounts.Accounts';
        export const lookupKey = 'Accounts.Accounts';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Accounts.Accounts');
        }
        export const deletePermission = 'Financial:Chart Of Accounts:Delete';
        export const insertPermission = 'Financial:Chart Of Accounts:Create';
        export const readPermission = 'Financial:Chart Of Accounts:View';
        export const updatePermission = 'Financial:Chart Of Accounts:Update';

        export declare const enum Fields {
            Id = "Id",
            HeadCode = "HeadCode",
            HeadName = "HeadName",
            ParentHead = "ParentHead",
            PHeadName = "PHeadName",
            HeadLevel = "HeadLevel",
            HeadType = "HeadType",
            IsTransaction = "IsTransaction",
            IsGl = "IsGl",
            IsBudget = "IsBudget",
            IsDepreciation = "IsDepreciation",
            CustomerId = "CustomerId",
            SupplierId = "SupplierId",
            DepreciationRate = "DepreciationRate",
            OpeningBalance = "OpeningBalance",
            Balance = "Balance",
            HeadCodeName = "HeadCodeName",
            ParentHeadHeadCode = "ParentHeadHeadCode",
            ParentHeadHeadName = "ParentHeadHeadName",
            ParentHead1 = "ParentHead1",
            ParentHeadPHeadName = "ParentHeadPHeadName",
            ParentHeadHeadLevel = "ParentHeadHeadLevel",
            ParentHeadHeadType = "ParentHeadHeadType",
            ParentHeadIsTransaction = "ParentHeadIsTransaction",
            ParentHeadIsGl = "ParentHeadIsGl",
            ParentHeadIsBudget = "ParentHeadIsBudget",
            ParentHeadIsDepreciation = "ParentHeadIsDepreciation",
            ParentHeadCustomerId = "ParentHeadCustomerId",
            ParentHeadSupplierId = "ParentHeadSupplierId",
            ParentHeadDepreciationRate = "ParentHeadDepreciationRate",
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
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierInsertDate = "SupplierInsertDate",
            SupplierInsertUserId = "SupplierInsertUserId",
            SupplierUpdateDate = "SupplierUpdateDate",
            SupplierUpdateUserId = "SupplierUpdateUserId",
            SupplierDeleteDate = "SupplierDeleteDate",
            SupplierDeleteUserId = "SupplierDeleteUserId",
            SupplierIsActive = "SupplierIsActive",
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
