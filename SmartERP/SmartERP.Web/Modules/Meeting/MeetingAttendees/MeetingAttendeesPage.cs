
namespace SmartERP.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeetingAttendeesRow))]
    public class MeetingAttendeesController : Controller
    {
        [Route("Meeting/MeetingAttendees")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAttendees/MeetingAttendeesIndex.cshtml");
        }
    }
}