
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StatesRow))]
    public class StatesController : Controller
    {
        [Route("Administration/States")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/States/StatesIndex.cshtml");
        }
    }
}