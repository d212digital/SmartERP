
namespace SmartERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DamagedProductsRow))]
    public class DamagedProductsController : Controller
    {
        [Route("Inventory/DamagedProducts")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/DamagedProducts/DamagedProductsIndex.cshtml");
        }
    }
}