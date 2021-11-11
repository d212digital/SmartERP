
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountsRow))]
    public class AccountsController : Controller
    {
        [Route("Accounts/Accounts")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/Accounts/AccountsIndex.cshtml");
        }
    }
}