
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DebitVoucherRow))]
    public class DebitVoucherController : Controller
    {
        [Route("Accounts/DebitVoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/DebitVoucher/DebitVoucherIndex.cshtml");
        }
    }
}