
namespace SmartERP.Services.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ServiceInvoicesRepository;
    using MyRow = Entities.ServiceInvoicesRow;
    using Serenity.Web;
    using System;
    using Serenity.Reporting;

    [Route("Services/Services/ServiceInvoices/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    
    public class ServiceInvoicesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request, [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request).Entities;
            var Fld = MyRow.Fields;
            //HashSet<string> ExportColumns = new HashSet<string>();
            //ExportColumns.Add(MyRow.Fields.Id.PropertyName);
            //ExportColumns.Add(Fld.DocumentNo.PropertyName);
            //ExportColumns.Add(Fld.ProjectTitle.PropertyName);
            //ExportColumns.Add(Fld.DraftingDate.PropertyName);
            //ExportColumns.Add(Fld.PreservationYear.PropertyName);
            //ExportColumns.Add(Fld.Subject.PropertyName);
            //ExportColumns.Add(Fld.PresidentOrder.PropertyName);
            //ExportColumns.Add(Fld.DrafterName.PropertyName);
            //ExportColumns.Add(Fld.Status.PropertyName);
            //ExportColumns.Add(Fld.ProjectContractPrice.PropertyName);
            //ExportColumns.Add(Fld.Previous.PropertyName);
            //ExportColumns.Add(Fld.GrandTotal.PropertyName);
            //ExportColumns.Add(Fld.ProjectPriority.PropertyName);
            //ExportColumns.Add(Fld.ProjectStartDate.PropertyName);
            //ExportColumns.Add(Fld.ProjectEndDate.PropertyName);
            //ExportColumns.Add(Fld.Description.PropertyName);

            var bytes = exporter.Export(data, typeof(Columns.ServiceInvoicesColumns), request.ExportColumns);

            return ExcelContentResult.Create(bytes, "ServiceInvoicesList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository(Context).Undelete(uow, request);
        }
    }
}
