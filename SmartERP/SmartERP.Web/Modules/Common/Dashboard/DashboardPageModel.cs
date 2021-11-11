
using SmartERP.Administration.Entities;
using SmartERP.Products.Entities;
using SmartERP.Sales.Entities;
using System;
using System.Collections.Generic;

namespace SmartERP.Common
{
    public class DashboardPageModel
    {
        public double TodaySale { get; set; }
        public int CustomerCount { get; set; }
        public int SupplierCount { get; set; }
        public int ProductCount { get; set; }

        public string SaleYearly { get; set; }
        public string PurchaseYearly { get; set; }
        public string LabelsExpenseYearly { get; set; }
        public string ExpenseYearly { get; set; }

        public string LabelsMonthly { get; set; }
        public string SaleMonthly { get; set; }
        public string PurchaseMonthly { get; set; }
        public string ExpenseMonthly { get; set; }


        public string ExpenseStatementLabels { get; set; }
        public string ExpenseStatementData { get; set; }
        public string ExpenseStatementColors { get; set; }




        public string BestSaleProductData { get; set; }
        public string BestSaleProductLables { get; set; }
        public List<SaleDetailsRow> LatestSales { get; set; }

        public List<ProductsRow> LatestProducts { get; set; }

        public CompaniesRow Company { get; set; }
    }
    public class BestSaleProduct {        
        public string Name { get; set; }
        public double Qty { get; set; }
    }
}