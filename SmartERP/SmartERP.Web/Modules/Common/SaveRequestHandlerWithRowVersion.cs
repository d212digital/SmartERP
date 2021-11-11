using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using System.Globalization;
using System.Linq;

namespace Serenity.Services
{
    //public class SaveRequestHandlerWithRowVersion<TRow> : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse>
    //    where TRow : IRow, IIdRow, IRowVersionRow, new()
    //public class SaveRequestHandlerWithRowVersion<TRow> where TRow : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse>, IRow, IIdRow, IRowVersionRow, new()
    //public class SaveRequestHandlerWithRowVersion<TRow> : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse>
    //    where TRow : IRow, IIdRow, IRowVersionRow,new()
    //public class SaveRequestHandlerWithRowVersion<TRow> where TRow : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse>, IRow, IIdRow, IRowVersionRow, new()
    //public class SaveRequestHandlerWithRowVersion<TRow, TSaveRequest, TSaveResponse> : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse>
    //     where TRow : class, IRow, IIdRow, IRowVersionRow,new()
    //    where TSaveRequest : SaveRequest<TRow>, new()
    //    where TSaveResponse : SaveResponse, new()       
    public class SaveRequestHandlerWithRowVersion<TRow> : SaveRequestHandler<TRow, SaveRequest<TRow>, SaveResponse> where TRow : class, IRow, IIdRow, IRowVersionRow, new()
    {
       // public SaveRequestHandler(IRequestContext context);    
        public SaveRequestHandlerWithRowVersion(IRequestContext context) : base(context)
        {
        }
        protected override void LoadOldEntity()
        {
            // Normaly the rowversion field (with flag 'Calculated') will not be loaded from database
            // with GetFirst() -> explicitly select this field
            var rowVersionField = (Field)Row.RowVersionField;
            if (!PrepareQuery().Select(rowVersionField).GetFirst(Connection))
            {
                var idField = (Field)(Row.IdField);
                var id = Request.EntityId != null ?
                    idField.ConvertValue(Request.EntityId, CultureInfo.InvariantCulture)
                    : idField.AsObject(Row);
                throw DataValidation.EntityNotFoundError(Row,id,Localizer);
                //throw DataValidation.EntityNotFoundError(Row, id);
            }
        }

        private Int64? RowVersionToInt64(TRow row)
        {
            var rowVersionField = (Field)Row.RowVersionField;
            byte[] rv = (byte[])rowVersionField.AsObject(row);
            if (rv == null)
            {
                return null;
            }
            Array.Reverse(rv);
            return BitConverter.ToInt64(rv, 0);
        }

        protected override void ExecuteSave()
        {
            if (IsUpdate)
            {
                if (Row.IsAnyFieldAssigned)
                {
                    var idField = (Field)Row.IdField;
                    var rowVersionField = (Field)Row.RowVersionField;

                    // For now, I'm too lazy to implement updates on id field, I don't need this
                    if (idField.IndexCompare(Old, Row) != 0)
                    {
                        throw new Exception(Localizer.Get("Validation.IdUpdateNotSupported"));
                    }
                    var update = new SqlUpdate(Row.Table);
                    update.Set(Row);
                    // get the rowversion value that was sent to the form on load
                    Int64? formRowVersion = RowVersionToInt64(Row);
                    if (formRowVersion == null)
                    {
                        throw new Exception(Localizer.Get("Validation.RowVersionFieldEmpty"));
                    }
                    update.Where(
                        idField == new ValueCriteria(idField.AsObject(Old)) &
                        rowVersionField == new ValueCriteria(formRowVersion)
                        );
                    try
                    {
                        update.Execute(Connection, ExpectedRows.One);
                    }
                    catch (InvalidOperationException ex)
                    {
                        // if the update failed, throw a specific exception if the rowversions don't match
                        Int64? rowVersionIdDb = RowVersionToInt64(Old);
                        if (rowVersionIdDb != formRowVersion)
                        {
                            throw new Exception(Localizer.Get("Validation.RowVersionFieldChanged"));
                        }
                        else
                        {

                            throw new Exception(ex.Message);
                        }
                    }
                    Response.EntityId = idField.AsObject(Row);
                    InvalidateCacheOnCommit();
                }
            }
            else
            {
                base.ExecuteSave();
            }
        }
    }
}