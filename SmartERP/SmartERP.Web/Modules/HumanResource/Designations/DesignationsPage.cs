
namespace SmartERP.HumanResource.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DesignationsRow))]
    public class DesignationsController : Controller
    {
        [Route("HumanResource/Designations")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Designations/DesignationsIndex.cshtml");
        }
    }
}