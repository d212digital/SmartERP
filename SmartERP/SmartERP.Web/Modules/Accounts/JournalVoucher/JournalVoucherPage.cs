
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.JournalVoucherRow))]
    public class JournalVoucherController : Controller
    {
        [Route("Accounts/JournalVoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/JournalVoucher/JournalVoucherIndex.cshtml");
        }
    }
}