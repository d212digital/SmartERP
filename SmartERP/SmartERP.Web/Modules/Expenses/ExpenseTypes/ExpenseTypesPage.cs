
namespace SmartERP.Expenses.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExpenseTypesRow))]
    public class ExpenseTypesController : Controller
    {
        [Route("Expenses/ExpenseTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Expenses/ExpenseTypes/ExpenseTypesIndex.cshtml");
        }
    }
}