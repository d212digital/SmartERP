
namespace SmartERP.Purchases.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchasesRow))]
    public class PurchasesController : Controller
    {
        [Route("Purchases/Purchases")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchases/Purchases/PurchasesIndex.cshtml");
        }
    }
}