
namespace SmartERP.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.OpeningBalance")]
    [BasedOnRow(typeof(Entities.OpeningBalanceRow), CheckNames = true)]
    public class OpeningBalanceForm
    {
        //public String VNo { get; set; }
        //public String Vtype { get; set; }
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int64 CoaId { get; set; }
        [DefaultValue(AccountKind.Debit)]
        public AccountKind AccountType { get; set; }
        //public String Coa { get; set; }
        [DisplayName("Amount")]
        public Double Debit { get; set; }
        //public Double Credit { get; set; }

        [DisplayName("Remark"), TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
        //public Boolean IsPosted { get; set; }
        //public Boolean IsAppove { get; set; }
        //public Boolean IsOpening { get; set; }
        //public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
    }
}