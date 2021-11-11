
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CitiesRow))]
    public class CitiesController : Controller
    {
        [Route("Administration/Cities")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Cities/CitiesIndex.cshtml");
        }
    }
}