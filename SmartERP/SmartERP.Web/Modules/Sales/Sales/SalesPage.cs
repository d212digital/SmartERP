
namespace SmartERP.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalesRow))]
    public class SalesController : Controller
    {
        [Route("Sales/Sales")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Sales/SalesIndex.cshtml");
        }
    }
}