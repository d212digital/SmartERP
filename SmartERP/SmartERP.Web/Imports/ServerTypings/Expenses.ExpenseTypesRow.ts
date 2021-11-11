namespace SmartERP.Expenses {
    export interface ExpenseTypesRow {
        Id?: number;
        Type?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace ExpenseTypesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'Expenses.ExpenseTypes';
        export const lookupKey = 'Expenses.ExpenseTypes';

        export function getLookup(): Q.Lookup<ExpenseTypesRow> {
            return Q.getLookup<ExpenseTypesRow>('Expenses.ExpenseTypes');
        }
        export const deletePermission = 'Masters:Expense Type:Delete';
        export const insertPermission = 'Masters:Expense Type:Create';
        export const readPermission = 'Masters:Expense Type:View';
        export const updatePermission = 'Masters:Expense Type:Update';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
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
