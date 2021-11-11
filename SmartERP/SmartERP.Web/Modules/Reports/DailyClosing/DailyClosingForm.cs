
namespace SmartERP.Reports.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Reports.DailyClosing")]
    [BasedOnRow(typeof(Entities.DailyClosingRow), CheckNames = true)]
    public class DailyClosingForm
    {
        [DefaultValue("now")]
        [ReadOnly(true)]
        public DateTime Date { get; set; }
        [Hidden]
        public Double LastDayClosing { get; set; }
        [ReadOnly(true)]
        public Double CashIn { get; set; }
        [ReadOnly(true)]
        public Double CashOut { get; set; }
        [ReadOnly(true)]
        public Double Amount { get; set; }
       
    }
}