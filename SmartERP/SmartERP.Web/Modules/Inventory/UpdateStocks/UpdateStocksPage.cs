using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Inventory.Pages
{

    [PageAuthorize(typeof(Entities.UpdateStocksRow))]
    public class UpdateStocksController : Controller
    {
        [Route("Inventory/UpdateStocks")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/UpdateStocks/UpdateStocksIndex.cshtml");
        }
    }
}