
namespace SmartERP.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;

    [PageAuthorize]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.DayClosing)]
    public class DailyClosingController : Controller
    {
        [Route("Reports/DailyClosing")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/DailyClosing/DailyClosingIndex.cshtml");
        }
    }
}