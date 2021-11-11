
namespace SmartERP.Services.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ServicesRow))]
    public class ServicesController : Controller
    {
        [Route("Services/Services")]
        public ActionResult Index()
        {
            return View("~/Modules/Services/Services/ServicesIndex.cshtml");
        }
    }
}