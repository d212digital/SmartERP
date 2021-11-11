
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RegionsRow))]
    public class RegionsController : Controller
    {
        [Route("Administration/Regions")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Regions/RegionsIndex.cshtml");
        }
    }
}