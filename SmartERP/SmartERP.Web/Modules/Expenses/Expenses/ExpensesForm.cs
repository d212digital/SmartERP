
namespace SmartERP.Expenses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesForm
    {
        public Int64 ExpenseTypeId { get; set; }
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        public Int64 PaymentAccount { get; set; }        
        public Double Amount { get; set; }
    }
}