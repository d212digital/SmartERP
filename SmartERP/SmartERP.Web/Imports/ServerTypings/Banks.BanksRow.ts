namespace SmartERP.Banks {
    export interface BanksRow {
        Id?: number;
        BankName?: string;
        AcName?: string;
        AcNumber?: string;
        Branch?: string;
        SignaturePicture?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace BanksRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BankName';
        export const localTextPrefix = 'Banks.Banks';
        export const lookupKey = 'Banks.Banks';

        export function getLookup(): Q.Lookup<BanksRow> {
            return Q.getLookup<BanksRow>('Banks.Banks');
        }
        export const deletePermission = 'Masters:Bank:Delete';
        export const insertPermission = 'Masters:Bank:Create';
        export const readPermission = 'Masters:Bank:View';
        export const updatePermission = 'Masters:Bank:Update';

        export declare const enum Fields {
            Id = "Id",
            BankName = "BankName",
            AcName = "AcName",
            AcNumber = "AcNumber",
            Branch = "Branch",
            SignaturePicture = "SignaturePicture",
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
