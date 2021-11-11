
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TerritoriesRow))]
    public class TerritoriesController : Controller
    {
        [Route("Administration/Territories")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Territories/TerritoriesIndex.cshtml");
        }
    }
}