
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.States")]
    [BasedOnRow(typeof(Entities.StatesRow), CheckNames = true)]
    public class StatesForm
    {
        public String Name { get; set; }
        public Int64 CountryId { get; set; }
    }
}