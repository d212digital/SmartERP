
namespace SmartERP.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Territories")]
    [BasedOnRow(typeof(Entities.TerritoriesRow), CheckNames = true)]
    public class TerritoriesForm
    {
        public String TerritoryDescription { get; set; }
        public Int64 RegionId { get; set; }
    }
}