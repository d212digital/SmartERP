
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Cities")]
    [BasedOnRow(typeof(Entities.CitiesRow), CheckNames = true)]
    public class CitiesForm
    {
        public String Name { get; set; }
        public Int64 CountryId { get; set; }
        public Int64 StateId { get; set; }
    }
}