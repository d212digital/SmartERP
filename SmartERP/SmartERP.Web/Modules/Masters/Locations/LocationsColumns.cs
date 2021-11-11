
namespace SmartERP.Masters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Masters.Locations")]
    [BasedOnRow(typeof(Entities.LocationsRow), CheckNames = true)]
    public class LocationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String Address { get; set; }
        public String Latitude { get; set; }
        public String Longitude { get; set; }
    }
}