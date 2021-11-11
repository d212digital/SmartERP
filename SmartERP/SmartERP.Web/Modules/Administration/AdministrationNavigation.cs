using Serenity.Navigation;
using MyPages = SmartERP.Administration.Pages;
using Administration = SmartERP.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/Currencies", typeof(MyPages.CurrenciesController), icon: null)]
[assembly: NavigationLink(9000, "Administration/Settings", typeof(MyPages.CompaniesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Administration/Navigation List", typeof(MyPages.NavigationListController), icon: null)]