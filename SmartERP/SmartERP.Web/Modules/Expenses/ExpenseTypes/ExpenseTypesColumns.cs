
namespace SmartERP.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.ExpenseTypes")]
    [BasedOnRow(typeof(Entities.ExpenseTypesRow), CheckNames = true)]
    public class ExpenseTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Type { get; set; }
    }
}