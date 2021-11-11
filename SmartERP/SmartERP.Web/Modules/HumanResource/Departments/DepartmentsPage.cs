
namespace SmartERP.HumanResource.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DepartmentsRow))]
    public class DepartmentsController : Controller
    {
        [Route("HumanResource/Departments")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Departments/DepartmentsIndex.cshtml");
        }
    }
}