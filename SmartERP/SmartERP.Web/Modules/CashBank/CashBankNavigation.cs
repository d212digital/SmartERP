using Serenity.Navigation;

[assembly: NavigationMenu(6000, "Cash//Bank", icon: "fa-university")]
[assembly: NavigationLink(6000, "Cash//Bank/Bank Transactions", typeof(SmartERP.Accounts.Pages.BankTransactionsController), icon: null)]

[assembly: NavigationLink(6000, "Cash//Bank/Expenses", typeof(SmartERP.Expenses.Pages.ExpensesController), icon: "fa-money")]

//[assembly: NavigationLink(6000, "Cash//Bank/Opening Balance", typeof(SmartERP.Accounts.Pages.OpeningBalanceController), icon: null)]
[assembly: NavigationLink(6000, "Cash//Bank/Customer Receive", typeof(SmartERP.Accounts.Pages.CustomerReceiveController), icon: null)]
[assembly: NavigationLink(6000, "Cash//Bank/Supplier Payment", typeof(SmartERP.Accounts.Pages.SupplierPaymentController), icon: null)]
[assembly: NavigationLink(6000, "Cash//Bank/Cash Adjustment", typeof(SmartERP.Accounts.Pages.CashAdjustmentController), icon: null)]