using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = SmartERP.Inventory.Entities.UpdateStocksRow;

namespace SmartERP.Inventory.Repositories
{
    public class UpdateStocksRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public UpdateStocksRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, IUserRetrieveService userRetrieveService)
        {
            return new MyListHandler(Context, userRetrieveService).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                if (IsCreate)
                {
                    Row.VNo = Convert.ToInt64(DateTime.Now.ToString("yyyyMMddHHmmssffff"));
                    Row.TransactionType = "UpdateStock";
                    Row.Mode = "IN";
                    if (Row.StockMode==StockKind.OUT)
                    {
                        Row.Mode = "OUT";
                    }
                   
                }
                if (IsUpdate)
                {                   
                    Row.Mode = "IN";
                    if (Row.StockMode == StockKind.OUT)
                    {
                        Row.Mode = "OUT";
                    }

                }

            }
        }
        
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> 
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }

            protected override void OnAfterExecuteQuery()
            {
                base.OnAfterExecuteQuery();
                Row.StockMode = StockKind.IN;
                if (Row.Mode== "OUT")
                {
                    Row.StockMode = StockKind.OUT;
                }
                
               
            }
        }
        
        private class MyListHandler : ListRequestHandler<MyRow> 
        {
            protected IUserRetrieveService _UserRetrieveService { get; }
            public MyListHandler(IRequestContext context, IUserRetrieveService userRetrieveService)
                 : base(context)
            {
                _UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            }
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                var userDef = (UserDefinition)User.GetUserDefinition(_UserRetrieveService);
                query.Where(Fld.TransactionType == "UpdateStock");
            }
        }
    }
}