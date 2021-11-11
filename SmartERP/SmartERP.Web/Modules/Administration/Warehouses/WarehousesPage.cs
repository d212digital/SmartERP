
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WarehousesRow))]
    public class WarehousesController : Controller
    {
        [Route("Administration/Warehouses")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Warehouses/WarehousesIndex.cshtml");
        }
    }
}