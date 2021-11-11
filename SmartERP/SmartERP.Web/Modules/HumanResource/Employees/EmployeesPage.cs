
namespace SmartERP.HumanResource.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        [Route("HumanResource/Employees")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Employees/EmployeesIndex.cshtml");
        }
    }
}