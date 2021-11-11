
namespace SmartERP.Reports.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;

    [PageAuthorize]
    [ReadPermission(PermissionKeys.Reports.CustomerReceivableReport)]
    public class CustomerReceivableReportController : Controller
    {
        [Route("Reports/CustomerReceivableReport")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/CustomerReceivableReport/CustomerReceivableReportIndex.cshtml");
        }
    }
}