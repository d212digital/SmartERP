
namespace SmartERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.GoodsReceiptDetailsRow))]
    public class GoodsReceiptDetailsController : Controller
    {
        [Route("Inventory/GoodsReceiptDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsReceiptDetails/GoodsReceiptDetailsIndex.cshtml");
        }
    }
}