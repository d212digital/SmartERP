
namespace SmartERP.HumanResource.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AttendanceRow))]
    public class AttendanceController : Controller
    {
        [Route("HumanResource/Attendance")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Attendance/AttendanceIndex.cshtml");
        }
    }
}