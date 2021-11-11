using MyPages = SmartERP.Masters.Pages;
using Serenity.Navigation;


[assembly: NavigationMenu(1900, "Masters", icon: "fa-list-alt")]


[assembly: NavigationLink(1900, "Masters/Countries", typeof(SmartERP.Administration.Pages.CountriesController), icon: null)]

[assembly: NavigationLink(1900, "Masters/Cities", typeof(SmartERP.Administration.Pages.CitiesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/States", typeof(SmartERP.Administration.Pages.StatesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Banks", typeof(SmartERP.Banks.Pages.BanksController), icon: "fa-university")]

[assembly: NavigationLink(1900, "Masters/Expense Types", typeof(SmartERP.Expenses.Pages.ExpenseTypesController), icon: "fa-money")]
[assembly: NavigationLink(1900, "Masters/Services", typeof(SmartERP.Services.Pages.ServicesController), icon: null)]

[assembly: NavigationLink(1900, "Masters/Territories", typeof(SmartERP.Administration.Pages.TerritoriesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Regions", typeof(SmartERP.Administration.Pages.RegionsController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Shippers", typeof(SmartERP.Administration.Pages.ShippersController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Warehouses", typeof(SmartERP.Administration.Pages.WarehousesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Customer Groups", typeof(MyPages.CustomerGroupsController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Supplier Groups", typeof(MyPages.SupplierGroupsController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Agenda Item Types", typeof(MyPages.AgendaItemTypesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Meeting Types", typeof(MyPages.MeetingTypesController), icon: null)]
[assembly: NavigationLink(1900, "Masters/Locations", typeof(MyPages.LocationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Masters/Attendance Statuses", typeof(MyPages.AttendanceStatusesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Masters/Attendee Types", typeof(MyPages.AttendeeTypesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Masters/Resolution Statuses", typeof(MyPages.ResolutionStatusesController), icon: null)]