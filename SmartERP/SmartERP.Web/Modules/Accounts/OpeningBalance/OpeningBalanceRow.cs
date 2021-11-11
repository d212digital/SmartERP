
namespace SmartERP.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[Transactions]")]
    [DisplayName("Opening Balance"), InstanceName("Opening Balance")]
    [ReadPermission(Financial.PermissionKeys.OpeningBalance)]
    [ModifyPermission(Financial.PermissionKeys.OpeningBalance)]
    public sealed class OpeningBalanceRow : Row<OpeningBalanceRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("V No"), Size(50), QuickSearch,NameProperty]
        public String VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Vtype"), Size(50)]
        public String Vtype
        {
            get { return Fields.Vtype[this]; }
            set { Fields.Vtype[this] = value; }
        }

        [DisplayName("V Date"), NotNull]
        public DateTime? VDate
        {
            get { return Fields.VDate[this]; }
            set { Fields.VDate[this] = value; }
        }
        [DisplayName("Balance Type"), NotMapped, NotNull]
        public AccountKind? AccountType
        {
            get { return (AccountKind?)Fields.AccountType[this]; }
            set { Fields.AccountType[this] = (Int32)value; }
        }
        [DisplayName("Account Head"), Column("COAId"), NotNull,PrimaryKey, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCoa"), TextualField("CoaHeadName")]
        [LookupInclude, LookupEditor(typeof(Lookups.AccountsLookup), AutoComplete = true)]
        public Int64? CoaId
        {
            get { return Fields.CoaId[this]; }
            set { Fields.CoaId[this] = value; }
        }

        [DisplayName("Coa"), Column("COA"), Size(50)]
        public String Coa
        {
            get { return Fields.Coa[this]; }
            set { Fields.Coa[this] = value; }
        }

        [DisplayName("Narration"), Size(2147483647), NotNull]
        public String Narration
        {
            get { return Fields.Narration[this]; }
            set { Fields.Narration[this] = value; }
        }

        [DisplayName("Debit"), NotNull]
        public Double? Debit
        {
            get { return Fields.Debit[this]; }
            set { Fields.Debit[this] = value; }
        }

        [DisplayName("Credit")]
        public Double? Credit
        {
            get { return Fields.Credit[this]; }
            set { Fields.Credit[this] = value; }
        }

        [DisplayName("Is Posted")]
        public Boolean? IsPosted
        {
            get { return Fields.IsPosted[this]; }
            set { Fields.IsPosted[this] = value; }
        }

        [DisplayName("Is Appove")]
        public Boolean? IsAppove
        {
            get { return Fields.IsAppove[this]; }
            set { Fields.IsAppove[this] = value; }
        }

        [DisplayName("Is Opening")]
        public Boolean? IsOpening
        {
            get { return Fields.IsOpening[this]; }
            set { Fields.IsOpening[this] = value; }
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Coa Head Code"), Expression("jCoa.[HeadCode]")]
        public Int64? CoaHeadCode
        {
            get { return Fields.CoaHeadCode[this]; }
            set { Fields.CoaHeadCode[this] = value; }
        }

        [DisplayName("Coa Head Name"), Expression("jCoa.[HeadName]")]
        public String CoaHeadName
        {
            get { return Fields.CoaHeadName[this]; }
            set { Fields.CoaHeadName[this] = value; }
        }

        [DisplayName("Coa Parent Head"), Expression("jCoa.[ParentHead]")]
        public Int64? CoaParentHead
        {
            get { return Fields.CoaParentHead[this]; }
            set { Fields.CoaParentHead[this] = value; }
        }

        [DisplayName("Coa P Head Name"), Expression("jCoa.[PHeadName]")]
        public String CoaPHeadName
        {
            get { return Fields.CoaPHeadName[this]; }
            set { Fields.CoaPHeadName[this] = value; }
        }

        [DisplayName("Coa Head Level"), Expression("jCoa.[HeadLevel]")]
        public Int32? CoaHeadLevel
        {
            get { return Fields.CoaHeadLevel[this]; }
            set { Fields.CoaHeadLevel[this] = value; }
        }

        [DisplayName("Coa Head Type"), Expression("jCoa.[HeadType]")]
        public String CoaHeadType
        {
            get { return Fields.CoaHeadType[this]; }
            set { Fields.CoaHeadType[this] = value; }
        }

        [DisplayName("Coa Is Transaction"), Expression("jCoa.[IsTransaction]")]
        public Boolean? CoaIsTransaction
        {
            get { return Fields.CoaIsTransaction[this]; }
            set { Fields.CoaIsTransaction[this] = value; }
        }

        [DisplayName("Coa Is Gl"), Expression("jCoa.[IsGL]")]
        public Boolean? CoaIsGl
        {
            get { return Fields.CoaIsGl[this]; }
            set { Fields.CoaIsGl[this] = value; }
        }

        [DisplayName("Coa Is Budget"), Expression("jCoa.[IsBudget]")]
        public Boolean? CoaIsBudget
        {
            get { return Fields.CoaIsBudget[this]; }
            set { Fields.CoaIsBudget[this] = value; }
        }

        [DisplayName("Coa Is Depreciation"), Expression("jCoa.[IsDepreciation]")]
        public Boolean? CoaIsDepreciation
        {
            get { return Fields.CoaIsDepreciation[this]; }
            set { Fields.CoaIsDepreciation[this] = value; }
        }

        [DisplayName("Coa Customer Id"), Expression("jCoa.[CustomerId]")]
        public Int64? CoaCustomerId
        {
            get { return Fields.CoaCustomerId[this]; }
            set { Fields.CoaCustomerId[this] = value; }
        }

        [DisplayName("Coa Supplier Id"), Expression("jCoa.[SupplierId]")]
        public Int64? CoaSupplierId
        {
            get { return Fields.CoaSupplierId[this]; }
            set { Fields.CoaSupplierId[this] = value; }
        }

        [DisplayName("Coa Depreciation Rate"), Expression("jCoa.[DepreciationRate]")]
        public Double? CoaDepreciationRate
        {
            get { return Fields.CoaDepreciationRate[this]; }
            set { Fields.CoaDepreciationRate[this] = value; }
        }

        [DisplayName("Coa Insert Date"), Expression("jCoa.[InsertDate]")]
        public DateTime? CoaInsertDate
        {
            get { return Fields.CoaInsertDate[this]; }
            set { Fields.CoaInsertDate[this] = value; }
        }

        [DisplayName("Coa Insert User Id"), Expression("jCoa.[InsertUserId]")]
        public Int32? CoaInsertUserId
        {
            get { return Fields.CoaInsertUserId[this]; }
            set { Fields.CoaInsertUserId[this] = value; }
        }

        [DisplayName("Coa Update Date"), Expression("jCoa.[UpdateDate]")]
        public DateTime? CoaUpdateDate
        {
            get { return Fields.CoaUpdateDate[this]; }
            set { Fields.CoaUpdateDate[this] = value; }
        }

        [DisplayName("Coa Update User Id"), Expression("jCoa.[UpdateUserId]")]
        public Int32? CoaUpdateUserId
        {
            get { return Fields.CoaUpdateUserId[this]; }
            set { Fields.CoaUpdateUserId[this] = value; }
        }

        [DisplayName("Coa Delete Date"), Expression("jCoa.[DeleteDate]")]
        public DateTime? CoaDeleteDate
        {
            get { return Fields.CoaDeleteDate[this]; }
            set { Fields.CoaDeleteDate[this] = value; }
        }

        [DisplayName("Coa Delete User Id"), Expression("jCoa.[DeleteUserId]")]
        public Int32? CoaDeleteUserId
        {
            get { return Fields.CoaDeleteUserId[this]; }
            set { Fields.CoaDeleteUserId[this] = value; }
        }

        [DisplayName("Coa Is Active"), Expression("jCoa.[IsActive]")]
        public Int32? CoaIsActive
        {
            get { return Fields.CoaIsActive[this]; }
            set { Fields.CoaIsActive[this] = value; }
        }

        [DisplayName("Coa Employee Id"), Expression("jCoa.[EmployeeId]")]
        public Int64? CoaEmployeeId
        {
            get { return Fields.CoaEmployeeId[this]; }
            set { Fields.CoaEmployeeId[this] = value; }
        }

        [DisplayName("Coa Expense Type Id"), Expression("jCoa.[ExpenseTypeId]")]
        public Int64? CoaExpenseTypeId
        {
            get { return Fields.CoaExpenseTypeId[this]; }
            set { Fields.CoaExpenseTypeId[this] = value; }
        }

        [DisplayName("Coa Bank Id"), Expression("jCoa.[BankId]")]
        public Int64? CoaBankId
        {
            get { return Fields.CoaBankId[this]; }
            set { Fields.CoaBankId[this] = value; }
        }

        public OpeningBalanceRow()
        {
        }

        public OpeningBalanceRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField VNo;
            public StringField Vtype;
            public DateTimeField VDate;
            public Int32Field AccountType;
            public Int64Field CoaId;
            public StringField Coa;
            public StringField Narration;
            public DoubleField Debit;
            public DoubleField Credit;
            public BooleanField IsPosted;
            public BooleanField IsAppove;
            public BooleanField IsOpening;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;

            public Int64Field CoaHeadCode;
            public StringField CoaHeadName;
            public Int64Field CoaParentHead;
            public StringField CoaPHeadName;
            public Int32Field CoaHeadLevel;
            public StringField CoaHeadType;
            public BooleanField CoaIsTransaction;
            public BooleanField CoaIsGl;
            public BooleanField CoaIsBudget;
            public BooleanField CoaIsDepreciation;
            public Int64Field CoaCustomerId;
            public Int64Field CoaSupplierId;
            public DoubleField CoaDepreciationRate;
            public DateTimeField CoaInsertDate;
            public Int32Field CoaInsertUserId;
            public DateTimeField CoaUpdateDate;
            public Int32Field CoaUpdateUserId;
            public DateTimeField CoaDeleteDate;
            public Int32Field CoaDeleteUserId;
            public Int32Field CoaIsActive;
            public Int64Field CoaEmployeeId;
            public Int64Field CoaExpenseTypeId;
            public Int64Field CoaBankId;
        }
    }
}
