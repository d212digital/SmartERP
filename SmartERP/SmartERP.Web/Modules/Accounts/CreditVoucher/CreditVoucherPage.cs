
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CreditVoucherRow))]
    public class CreditVoucherController : Controller
    {
        [Route("Accounts/CreditVoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CreditVoucher/CreditVoucherIndex.cshtml");
        }
    }
}