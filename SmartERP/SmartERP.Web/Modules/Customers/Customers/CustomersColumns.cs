
namespace SmartERP.Customers.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Customers.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }

        //public double CustomerReceivable { get; set; }
        //public double CustomerReceived { get; set; }
        //public double CustomerBalance { get; set; }
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String Address { get; set; }
        [QuickFilter]
        public String RegionName { get; set; }
        [QuickFilter]
        public String CustomerGroupName { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public String Website { get; set; }
        public String Email { get; set; }
        public String EmailAddress { get; set; }
        public Double PreviousCreditBalance { get; set; }

        public String CNIC { get; set; }

        public String NTN { get; set; }

        public String STRN { get; set; }

        public Int64 SalesMan { get; set; }
        public Int64 OrderBooker { get; set; }
    }
}