namespace SmartERP.Accounts {
    export interface DebitVoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
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
        DebitAccountId?: number;
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

    export namespace DebitVoucherRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Accounts.DebitVoucher';
        export const deletePermission = 'Financial:Debit Voucher';
        export const insertPermission = 'Financial:Debit Voucher';
        export const readPermission = 'Financial:Debit Voucher';
        export const updatePermission = 'Financial:Debit Voucher';

        export declare const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
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
            DebitAccountId = "DebitAccountId",
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
