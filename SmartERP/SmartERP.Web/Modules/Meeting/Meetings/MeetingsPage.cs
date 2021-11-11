
namespace SmartERP.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeetingsRow))]
    public class MeetingsController : Controller
    {
        [Route("Meeting/Meetings")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetings/MeetingsIndex.cshtml");
        }
    }
}