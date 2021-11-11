
namespace SmartERP.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleDetailsRow))]
    public class SaleDetailsController : Controller
    {
        [Route("Sales/SaleDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/SaleDetails/SaleDetailsIndex.cshtml");
        }
    }
}