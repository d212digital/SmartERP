
namespace SmartERP.Products.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BrandsRow))]
    public class BrandsController : Controller
    {
        [Route("Products/Brands")]
        public ActionResult Index()
        {
            return View("~/Modules/Products/Brands/BrandsIndex.cshtml");
        }
    }
}