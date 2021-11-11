
namespace SmartERP.Services.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ServiceInvoicesRow))]
    public class ServiceInvoicesController : Controller
    {
        [Route("Services/ServiceInvoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Services/ServiceInvoices/ServiceInvoicesIndex.cshtml");
        }
    }
}