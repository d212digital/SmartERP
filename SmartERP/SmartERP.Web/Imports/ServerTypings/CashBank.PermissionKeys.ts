namespace SmartERP.CashBank {
    declare namespace PermissionKeys {
        export const BankTransactions = "Cash/Bank:Bank Transactions";
        export const CustomerReceive = "Cash/Bank:Customer Receive";
        export const SupplierPayment = "Cash/Bank:Supplier Payment";
        export const CashAdjustment = "Cash/Bank:Cash Adjustment";

        namespace Expenses {
            export const View = "Cash/Bank:Expense:View";
            export const Create = "Cash/Bank:Expense:Create";
            export const Update = "Cash/Bank:Expense:Update";
            export const Delete = "Cash/Bank:Expense:Delete";
        }
    }
}
