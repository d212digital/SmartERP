
namespace SmartERP.Reports.Repositories
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DailyClosingRow;

 
    public class DailyClosingRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public DailyClosingRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, IUserRetrieveService userRetrieveService)
        {
            return new MySaveHandler(Context, userRetrieveService).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, IUserRetrieveService userRetrieveService)
        {
            return new MySaveHandler(Context, userRetrieveService).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler(Context).Process(uow, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private IUserRetrieveService UserRetriever { get; }
            public MySaveHandler(IRequestContext context, IUserRetrieveService userRetriever) : base(context)
            {
                UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                //var user = (UserDefinition)Authorization.UserDefinition;
                UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
                var fld = MyRow.Fields;
                var myRow = new MyRow();
                new SqlQuery().From(myRow)
                    .Select(
                        fld.Id,
                        fld.LastClosingAmount,
                        fld.TodayCashOut,
                        fld.TodayCashIn)
                    .GetFirst(this.Connection);

                Row.LastDayClosing = myRow.LastClosingAmount.HasValue == true ? myRow.LastClosingAmount.Value : 0;
                Row.CashIn = myRow.TodayCashIn.HasValue == true ? myRow.TodayCashIn.Value : 0;
                Row.CashOut = myRow.TodayCashOut.HasValue == true ? myRow.TodayCashOut.Value : 0;
                var CashInHand = Row.LastDayClosing.Value + Row.CashIn.Value - Row.CashOut.Value;
                Row.Amount = CashInHand;
                if (IsCreate)
                {
                    Row.Status = 1;
                    Row.Date = DateTime.Now;
                    Row.Adjustment = 0;
                    Row.InsertDate = DateTime.Now;
                    Row.InsertUserId = user.UserId;
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
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow>
        {
            public MyUndeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}