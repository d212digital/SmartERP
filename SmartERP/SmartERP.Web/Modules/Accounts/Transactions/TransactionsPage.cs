
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TransactionsRow))]
    public class TransactionsController : Controller
    {
        [Route("Accounts/Transactions")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/Transactions/TransactionsIndex.cshtml");
        }
    }
}