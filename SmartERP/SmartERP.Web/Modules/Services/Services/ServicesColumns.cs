
namespace SmartERP.Services.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Services.Services")]
    [BasedOnRow(typeof(Entities.ServicesRow), CheckNames = true)]
    public class ServicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String ServiceName { get; set; }
        public Double Charge { get; set; }
        public String Description { get; set; }
        public Double Tax { get; set; }
    }
}