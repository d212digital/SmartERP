namespace SmartERP.Accounts {
    export interface CustomerReceiveRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        CustomerId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CustomerName?: string;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }

    export namespace CustomerReceiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Accounts.CustomerReceive';
        export const deletePermission = 'Cash\/Bank:Customer Receive';
        export const insertPermission = 'Cash\/Bank:Customer Receive';
        export const readPermission = 'Cash\/Bank:Customer Receive';
        export const updatePermission = 'Cash\/Bank:Customer Receive';

        export declare const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            CustomerId = "CustomerId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CustomerName = "CustomerName",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
