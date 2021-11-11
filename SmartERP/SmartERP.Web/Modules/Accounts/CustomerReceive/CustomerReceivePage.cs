
namespace SmartERP.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerReceiveRow))]
    public class CustomerReceiveController : Controller
    {
        [Route("Accounts/CustomerReceive")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CustomerReceive/CustomerReceiveIndex.cshtml");
        }
    }
}