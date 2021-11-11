
namespace SmartERP.HumanResource.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HumanResource.Designations")]
    [BasedOnRow(typeof(Entities.DesignationsRow), CheckNames = true)]
    public class DesignationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Designation { get; set; }
        public String Description { get; set; }
        public String ParentDesignationDesignation { get; set; }
    }
}