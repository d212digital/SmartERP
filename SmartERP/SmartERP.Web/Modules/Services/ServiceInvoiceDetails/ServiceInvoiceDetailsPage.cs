
namespace SmartERP.Services.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ServiceInvoiceDetailsRow))]
    public class ServiceInvoiceDetailsController : Controller
    {
        [Route("Services/ServiceInvoiceDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Services/ServiceInvoiceDetails/ServiceInvoiceDetailsIndex.cshtml");
        }
    }
}