
namespace SmartERP.Products.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("Products/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/Products/Products/ProductsIndex.cshtml");
        }
    }
}