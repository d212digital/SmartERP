
namespace SmartERP.Reports.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;    
    using Serenity.Data;

    [PageAuthorize]    
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.SupplierPayableReport)]
    public class SupplierPayableReportController : Controller
    {
        [Route("Reports/SupplierPayableReport")]
        public ActionResult Index()
        {
           
            return View("~/Modules/Reports/SupplierPayableReport/SupplierPayableReportIndex.cshtml");
        }
       
    }
   
}