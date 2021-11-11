using Serenity.Navigation;
using MyPages = SmartERP.HumanResource.Pages;

[assembly: NavigationMenu(8000, "Human Resource", icon: "fa-users")]
[assembly: NavigationLink(8000, "Human Resource/New Employee", typeof(MyPages.EmployeesController), icon: null, Url = "/HumanResource/Employees#new")]

[assembly: NavigationLink(8000, "Human Resource/Employees", typeof(MyPages.EmployeesController), icon: "fa-users")]
[assembly: NavigationLink(8000, "Human Resource/Departments", typeof(MyPages.DepartmentsController), icon: null)]
[assembly: NavigationLink(8000, "Human Resource/Designations", typeof(MyPages.DesignationsController), icon: null)]
[assembly: NavigationLink(8000, "Human Resource/Attendance", typeof(MyPages.AttendanceController), icon: "fa-calendar")]