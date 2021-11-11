
namespace SmartERP.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using SmartERP.Reports.Entities;
    using System;
    using Serenity.Abstractions;

    [PageAuthorize(typeof(Entities.DailyClosingRow))]
    [ReadPermission(SmartERP.Reports.PermissionKeys.Reports.DayClosing)]
    public class CloseDayController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public CloseDayController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));

        }

        [Route("Reports/DayClosing/")]
        public ActionResult Index()
        {
            var data = new CloseDayData();

            using (var connection = SqlConnections.NewFor<DailyClosingRow>())
            {
                var o = DailyClosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyClosingRow>(q=>q.SelectTableFields().Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.TodayCashOut).Select(o.LastClosingDate).Where(o.Id>0)) ?? new DailyClosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date==DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
            }
            return View("~/Modules/Reports/DailyClosing/CloseDayIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/DayClosing")]
        public ActionResult CloseDay()
        {
            var data = new CloseDayData();
            using (var connection = SqlConnections.NewFor<DailyClosingRow>())
            {
                UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
                //var user = (UserDefinition)Authorization.UserDefinition;
                var o = DailyClosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyClosingRow>(q => q.SelectTableFields().Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.LastClosingDate).Select(o.TodayCashOut).Where(o.Id > 0)) ?? new DailyClosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date == DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
                if (data.Enabled==true)
                {
                    new SqlInsert(DailyClosingRow.Fields.TableName)
                       .Set(DailyClosingRow.Fields.LastDayClosing.PropertyName, data.LastDayClosing)
                       .Set(DailyClosingRow.Fields.CashIn.PropertyName, data.Receive)
                       .Set(DailyClosingRow.Fields.CashOut.PropertyName, data.Payment)
                       .Set(DailyClosingRow.Fields.Amount.PropertyName, data.Balance)
                       .Set(DailyClosingRow.Fields.Status.PropertyName, 1)
                       .Set(DailyClosingRow.Fields.Date.PropertyName, DateTime.Now)
                       .Set(DailyClosingRow.Fields.Adjustment.PropertyName, 0)
                       .Set(DailyClosingRow.Fields.InsertDate.PropertyName, DateTime.Now)
                       .Set(DailyClosingRow.Fields.InsertUserId.PropertyName, user.UserId)
                   .Execute(connection);
                }
               
            }
            data = new CloseDayData();

            using (var connection = SqlConnections.NewFor<DailyClosingRow>())
            {
                var o = DailyClosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyClosingRow>(q => q.SelectTableFields().Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.TodayCashOut).Select(o.LastClosingDate).Where(o.Id > 0)) ?? new DailyClosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date == DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
            }
            return View("~/Modules/Reports/DailyClosing/CloseDayIndex.cshtml", data);
        }
    }
    public class CloseDayData
    {
        public double LastDayClosing { get; set; }
        public double Receive { get; set; }
        public double Payment { get; set; }
        public double Balance { get; set; }

        public bool Enabled { get; set; }

    }
}