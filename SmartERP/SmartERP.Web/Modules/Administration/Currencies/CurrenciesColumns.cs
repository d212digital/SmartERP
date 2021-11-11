
namespace SmartERP.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String CurrencyName { get; set; }
        public String CurrencySymbol { get; set; }
    }
}