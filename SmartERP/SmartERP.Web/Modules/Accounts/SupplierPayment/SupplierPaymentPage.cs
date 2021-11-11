
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierPaymentRow))]
    public class SupplierPaymentController : Controller
    {
        [Route("Accounts/SupplierPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/SupplierPayment/SupplierPaymentIndex.cshtml");
        }
    }
}