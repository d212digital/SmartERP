
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerGroupsRow))]
    public class CustomerGroupsController : Controller
    {
        [Route("Masters/CustomerGroups")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/CustomerGroups/CustomerGroupsIndex.cshtml");
        }
    }
}