
namespace SmartERP.Banks.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BanksRow))]
    public class BanksController : Controller
    {
        [Route("Banks/Banks")]
        public ActionResult Index()
        {
            return View("~/Modules/Banks/Banks/BanksIndex.cshtml");
        }
    }
}