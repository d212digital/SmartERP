
namespace SmartERP.Products.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UnitsRow))]
    public class UnitsController : Controller
    {
        [Route("Products/Units")]
        public ActionResult Index()
        {
            return View("~/Modules/Products/Units/UnitsIndex.cshtml");
        }
    }
}