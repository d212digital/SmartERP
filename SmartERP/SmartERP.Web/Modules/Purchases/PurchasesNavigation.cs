using Serenity.Navigation;
using MyPages = SmartERP.Purchases.Pages;

[assembly: NavigationMenu(5000, "Purchasing", icon: "fa-file")]
[assembly: NavigationLink(5000, "Purchasing/New Purchase", typeof(MyPages.PurchasesController), icon: null, Url = "/Purchases/Purchases#new")]
[assembly: NavigationLink(5000, "Purchasing/Purchases", typeof(MyPages.PurchasesController), icon: "fa-file")]

