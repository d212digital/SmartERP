
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesForm
    {
        public String CurrencyName { get; set; }
        public String CurrencySymbol { get; set; }
    }
}