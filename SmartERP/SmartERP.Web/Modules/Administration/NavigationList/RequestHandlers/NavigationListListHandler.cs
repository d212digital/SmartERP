using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SmartERP.Administration.NavigationListRow>;
using MyRow = SmartERP.Administration.NavigationListRow;

namespace SmartERP.Administration
{
    public interface INavigationListListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class NavigationListListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INavigationListListHandler
    {
        public NavigationListListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}