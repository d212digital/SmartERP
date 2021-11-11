using Serenity.Navigation;


[assembly: NavigationMenu(7000, "Financial", icon: "fa-briefcase")]
[assembly: NavigationLink(7000, "Financial/Chart Of Accounts", typeof(SmartERP.Accounts.Pages.AccountsController), icon: "fa-briefcase")]
//[assembly: NavigationLink(int.MaxValue, "Accounts/Transactions", typeof(MyPages.TransactionsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Accounts/Customer Receive", typeof(MyPages.CustomerReceiveTransactionsController), icon: null)]
[assembly: NavigationLink(7000, "Financial/Opening Balance", typeof(SmartERP.Accounts.Pages.OpeningBalanceController), icon: null)]
//[assembly: NavigationLink(7000, "Financial/Customer Receive", typeof(SmartERP.Accounts.Pages.CustomerReceiveController), icon: null)]
//[assembly: NavigationLink(7000, "Financial/Supplier Payment", typeof(SmartERP.Accounts.Pages.SupplierPaymentController), icon: null)]
//[assembly: NavigationLink(7000, "Financial/Cash Adjustment", typeof(SmartERP.Accounts.Pages.CashAdjustmentController), icon: null)]
[assembly: NavigationLink(7000, "Financial/Debit Voucher", typeof(SmartERP.Accounts.Pages.DebitVoucherController), icon: null)]
[assembly: NavigationLink(7000, "Financial/Credit Voucher", typeof(SmartERP.Accounts.Pages.CreditVoucherController), icon: null)]
[assembly: NavigationLink(7000, "Financial/Contra Voucher", typeof(SmartERP.Accounts.Pages.ContraVoucherController), icon: null)]
[assembly: NavigationLink(7000, "Financial/Journal Voucher", typeof(SmartERP.Accounts.Pages.JournalVoucherController), icon: null)]
[assembly: NavigationMenu(7000, "Financial/Reports", icon: "fa-circle-o")]