
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.Locations")]
    [BasedOnRow(typeof(Entities.LocationsRow), CheckNames = true)]
    public class LocationsForm
    {
        public String Name { get; set; }
        public Int64 CountryId { get; set; }
        public Int64 StateId { get; set; }
        public Int64 CityId { get; set; }
        public String Address { get; set; }
        public String Latitude { get; set; }
        public String Longitude { get; set; }
    }
}