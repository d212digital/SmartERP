
namespace SmartERP.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.ContraVoucher")]
    [BasedOnRow(typeof(Entities.ContraVoucherRow), CheckNames = true)]
    public class ContraVoucherForm
    {
        //public String VNo { get; set; }
        //public String Vtype { get; set; }
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int64 CoaId { get; set; }
        //public String Coa { get; set; }
       
        [HalfWidth]
        [DefaultValue(0)]
        public Double Debit { get; set; }
        [HalfWidth]
        [DefaultValue(0)]
        public Double Credit { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
        //public Boolean IsPosted { get; set; }
        //public Boolean IsAppove { get; set; }
        //public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
    }
}