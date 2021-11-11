
namespace SmartERP.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [FormScript("Accounts.BankTransactions")]
    [BasedOnRow(typeof(Entities.BankTransactionsRow), CheckNames = true)]
    public class BankTransactionsForm
    {
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        [DefaultValue(AccountKind.Credit)]
        public AccountKind AccountType { get; set; }
        public String VNo { get; set; }
        //public String Vtype { get; set; }
        
        public Int64 CoaId { get; set; }
        [DisplayName("Amount"),DefaultValue(0)]
        public Double Credit { get; set; }
        //public String Coa { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String Narration { get; set; }
        //public Double Debit { get; set; }
        
        //public Boolean IsPosted { get; set; }
        //public Boolean IsAppove { get; set; }
        //public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
    }
}