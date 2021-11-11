
namespace SmartERP.Customers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Customers.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        [HalfWidth]
        public String Name { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        [HalfWidth]
        public Int64 CountryId { get; set; }
        [HalfWidth]
        public Int64 StateId { get; set; }
        [HalfWidth]
        public Int64 CityId { get; set; }
        [QuarterWidth]
        public Int64 CustomerGroupId { get; set; }
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
        [HalfWidth,DefaultValue(0)]
        public Double PreviousCreditBalance { get; set; }
        [HalfWidth]
        public String CNIC { get; set; }
        [HalfWidth]
        public String NTN { get; set; }
        [HalfWidth]
        public String STRN { get; set; }
        [HalfWidth]
        public Int64 SalesMan { get; set; }
        [HalfWidth]
        public Int64 OrderBooker { get; set; }
        [HalfWidth]
        public String Vat { get; set; }
    }
}