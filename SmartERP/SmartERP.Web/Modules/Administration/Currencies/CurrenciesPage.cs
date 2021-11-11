
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CurrenciesRow))]
    public class CurrenciesController : Controller
    {
        [Route("Administration/Currencies")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Currencies/CurrenciesIndex.cshtml");
        }
    }
}