
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ResolutionStatusesRow))]
    public class ResolutionStatusesController : Controller
    {
        [Route("Masters/ResolutionStatuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/ResolutionStatuses/ResolutionStatusesIndex.cshtml");
        }
    }
}