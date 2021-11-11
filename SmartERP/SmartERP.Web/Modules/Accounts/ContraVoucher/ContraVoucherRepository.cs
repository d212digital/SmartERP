
namespace SmartERP.Accounts.Repositories
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using SmartERP.Accounts.Entities;
    using System;
    using System.Data;
    using MyRow = Entities.ContraVoucherRow;

 
    public class ContraVoucherRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public ContraVoucherRepository(IRequestContext context)
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
                var fld = AccountsRow.Fields;
                var accountsRow = new AccountsRow();
                new SqlQuery().From(accountsRow)
                    .Select(
                        fld.HeadCode,
                        fld.HeadName,
                        fld.IsActive)
                    .Where(fld.Id == Row.CoaId.Value)
                    .GetFirst(this.Connection);

                if (IsCreate)
                {
                    Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                    Row.Vtype = "Contra";
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
                Query.Where(new Criteria(Fld.IsAppove) == 1 &
                    new Criteria(Fld.IsPosted) == 1 &
                    new Criteria(Fld.Coa).In(Query.SubQuery().From("Accounts").Select("HeadCode")
                    .Where(new Criteria("HeadName").Contains("Cash") &
                    new Criteria("HeadName").Contains("Card") &
                    new Criteria("HeadName").NotContains("Equivalent")
                    )
                    ));
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