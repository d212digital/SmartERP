
namespace SmartERP.Masters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierGroupsRow))]
    public class SupplierGroupsController : Controller
    {
        [Route("Masters/SupplierGroups")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/SupplierGroups/SupplierGroupsIndex.cshtml");
        }
    }
}