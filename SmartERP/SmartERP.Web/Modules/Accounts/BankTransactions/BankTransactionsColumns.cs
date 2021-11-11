
namespace SmartERP.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.BankTransactions")]
    [BasedOnRow(typeof(Entities.BankTransactionsRow), CheckNames = true)]
    public class BankTransactionsColumns
    {
        [ DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }      
        public String VNo { get; set; }
        [QuickFilter]
        public String Vtype { get; set; }
        [QuickFilter]
        public DateTime VDate { get; set; }       
        public String CoaHeadName { get; set; }
        [QuickFilter]
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