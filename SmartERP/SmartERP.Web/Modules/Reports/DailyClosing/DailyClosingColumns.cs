
namespace SmartERP.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.DailyClosing")]
    [BasedOnRow(typeof(Entities.DailyClosingRow), CheckNames = true)]
    public class DailyClosingColumns
    {
       
        public DateTime Date { get; set; }
        [Width(200)]
        public Double LastDayClosing { get; set; }
        public Double CashIn { get; set; }
        public Double CashOut { get; set; }
       
        public Double Amount { get; set; }

    }
}