
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesForm
    {
        public String CompanyName { get; set; }
        public String CompanyEmail { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public Int64 CurrencyId { get; set; }
        [QuarterWidth]
        public Double VatPercentage { get; set; }
        [QuarterWidth]
        public String Vat { get; set; }
        [QuarterWidth]
        public Int32 VatType { get; set; }
       
        public String Logo { get; set; }
        public String SaleLogo { get; set; }
        public String Favicon { get; set; }
        public Int32 CurrencyPosition { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String FooterText { get; set; }
    }
}