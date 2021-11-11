
namespace SmartERP.Masters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Masters.SupplierGroups")]
    [BasedOnRow(typeof(Entities.SupplierGroupsRow), CheckNames = true)]
    public class SupplierGroupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}