
namespace SmartERP.Expenses.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExpensesRow))]
    public class ExpensesController : Controller
    {
        [Route("Expenses/Expenses")]
        public ActionResult Index()
        {
            return View("~/Modules/Expenses/Expenses/ExpensesIndex.cshtml");
        }
    }
}