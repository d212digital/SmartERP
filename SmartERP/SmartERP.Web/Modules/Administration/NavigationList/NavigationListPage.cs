using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Administration.Pages
{

    [PageAuthorize(typeof(NavigationListRow))]
    public class NavigationListController : Controller
    {
        [Route("Administration/NavigationList")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/NavigationList/NavigationListIndex.cshtml");
        }
    }
}