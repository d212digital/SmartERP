
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LocationsRow))]
    public class LocationsController : Controller
    {
        [Route("Masters/Locations")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Locations/LocationsIndex.cshtml");
        }
    }
}