
namespace SmartERP.Products.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Products/Categories")]
        public ActionResult Index()
        {
            return View("~/Modules/Products/Categories/CategoriesIndex.cshtml");
        }
    }
}