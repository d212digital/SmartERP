
namespace SmartERP.Suppliers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersRow))]
    public class SuppliersController : Controller
    {
        [Route("Suppliers/Suppliers")]
        public ActionResult Index()
        {
            return View("~/Modules/Suppliers/Suppliers/SuppliersIndex.cshtml");
        }
    }
}