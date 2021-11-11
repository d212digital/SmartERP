
namespace SmartERP.Suppliers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Suppliers.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersForm
    {
        [HalfWidth]
        public String CompanyName { get; set; }
        [HalfWidth]
        public Int64 CountryId { get; set; }
        [HalfWidth]
        public Int64 StateId { get; set; }
        [HalfWidth]
        public Int64 CityId { get; set; }
       
       
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
       
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public Int64 SupplierGroupId { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [FullWidth]
        public String Address { get; set; }
        [HalfWidth]
        public Int64 RegionId { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        [HalfWidth]
        public String Website { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public String Fax { get; set; }
       
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String EmailAddress { get; set; }
        [HalfWidth, DefaultValue(0)]
        public Double PreviousCreditBalance { get; set; }

        [HalfWidth]
        public String CNIC { get; set; }
        [HalfWidth]
        public String NTN { get; set; }
        [HalfWidth]
        public String STRN { get; set; }
        [HalfWidth]
        public Int64 OrderBooker { get; set; }
        [HalfWidth]
        public String Vat { get; set; }
    }
}