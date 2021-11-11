
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AttendanceStatusesRow))]
    public class AttendanceStatusesController : Controller
    {
        [Route("Masters/AttendanceStatuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/AttendanceStatuses/AttendanceStatusesIndex.cshtml");
        }
    }
}