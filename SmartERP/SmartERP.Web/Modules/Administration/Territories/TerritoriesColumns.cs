
namespace SmartERP.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Territories")]
    [BasedOnRow(typeof(Entities.TerritoriesRow), CheckNames = true)]
    public class TerritoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String TerritoryDescription { get; set; }
        public String RegionName { get; set; }
    }
}