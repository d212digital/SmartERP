
namespace SmartERP.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String ExpenseTypeType { get; set; }
        public DateTime Date { get; set; }
        public Int64 PaymentAccount { get; set; }        
        public Double Amount { get; set; }
    }
}