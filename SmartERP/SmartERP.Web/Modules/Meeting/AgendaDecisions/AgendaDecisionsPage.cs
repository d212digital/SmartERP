
namespace SmartERP.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AgendaDecisionsRow))]
    public class AgendaDecisionsController : Controller
    {
        [Route("Meeting/AgendaDecisions")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/AgendaDecisions/AgendaDecisionsIndex.cshtml");
        }
    }
}