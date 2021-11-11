
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AttendeeTypesRow))]
    public class AttendeeTypesController : Controller
    {
        [Route("Masters/AttendeeTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/AttendeeTypes/AttendeeTypesIndex.cshtml");
        }
    }
}