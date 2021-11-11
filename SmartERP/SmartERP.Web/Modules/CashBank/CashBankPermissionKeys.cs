
using Serenity.ComponentModel;

using System.ComponentModel;

namespace SmartERP.CashBank
{
    [NestedPermissionKeys]
    [DisplayName("Cash/Bank")]
    public class PermissionKeys
    {

        [DisplayName("Expenses")]
        public class Expenses
        {
            public const string View = "Cash/Bank:Expense:View";
            public const string Create = "Cash/Bank:Expense:Create";
            public const string Update = "Cash/Bank:Expense:Update";
            public const string Delete = "Cash/Bank:Expense:Delete";
        }
        [Description("Bank Transactions")]
        public const string BankTransactions = "Cash/Bank:Bank Transactions";
        [Description("Customer Receive")]
        public const string CustomerReceive = "Cash/Bank:Customer Receive";
        [Description("Supplier Payment")]
        public const string SupplierPayment = "Cash/Bank:Supplier Payment";
        [Description("Cash Adjustment")]
        public const string CashAdjustment = "Cash/Bank:Cash Adjustment";
        


    }
}
