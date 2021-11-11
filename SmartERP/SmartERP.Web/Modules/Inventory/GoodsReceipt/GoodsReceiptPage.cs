
namespace SmartERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.GoodsReceiptRow))]
    public class GoodsReceiptController : Controller
    {
        [Route("Inventory/GoodsReceipt")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsReceipt/GoodsReceiptIndex.cshtml");
        }
    }
}