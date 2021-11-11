
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CountriesRow))]
    public class CountriesController : Controller
    {
        [Route("Administration/Countries")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Countries/CountriesIndex.cshtml");
        }
    }
}