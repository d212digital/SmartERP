
namespace SmartERP.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using Serenity.Data;
    using SmartERP.Administration.Entities;

    [PageAuthorize(typeof(CompaniesRow))]
    public class CompaniesController : Controller
    {
        protected ISqlConnections SqlConnections { get; }

        public CompaniesController(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;

        }

        [Route("Administration/Companies")]
        public ActionResult Index()
        {
            Int64? model = null;
            using (var connection = SqlConnections.NewFor<CompaniesRow>())
            {
                var list = connection.List<CompaniesRow>();
                if (list.Count > 0)
                {
                    model = list[0].Id;
                }
            }
            return View("~/Modules/Administration/Companies/CompaniesIndex.cshtml", model);
        }
    }
}
