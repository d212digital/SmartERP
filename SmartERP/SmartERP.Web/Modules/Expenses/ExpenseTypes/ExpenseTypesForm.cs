
namespace SmartERP.Expenses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Expenses.ExpenseTypes")]
    [BasedOnRow(typeof(Entities.ExpenseTypesRow), CheckNames = true)]
    public class ExpenseTypesForm
    {
        public String Type { get; set; }
    }
}