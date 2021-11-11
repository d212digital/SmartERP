
namespace SmartERP.Quotations.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.QuotationsRow))]
    public class QuotationsController : Controller
    {
        [Route("Quotations/Quotations")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/Quotations/QuotationsIndex.cshtml");
        }
    }
}