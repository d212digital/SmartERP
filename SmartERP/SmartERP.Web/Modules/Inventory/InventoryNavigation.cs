using MyPages = SmartERP.Inventory.Pages;
using Serenity.Navigation;

[assembly: NavigationMenu(3000, "Inventory", icon: "fa-th")]
[assembly: NavigationLink(3000, "Inventory/Products", typeof(SmartERP.Products.Pages.ProductsController), icon: "fa-th")]
[assembly: NavigationLink(3000, "Inventory/Categories", typeof(SmartERP.Products.Pages.CategoriesController), icon: "fa-list")]
[assembly: NavigationLink(3000, "Inventory/Units", typeof(SmartERP.Products.Pages.UnitsController), icon: null)]
[assembly: NavigationLink(3000, "Inventory/Brands", typeof(SmartERP.Products.Pages.BrandsController), icon: null)]
[assembly: NavigationLink(3000, "Inventory/Damaged Products", typeof(MyPages.DamagedProductsController), icon: null)]
[assembly: NavigationLink(3000, "Inventory/Goods Receipt", typeof(MyPages.GoodsReceiptController), icon: null)]

[assembly: NavigationLink(3000, "Inventory/Goods Issue", typeof(MyPages.GoodsIssueController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Update Stock", typeof(MyPages.UpdateStocksController), icon: null)]

