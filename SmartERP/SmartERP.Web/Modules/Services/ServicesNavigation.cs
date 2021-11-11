using Serenity.Navigation;
using MyPages = SmartERP.Services.Pages;

[assembly: NavigationMenu(5100, "Services", icon: "fa-cogs")]

[assembly: NavigationLink(5100, "Services/New Invoice", typeof(MyPages.ServiceInvoicesController), icon: null, Url = "/Services/ServiceInvoices#new")]
[assembly: NavigationLink(5100, "Services/Invoices", typeof(MyPages.ServiceInvoicesController), icon: null)]
//[assembly: NavigationLink(5100, "Services/Services", typeof(MyPages.ServicesController), icon: null)]
