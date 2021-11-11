using Serenity.Navigation;


[assembly: NavigationMenu(2000, "Business Partners", icon: "fa-address-card")]
[assembly: NavigationLink(2000, "Business Partners/New Customer", typeof(SmartERP.Customers.Pages.CustomersController), icon: null, Url = "/Customers/Customers#new")]
[assembly: NavigationLink(2000, "Business Partners/New Supplier", typeof(SmartERP.Suppliers.Pages.SuppliersController), icon: null, Url = "/Suppliers/Suppliers#new")]
[assembly: NavigationLink(2000, "Business Partners/Customers", typeof(SmartERP.Customers.Pages.CustomersController), icon: "fa-address-card")]
[assembly: NavigationLink(2000, "Business Partners/Suppliers", typeof(SmartERP.Suppliers.Pages.SuppliersController), icon: "fa-truck")]

