
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AgendaItemTypesRow))]
    public class AgendaItemTypesController : Controller
    {
        [Route("Masters/AgendaItemTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/AgendaItemTypes/AgendaItemTypesIndex.cshtml");
        }
    }
}