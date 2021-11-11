using Serenity.Navigation;
using MyPages = SmartERP.Meeting.Pages;

[assembly: NavigationMenu(1900, "Meeting", icon: "fa-comments")]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetings", typeof(MyPages.MeetingsController), icon: null)]
