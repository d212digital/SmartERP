
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OpeningBalanceRow))]
    public class OpeningBalanceController : Controller
    {
        [Route("Accounts/OpeningBalance")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/OpeningBalance/OpeningBalanceIndex.cshtml");
        }
    }
}