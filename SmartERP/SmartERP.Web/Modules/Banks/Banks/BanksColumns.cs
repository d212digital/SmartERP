
namespace SmartERP.Banks.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Banks.Banks")]
    [BasedOnRow(typeof(Entities.BanksRow), CheckNames = true)]
    public class BanksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String BankName { get; set; }
        public String AcName { get; set; }
        public String AcNumber { get; set; }
        public String Branch { get; set; }
        //public String SignaturePicture { get; set; }
    }
}