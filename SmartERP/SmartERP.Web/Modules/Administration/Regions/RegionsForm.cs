
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Regions")]
    [BasedOnRow(typeof(Entities.RegionsRow), CheckNames = true)]
    public class RegionsForm
    {
        public String Name { get; set; }
    }
}