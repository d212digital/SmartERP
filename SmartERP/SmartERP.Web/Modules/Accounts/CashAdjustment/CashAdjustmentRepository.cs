
namespace SmartERP.Accounts.Repositories
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using SmartERP.Accounts.Entities;
    using System;
    using System.Data;
    using MyRow = Entities.CashAdjustmentRow;

  

    public class CashAdjustmentRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
       
        public CashAdjustmentRepository(IRequestContext context)
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
                //var user = (UserDefinition)Authorization.UserDefinition;

                var fld = AccountsRow.Fields;
                var accountsRow = new AccountsRow();
                new SqlQuery().From(accountsRow)
                    .Select(
                        fld.Id,
                        fld.HeadCode,
                        fld.IsActive)
                    .Where(fld.HeadCode == 1020203)//1020101
                    .GetFirst(this.Connection);
                if (IsCreate)
                {
                    Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                    Row.Vtype = "AD";
                    if (Row.AccountType == AccountKind.Credit)
                    {
                        Row.Debit = 0;
                    }
                    else if (Row.AccountType == AccountKind.Debit)
                    {
                        Row.Debit = Row.Credit;
                        Row.Credit = 0;
                    }
                    Row.CoaId = accountsRow.Id;
                    Row.Coa = accountsRow.HeadCode.ToString();
                    Row.IsAppove = true;
                    Row.IsPosted = true;
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

            protected override void OnBeforeExecuteQuery()
            {
                base.OnBeforeExecuteQuery();
                Query.Where(
                    new Criteria(Fld.Coa).StartsWith("1020203") &
                    //new Criteria(Fld.Coa) != 1020204 &
                    new Criteria(Fld.IsAppove) == 1 &
                    new Criteria(Fld.IsPosted) == 1
                    );

            }
            protected override void ApplySortBy(SqlQuery query, SortBy sortBy)
            {
                base.ApplySortBy(query, sortBy);
                sortBy.Field = Fld.Id.PropertyName;
                sortBy.Descending = true;
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