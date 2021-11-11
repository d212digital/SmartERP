
namespace SmartERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.GoodsIssueRow))]
    public class GoodsIssueController : Controller
    {
        [Route("Inventory/GoodsIssue")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsIssue/GoodsIssueIndex.cshtml");
        }
    }
}