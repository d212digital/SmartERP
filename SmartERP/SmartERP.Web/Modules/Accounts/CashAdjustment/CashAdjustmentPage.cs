
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CashAdjustmentRow))]
    public class CashAdjustmentController : Controller
    {
        [Route("Accounts/CashAdjustment")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CashAdjustment/CashAdjustmentIndex.cshtml");
        }
    }
}