
namespace SmartERP.Customers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("Customers/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/Customers/Customers/CustomersIndex.cshtml");
        }
    }
}