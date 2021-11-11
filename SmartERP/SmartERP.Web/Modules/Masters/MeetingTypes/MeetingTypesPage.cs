
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeetingTypesRow))]
    public class MeetingTypesController : Controller
    {
        [Route("Masters/MeetingTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/MeetingTypes/MeetingTypesIndex.cshtml");
        }
    }
}