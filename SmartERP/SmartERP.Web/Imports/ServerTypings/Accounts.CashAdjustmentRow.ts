﻿namespace SmartERP.Accounts {
    export interface CashAdjustmentRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        AccountType?: AccountKind;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
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

    export namespace CashAdjustmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Accounts.CashAdjustment';
        export const deletePermission = 'Cash\/Bank:Cash Adjustment';
        export const insertPermission = 'Cash\/Bank:Cash Adjustment';
        export const readPermission = 'Cash\/Bank:Cash Adjustment';
        export const updatePermission = 'Cash\/Bank:Cash Adjustment';

        export declare const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            AccountType = "AccountType",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
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
