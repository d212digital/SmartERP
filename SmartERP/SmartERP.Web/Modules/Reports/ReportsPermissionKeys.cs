
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Reports
{
    [NestedPermissionKeys]
    [DisplayName("Reports")]
    public class PermissionKeys
    {        
        
        [DisplayName("Reports")]
        public class Reports
        {
            public const string DayClosing = "Report:Day Closing";
            public const string TodaysReport = "Report:Today's Report";
            public const string DailyClosingReport = "Report:Daily Closing Report";
            public const string StockReport = "Report:Stock Report";
            public const string SaleReport = "Report:Sale Report";
            public const string ProductWiseSaleReport = "Report:Product Wise Sale Report";
            public const string PurchaseReport = "Report:Purchase Report";
            public const string CustomerReceivableReport = "Report:Customer Receivable Report";
            public const string SupplierPayableReport = "Report:Supplier Payable Report";
            public const string ProfitReport = "Report:Profit Report";
            //public const string StockReport = "Report:StockReport";
            //public const string StockReport = "Report:StockReport";
        }
    }
}
