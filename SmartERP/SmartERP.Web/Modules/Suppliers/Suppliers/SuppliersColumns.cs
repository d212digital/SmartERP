
namespace SmartERP.Suppliers.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Suppliers.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String CompanyName { get; set; }

        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public String Address { get; set; }
        [QuickFilter]
        public String RegionName { get; set; }
        [QuickFilter]
        public String SupplierGroupName { get; set; }
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
        
        public Int64 OrderBooker { get; set; }
    }
}