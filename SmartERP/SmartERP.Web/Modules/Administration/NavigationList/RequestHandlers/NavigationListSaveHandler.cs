using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SmartERP.Administration.NavigationListRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SmartERP.Administration.NavigationListRow;

namespace SmartERP.Administration
{
    public interface INavigationListSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class NavigationListSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INavigationListSaveHandler
    {
        public NavigationListSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}