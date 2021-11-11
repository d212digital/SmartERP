
namespace SmartERP.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        public String CompanyEmail { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String CurrencyCurrencyName { get; set; }
        public Double VatPercentage { get; set; }
        public String Logo { get; set; }
        public String SaleLogo { get; set; }
        public String Favicon { get; set; }
        public Int32 CurrencyPosition { get; set; }
        public String FooterText { get; set; }
    }
}