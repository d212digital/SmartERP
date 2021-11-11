namespace SmartERP.Financial {
    declare namespace PermissionKeys {
        export const OpeningBalance = "Financial:Opening Balance";
        export const DebitVoucher = "Financial:Debit Voucher";
        export const CreditVoucher = "Financial:Credit Voucher";
        export const ContraVoucher = "Financial:Contra Voucher";
        export const JournalVoucher = "Financial:Journal Voucher";
        export const Transactions = "Financial:Transactions";

        namespace Accounts {
            export const View = "Financial:Chart Of Accounts:View";
            export const Create = "Financial:Chart Of Accounts:Create";
            export const Update = "Financial:Chart Of Accounts:Update";
            export const Delete = "Financial:Chart Of Accounts:Delete";
        }
    }
}
