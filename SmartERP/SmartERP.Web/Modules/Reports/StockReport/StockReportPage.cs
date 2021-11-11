
namespace SmartERP.Reports.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;    

    [PageAuthorize]
    [ReadPermission(PermissionKeys.Reports.StockReport)]
    public class StockReportController : Controller
    {
        [Route("Reports/StockReport")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/StockReport/StockReportIndex.cshtml");
        }
    }
}