
namespace SmartERP.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsForm
    {
        [HalfWidth(UntilNext = true)]
        public String HeadName { get; set; }
        [ReadOnly(true),IntegerEditor]
        public Int64 HeadCode { get; set; }
        
        public Int64 ParentHead { get; set; }
        [ReadOnly(true)]
        public String PHeadName { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Int32 HeadLevel { get; set; }
        [ReadOnly(true)]
        public String HeadType { get; set; }
        public Boolean IsTransaction { get; set; }
        public Boolean IsGl { get; set; }
        //public Boolean IsBudget { get; set; }
        //public Boolean IsDepreciation { get; set; }
        //public Int64 CustomerId { get; set; }
        //public Int64 SupplierId { get; set; }
        //public Double DepreciationRate { get; set; }
    }
}