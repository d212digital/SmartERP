
namespace SmartERP.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.DebitVoucher")]
    [BasedOnRow(typeof(Entities.DebitVoucherRow), CheckNames = true)]
    public class DebitVoucherColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }       
        public String VNo { get; set; }
        public String Vtype { get; set; }
        public DateTime VDate { get; set; }
        public String CoaHeadName { get; set; }
        public String Coa { get; set; }
        public String Narration { get; set; }
        public Double Debit { get; set; }
        public Double Credit { get; set; }
        //public Boolean IsPosted { get; set; }
        //public Boolean IsAppove { get; set; }
        //public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
    }
}