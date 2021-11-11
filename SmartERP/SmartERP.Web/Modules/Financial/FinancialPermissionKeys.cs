
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Financial
{
    [NestedPermissionKeys]
    [DisplayName("Financial")]
    public class PermissionKeys
    {

        [DisplayName("Chart Of Accounts")]
        public class Accounts
        {
            public const string View = "Financial:Chart Of Accounts:View";
            public const string Create = "Financial:Chart Of Accounts:Create";
            public const string Update = "Financial:Chart Of Accounts:Update";
            public const string Delete = "Financial:Chart Of Accounts:Delete";
        }
        [Description("Opening Balance")]
        public const string OpeningBalance = "Financial:Opening Balance";
        [Description("Debit Voucher")]
        public const string DebitVoucher = "Financial:Debit Voucher";
        [Description("Credit Voucher")]
        public const string CreditVoucher = "Financial:Credit Voucher";
        [Description("Contra Voucher")]
        public const string ContraVoucher = "Financial:Contra Voucher";
        [Description("Journal Voucher")]
        public const string JournalVoucher = "Financial:Journal Voucher";

        [Description("Transactions")]
        public const string Transactions = "Financial:Transactions";
    }
}
