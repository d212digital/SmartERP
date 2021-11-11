
namespace SmartERP.Purchases.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseDetailsRow))]
    public class PurchaseDetailsController : Controller
    {
        [Route("Purchases/PurchaseDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchases/PurchaseDetails/PurchaseDetailsIndex.cshtml");
        }
    }
}