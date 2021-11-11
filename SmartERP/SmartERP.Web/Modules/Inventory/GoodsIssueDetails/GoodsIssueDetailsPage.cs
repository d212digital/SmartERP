
namespace SmartERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.GoodsIssueDetailsRow))]
    public class GoodsIssueDetailsController : Controller
    {
        [Route("Inventory/GoodsIssueDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsIssueDetails/GoodsIssueDetailsIndex.cshtml");
        }
    }
}