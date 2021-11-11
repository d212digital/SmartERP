
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ContraVoucherRow))]
    public class ContraVoucherController : Controller
    {
        [Route("Accounts/ContraVoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/ContraVoucher/ContraVoucherIndex.cshtml");
        }
    }
}