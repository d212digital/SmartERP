
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Warehouses")]
    [BasedOnRow(typeof(Entities.WarehousesRow), CheckNames = true)]
    public class WarehousesForm
    {
        public String Name { get; set; }
        [QuarterWidth(UntilNext =true)]
        public Int64 CountryId { get; set; }
        public Int64 StateId { get; set; }
        public Int64 CityId { get; set; }
        public String Phone { get; set; }
        [FullWidth]
        [TextAreaEditor]
        public String Address { get; set; }
        [FullWidth]
        [TextAreaEditor]
        public String Description { get; set; }
    }
}