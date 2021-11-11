
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BankTransactionsRow))]
    public class BankTransactionsController : Controller
    {
        [Route("Accounts/BankTransactions")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/BankTransactions/BankTransactionsIndex.cshtml");
        }
    }
}