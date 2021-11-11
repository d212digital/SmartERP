
namespace SmartERP.Services.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Services.Services")]
    [BasedOnRow(typeof(Entities.ServicesRow), CheckNames = true)]
    public class ServicesForm
    {
        public String ServiceName { get; set; }
        public Double Charge { get; set; }
        public String Description { get; set; }
        public Double Tax { get; set; }
    }
}