
namespace SmartERP.Expenses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Expenses"), TableName("[dbo].[Expenses]")]
    [DisplayName("Expenses"), InstanceName("Expenses")]
    [ReadPermission(CashBank.PermissionKeys.Expenses.View)]
    [InsertPermission(CashBank.PermissionKeys.Expenses.Create)]
    [UpdatePermission(CashBank.PermissionKeys.Expenses.Update)]
    [DeletePermission(CashBank.PermissionKeys.Expenses.Delete)]
    [LookupScript("Expenses.Expenses", Permission = CashBank.PermissionKeys.Expenses.View)]
    public sealed class ExpensesRow : SmartERP.LoggingRow<ExpensesRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Expense Type"), NotNull, ForeignKey("[dbo].[ExpenseTypes]", "Id"), LeftJoin("jExpenseType"), TextualField("ExpenseTypeType")]
        [LookupEditor(typeof(ExpenseTypesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Expenses.ExpenseTypes")]
        public Int64? ExpenseTypeId
        {
            get { return Fields.ExpenseTypeId[this]; }
            set { Fields.ExpenseTypeId[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Payment Account"), NotNull, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jParentHead"), TextualField("HeadCodeName")]
        [LookupInclude, LookupEditor(typeof(Lookups.AccountsCashLookup), AutoComplete = true)]
        public Int64? PaymentAccount
        {
            get { return Fields.PaymentAccount[this]; }
            set { Fields.PaymentAccount[this] = value; }
        }
        [Expression("(Convert(nvarchar(100),jParentHead.[HeadCode]) + ' ' + jParentHead.[HeadName])")]
        public string HeadCodeName
        {
            get { return Fields.HeadCodeName[this]; }
            set { Fields.HeadCodeName[this] = value; }
        }

        [DisplayName("Amount"), NotNull]
        public Double? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }
        [DisplayName("VNo"),Hidden]
        public Int64? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }
        [DisplayName("Expense Type Type"), Expression("jExpenseType.[Type]")]
        public String ExpenseTypeType
        {
            get { return Fields.ExpenseTypeType[this]; }
            set { Fields.ExpenseTypeType[this] = value; }
        }

        public ExpensesRow()
        {
        }

        public ExpensesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field ExpenseTypeId;
            public Int64Field VNo;
            public DateTimeField Date;
            public Int64Field PaymentAccount;            
            public DoubleField Amount;

            public StringField ExpenseTypeType;
            public StringField HeadCodeName;
        }
    }
}
