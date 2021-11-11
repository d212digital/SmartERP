
namespace SmartERP.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Shippers")]
    [BasedOnRow(typeof(Entities.ShippersRow), CheckNames = true)]
    public class ShippersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        public String Phone { get; set; }
    }
}