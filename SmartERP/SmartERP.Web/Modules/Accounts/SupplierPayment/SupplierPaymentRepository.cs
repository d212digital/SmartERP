
namespace SmartERP.Accounts.Repositories
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using SmartERP.Accounts.Entities;
    using SmartERP.Suppliers.Entities;
    using System;
    using System.Data;
    using MyRow = Entities.SupplierPaymentRow;

    
    public class SupplierPaymentRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public SupplierPaymentRepository(IRequestContext context)
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

                var fldSuppliers = SuppliersRow.Fields;
                var suppliersRow = new SuppliersRow();
                new SqlQuery().From(suppliersRow)
                    .Select(
                        fldSuppliers.CompanyName,
                        fldSuppliers.IsActive)
                    .Where(fld.Id == Row.SupplierId.Value)
                    .GetFirst(this.Connection);

                if (IsCreate)
                {
                    Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                    Row.Vtype = "PM";
                    Row.Debit = 0;
                    Row.Narration = " Paid to " + suppliersRow.CompanyName;//accountsRow.HeadName +
                    Row.Coa = accountsRow.HeadCode.ToString();
                    Row.IsAppove = true;
                    Row.IsPosted = true;
                    Row.InsertDate = DateTime.Now;
                    Row.InsertUserId = user.UserId;
                }

            }
            protected override void AfterSave()
            {

                base.AfterSave();
                {
                    var fld = AccountsRow.Fields;
                    var accountsRow = new AccountsRow();
                    new SqlQuery().From(accountsRow)
                        .Select(
                            fld.Id,
                            fld.HeadCode,
                            fld.HeadName,
                            fld.IsActive)
                        .Where(fld.SupplierId == Row.SupplierId.Value)
                        .GetFirst(this.Connection);

                    new SqlInsert(MyRow.Fields.TableName)
                        .Set(MyRow.Fields.VDate.PropertyName, Row.VDate)
                        .Set(MyRow.Fields.VNo.PropertyName, Row.VNo)
                        .Set(MyRow.Fields.Vtype.PropertyName, Row.Vtype)
                        .Set(MyRow.Fields.Debit.PropertyName, Row.Credit)
                        .Set(MyRow.Fields.Coa.PropertyName, accountsRow.HeadCode)
                        .Set(MyRow.Fields.CoaId.PropertyName, accountsRow.Id)
                        .Set(MyRow.Fields.IsAppove.PropertyName, true)
                        .Set(MyRow.Fields.IsPosted.PropertyName, true)
                        .Set(MyRow.Fields.InsertDate.PropertyName, Row.InsertDate)
                        .Set(MyRow.Fields.InsertUserId.PropertyName, Row.InsertUserId)
                        .Set(MyRow.Fields.Narration.PropertyName, Row.Remark)
                        .Execute(this.Connection);
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
                    new Criteria(Fld.Coa).StartsWith("50201") &
                    new Criteria(Fld.Coa) != "50201" & 
                    new Criteria(Fld.IsAppove) == 1 &
                    new Criteria(Fld.IsPosted) == 1 ||
                    new Criteria(Fld.Coa) == "402"
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