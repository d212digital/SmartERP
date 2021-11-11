using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SmartERP.Administration.NavigationListRow;

namespace SmartERP.Administration
{
    public interface INavigationListDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class NavigationListDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, INavigationListDeleteHandler
    {
        public NavigationListDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}