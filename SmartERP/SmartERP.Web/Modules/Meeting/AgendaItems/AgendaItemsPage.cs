
namespace SmartERP.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AgendaItemsRow))]
    public class AgendaItemsController : Controller
    {
        [Route("Meeting/AgendaItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/AgendaItems/AgendaItemsIndex.cshtml");
        }
    }
}