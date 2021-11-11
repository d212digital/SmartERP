using Serenity.Navigation;
using MyPages = SmartERP.Sales.Pages;

[assembly: NavigationMenu(4000, "Sales", icon: "fa-shopping-cart")]
[assembly: NavigationLink(4000, "Sales/New Sale Quotation", typeof(SmartERP.Quotations.Pages.QuotationsController), icon: null, Url = "/Quotations/Quotations#new")]
[assembly: NavigationLink(4000, "Sales/New Sale", typeof(MyPages.SalesController), icon: null, Url = "/Sales/Sales#new")]
[assembly: NavigationLink(4000, "Sales/Sales", typeof(MyPages.SalesController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(4000, "Sales/Sales Quotation", typeof(SmartERP.Quotations.Pages.QuotationsController), icon: "fa-check-square")]





