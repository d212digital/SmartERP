namespace SmartERP.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using SmartERP.Accounts.Entities;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [LookupScript]
    public class AccountsCashLookup : RowLookupScript<AccountsRow>
    {
       
        public AccountsCashLookup(ISqlConnections sqlConnections)
           : base(sqlConnections)
        {
            IdField = AccountsRow.Fields.Id.PropertyName;
            TextField = AccountsRow.Fields.HeadName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AccountsRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Select(fld.HeadName)
                .Select(fld.ParentHead)
                .Select(fld.PHeadName)
                .Where(
                    //new Criteria(fld.HeadCode).StartsWith("1020203") &
                    //new Criteria(fld.HeadCode)!= 1020203 &
                    new Criteria(fld.IsActive) == 1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
        protected override List<AccountsRow> GetItems()
        {

            List<AccountsRow> items = (List<AccountsRow>)base.GetItems();
            var resultRows = new List<AccountsRow>();
            foreach (var item in items)
            {
                //if (item.HeadName.ToLower() == "Cash In Hand".ToLower() || item.PHeadName.ToLower() == "Cash At Bank".ToLower())
                //{
                //    resultRows.Add(item);
                //}
                //if ((item.HeadName.Contains("Cash") || item.HeadName.Contains("Card")) && !item.HeadName.Contains("Equivalent"))
                if (item.PHeadName.ToLower() == "Cash & Cash Equivalent".ToLower())
                {
                    resultRows.Add(item);
                }
            }
            return resultRows;
        }


    }
}