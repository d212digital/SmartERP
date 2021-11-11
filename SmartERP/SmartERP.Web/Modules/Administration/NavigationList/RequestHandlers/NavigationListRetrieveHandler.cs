using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SmartERP.Administration.NavigationListRow>;
using MyRow = SmartERP.Administration.NavigationListRow;

namespace SmartERP.Administration
{
    public interface INavigationListRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class NavigationListRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INavigationListRetrieveHandler
    {
        public NavigationListRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}