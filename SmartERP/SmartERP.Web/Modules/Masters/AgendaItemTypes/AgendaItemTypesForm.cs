
namespace SmartERP.Masters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Masters.AgendaItemTypes")]
    [BasedOnRow(typeof(Entities.AgendaItemTypesRow), CheckNames = true)]
    public class AgendaItemTypesForm
    {
        public String Name { get; set; }
    }
}