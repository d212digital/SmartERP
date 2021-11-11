
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ShippersRow))]
    public class ShippersController : Controller
    {
        [Route("Administration/Shippers")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Shippers/ShippersIndex.cshtml");
        }
    }
}