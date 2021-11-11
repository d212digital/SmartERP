
namespace SmartERP.Quotations.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.QuotationDetailsRow))]
    public class QuotationDetailsController : Controller
    {
        [Route("Quotations/QuotationDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/QuotationDetails/QuotationDetailsIndex.cshtml");
        }
    }
}