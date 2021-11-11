
namespace SmartERP.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 Id { get; set; }
        [EditLink,Width(100)]
        public Int64 HeadCode { get; set; }
        [Width(450)]
        public String HeadName { get; set; }
        //public Int64 ParentHeadHeadCode { get; set; }
        //public String PHeadName { get; set; }
        //public Int32 HeadLevel { get; set; }
        //public String HeadType { get; set; }
        //public Boolean IsTransaction { get; set; }
        //public Boolean IsGl { get; set; }
        //public Boolean IsBudget { get; set; }
        //public Boolean IsDepreciation { get; set; }
        //public String CustomerName { get; set; }
        //public String SupplierCompanyName { get; set; }
        //public Double DepreciationRate { get; set; }
        [Width(150)]
        public Double OpeningBalance { get; set; }
        [Width(100)]
        public Double Balance { get; set; }
    }
}