
namespace SmartERP.Products.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.CategoriesRow;

  
    public class CategoriesRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public CategoriesRepository(IRequestContext context)
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
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate && Old.ParentCategoryId != Row.ParentCategoryId && Row.ParentCategoryId != null)
                {
                    if (Row.ParentCategoryId == Row.Id)
                        throw new ValidationError("Can't move an item under itself!");

                    if (GetParents(Row.ParentCategoryId.Value).Any(x => x == Row.Id.Value))
                        throw new ValidationError("Can't move an item under one of its children!");
                }
            }

            private System.Collections.Generic.List<Int64> GetParents(Int64 id)
            {
                var parentById = Connection.List<MyRow>(q => q
                    .Select(Fld.Id)
                    .Select(Fld.ParentCategoryId))
                    .ToDictionary(x => x.Id, x => x.ParentCategoryId);

                var visited = new HashSet<Int64>();
                var result = new List<Int64>();
                Int64? ParentCategoryId;
                while (parentById.TryGetValue(id, out ParentCategoryId) &&
                    ParentCategoryId != null &&
                    !visited.Contains(ParentCategoryId.Value))
                {
                    id = ParentCategoryId.Value;
                    result.Add(id);
                    visited.Add(id);
                }

                return result;
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