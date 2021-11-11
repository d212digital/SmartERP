
namespace SmartERP.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[Accounts]")]
    [DisplayName("Accounts"), InstanceName("Accounts")]
    [ReadPermission(Financial.PermissionKeys.Accounts.View)]
    [InsertPermission(Financial.PermissionKeys.Accounts.Create)]
    [UpdatePermission(Financial.PermissionKeys.Accounts.Update)]
    [DeletePermission(Financial.PermissionKeys.Accounts.Delete)]
    //[LookupEditor(typeof(AccountsRow))]
    [LookupScript("Accounts.Accounts", Permission = Financial.PermissionKeys.Accounts.View)]
    public sealed class AccountsRow : SmartERP.LoggingRow<AccountsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty, Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Code"),  NotNull, QuickSearch, LookupInclude]
        [Updatable(false)]
        public Int64? HeadCode
        {
            get { return Fields.HeadCode[this]; }
            set { Fields.HeadCode[this] = value; }
        }

        [DisplayName("Head Name"), Size(100), NotNull, LookupInclude, NameProperty]
        public String HeadName
        {
            get { return Fields.HeadName[this]; }
            set { Fields.HeadName[this] = value; }
        }

        [DisplayName("Parent Head"),PrimaryKey, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jParentHead"), TextualField("ParentHeadHeadName")]
        [Updatable(false)]
        //[LookupInclude, LookupEditor(typeof(AccountsRow))]
        [LookupInclude, AccountsEditor]
        public Int64? ParentHead
        {
            get { return Fields.ParentHead[this]; }
            set { Fields.ParentHead[this] = value; }
        }

        [DisplayName("P Head Name"), Size(100), LookupInclude]
        public String PHeadName
        {
            get { return Fields.PHeadName[this]; }
            set { Fields.PHeadName[this] = value; }
        }
        [Expression("(Convert(nvarchar(100),T0.[HeadCode]) + ' - ' + T0.[HeadName])"), LookupInclude]
        public string HeadCodeName
        {
            get { return Fields.HeadCodeName[this]; }
            set { Fields.HeadCodeName[this] = value; }
        }
        [DisplayName("Head Level"), NotNull, LookupInclude]
        [Updatable(false)]
        public Int32? HeadLevel
        {
            get { return Fields.HeadLevel[this]; }
            set { Fields.HeadLevel[this] = value; }
        }

        [DisplayName("Head Type"), Size(1), NotNull, LookupInclude]
        [Updatable(false)]
        public String HeadType
        {
            get { return Fields.HeadType[this]; }
            set { Fields.HeadType[this] = value; }
        }

        [DisplayName("Is Transaction"), NotNull]
        public Boolean? IsTransaction
        {
            get { return Fields.IsTransaction[this]; }
            set { Fields.IsTransaction[this] = value; }
        }

        [DisplayName("Is Gl"), Column("IsGL"), NotNull]
        public Boolean? IsGl
        {
            get { return Fields.IsGl[this]; }
            set { Fields.IsGl[this] = value; }
        }

        [DisplayName("Is Budget")]
        public Boolean? IsBudget
        {
            get { return Fields.IsBudget[this]; }
            set { Fields.IsBudget[this] = value; }
        }

        [DisplayName("Is Depreciation")]
        public Boolean? IsDepreciation
        {
            get { return Fields.IsDepreciation[this]; }
            set { Fields.IsDepreciation[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        public Int64? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Suppliers]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        public Int64? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Depreciation Rate")]
        public Double? DepreciationRate
        {
            get { return Fields.DepreciationRate[this]; }
            set { Fields.DepreciationRate[this] = value; }
        }

        [DisplayName("Parent Head Head Code"), Expression("jParentHead.[HeadCode]"),LookupInclude]
        public Int64? ParentHeadHeadCode
        {
            get { return Fields.ParentHeadHeadCode[this]; }
            set { Fields.ParentHeadHeadCode[this] = value; }
        }

        [DisplayName("Parent Head Head Name"), Expression("jParentHead.[HeadName]")]
        public String ParentHeadHeadName
        {
            get { return Fields.ParentHeadHeadName[this]; }
            set { Fields.ParentHeadHeadName[this] = value; }
        }

        [DisplayName("Parent Head"), Expression("jParentHead.[ParentHead]")]
        public Int64? ParentHead1
        {
            get { return Fields.ParentHead1[this]; }
            set { Fields.ParentHead1[this] = value; }
        }

        [DisplayName("Parent Head P Head Name"), Expression("jParentHead.[PHeadName]")]
        public String ParentHeadPHeadName
        {
            get { return Fields.ParentHeadPHeadName[this]; }
            set { Fields.ParentHeadPHeadName[this] = value; }
        }

        [DisplayName("Parent Head Head Level"), Expression("jParentHead.[HeadLevel]"), LookupInclude]
        public Int32? ParentHeadHeadLevel
        {
            get { return Fields.ParentHeadHeadLevel[this]; }
            set { Fields.ParentHeadHeadLevel[this] = value; }
        }

        [DisplayName("Parent Head Head Type"), Expression("jParentHead.[HeadType]")]
        public String ParentHeadHeadType
        {
            get { return Fields.ParentHeadHeadType[this]; }
            set { Fields.ParentHeadHeadType[this] = value; }
        }

        [DisplayName("Parent Head Is Transaction"), Expression("jParentHead.[IsTransaction]")]
        public Boolean? ParentHeadIsTransaction
        {
            get { return Fields.ParentHeadIsTransaction[this]; }
            set { Fields.ParentHeadIsTransaction[this] = value; }
        }

        [DisplayName("Parent Head Is Gl"), Expression("jParentHead.[IsGL]")]
        public Boolean? ParentHeadIsGl
        {
            get { return Fields.ParentHeadIsGl[this]; }
            set { Fields.ParentHeadIsGl[this] = value; }
        }

        [DisplayName("Parent Head Is Budget"), Expression("jParentHead.[IsBudget]")]
        public Boolean? ParentHeadIsBudget
        {
            get { return Fields.ParentHeadIsBudget[this]; }
            set { Fields.ParentHeadIsBudget[this] = value; }
        }

        [DisplayName("Parent Head Is Depreciation"), Expression("jParentHead.[IsDepreciation]")]
        public Boolean? ParentHeadIsDepreciation
        {
            get { return Fields.ParentHeadIsDepreciation[this]; }
            set { Fields.ParentHeadIsDepreciation[this] = value; }
        }

        [DisplayName("Parent Head Customer Id"), Expression("jParentHead.[CustomerId]")]
        public Int64? ParentHeadCustomerId
        {
            get { return Fields.ParentHeadCustomerId[this]; }
            set { Fields.ParentHeadCustomerId[this] = value; }
        }

        [DisplayName("Parent Head Supplier Id"), Expression("jParentHead.[SupplierId]")]
        public Int64? ParentHeadSupplierId
        {
            get { return Fields.ParentHeadSupplierId[this]; }
            set { Fields.ParentHeadSupplierId[this] = value; }
        }

        [DisplayName("Parent Head Depreciation Rate"), Expression("jParentHead.[DepreciationRate]")]
        public Double? ParentHeadDepreciationRate
        {
            get { return Fields.ParentHeadDepreciationRate[this]; }
            set { Fields.ParentHeadDepreciationRate[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public String CustomerContactName
        {
            get { return Fields.CustomerContactName[this]; }
            set { Fields.CustomerContactName[this] = value; }
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public String CustomerContactTitle
        {
            get { return Fields.CustomerContactTitle[this]; }
            set { Fields.CustomerContactTitle[this] = value; }
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public Int64? CustomerCountryId
        {
            get { return Fields.CustomerCountryId[this]; }
            set { Fields.CustomerCountryId[this] = value; }
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public Int64? CustomerStateId
        {
            get { return Fields.CustomerStateId[this]; }
            set { Fields.CustomerStateId[this] = value; }
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public Int64? CustomerCityId
        {
            get { return Fields.CustomerCityId[this]; }
            set { Fields.CustomerCityId[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public Int64? CustomerRegionId
        {
            get { return Fields.CustomerRegionId[this]; }
            set { Fields.CustomerRegionId[this] = value; }
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get { return Fields.CustomerPostalCode[this]; }
            set { Fields.CustomerPostalCode[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get { return Fields.CustomerFax[this]; }
            set { Fields.CustomerFax[this] = value; }
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public String CustomerWebsite
        {
            get { return Fields.CustomerWebsite[this]; }
            set { Fields.CustomerWebsite[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public String CustomerEmailAddress
        {
            get { return Fields.CustomerEmailAddress[this]; }
            set { Fields.CustomerEmailAddress[this] = value; }
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public Double? CustomerPreviousCreditBalance
        {
            get { return Fields.CustomerPreviousCreditBalance[this]; }
            set { Fields.CustomerPreviousCreditBalance[this] = value; }
        }

        [DisplayName("Customer Insert Date"), Expression("jCustomer.[InsertDate]")]
        public DateTime? CustomerInsertDate
        {
            get { return Fields.CustomerInsertDate[this]; }
            set { Fields.CustomerInsertDate[this] = value; }
        }

        [DisplayName("Customer Insert User Id"), Expression("jCustomer.[InsertUserId]")]
        public Int32? CustomerInsertUserId
        {
            get { return Fields.CustomerInsertUserId[this]; }
            set { Fields.CustomerInsertUserId[this] = value; }
        }

        [DisplayName("Customer Update Date"), Expression("jCustomer.[UpdateDate]")]
        public DateTime? CustomerUpdateDate
        {
            get { return Fields.CustomerUpdateDate[this]; }
            set { Fields.CustomerUpdateDate[this] = value; }
        }

        [DisplayName("Customer Update User Id"), Expression("jCustomer.[UpdateUserId]")]
        public Int32? CustomerUpdateUserId
        {
            get { return Fields.CustomerUpdateUserId[this]; }
            set { Fields.CustomerUpdateUserId[this] = value; }
        }

        [DisplayName("Customer Delete Date"), Expression("jCustomer.[DeleteDate]")]
        public DateTime? CustomerDeleteDate
        {
            get { return Fields.CustomerDeleteDate[this]; }
            set { Fields.CustomerDeleteDate[this] = value; }
        }

        [DisplayName("Customer Delete User Id"), Expression("jCustomer.[DeleteUserId]")]
        public Int32? CustomerDeleteUserId
        {
            get { return Fields.CustomerDeleteUserId[this]; }
            set { Fields.CustomerDeleteUserId[this] = value; }
        }

        [DisplayName("Customer Is Active"), Expression("jCustomer.[IsActive]")]
        public Int32? CustomerIsActive
        {
            get { return Fields.CustomerIsActive[this]; }
            set { Fields.CustomerIsActive[this] = value; }
        }

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        [DisplayName("Supplier Country Id"), Expression("jSupplier.[CountryId]")]
        public Int64? SupplierCountryId
        {
            get { return Fields.SupplierCountryId[this]; }
            set { Fields.SupplierCountryId[this] = value; }
        }

        [DisplayName("Supplier State Id"), Expression("jSupplier.[StateId]")]
        public Int64? SupplierStateId
        {
            get { return Fields.SupplierStateId[this]; }
            set { Fields.SupplierStateId[this] = value; }
        }

        [DisplayName("Supplier City Id"), Expression("jSupplier.[CityId]")]
        public Int64? SupplierCityId
        {
            get { return Fields.SupplierCityId[this]; }
            set { Fields.SupplierCityId[this] = value; }
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier Region Id"), Expression("jSupplier.[RegionId]")]
        public Int64? SupplierRegionId
        {
            get { return Fields.SupplierRegionId[this]; }
            set { Fields.SupplierRegionId[this] = value; }
        }

        [DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        public String SupplierPostalCode
        {
            get { return Fields.SupplierPostalCode[this]; }
            set { Fields.SupplierPostalCode[this] = value; }
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public String SupplierWebsite
        {
            get { return Fields.SupplierWebsite[this]; }
            set { Fields.SupplierWebsite[this] = value; }
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail
        {
            get { return Fields.SupplierEmail[this]; }
            set { Fields.SupplierEmail[this] = value; }
        }

        [DisplayName("Supplier Email Address"), Expression("jSupplier.[EmailAddress]")]
        public String SupplierEmailAddress
        {
            get { return Fields.SupplierEmailAddress[this]; }
            set { Fields.SupplierEmailAddress[this] = value; }
        }

        [DisplayName("Supplier Previous Credit Balance"), Expression("jSupplier.[PreviousCreditBalance]")]
        public Double? SupplierPreviousCreditBalance
        {
            get { return Fields.SupplierPreviousCreditBalance[this]; }
            set { Fields.SupplierPreviousCreditBalance[this] = value; }
        }

        [DisplayName("Supplier Insert Date"), Expression("jSupplier.[InsertDate]")]
        public DateTime? SupplierInsertDate
        {
            get { return Fields.SupplierInsertDate[this]; }
            set { Fields.SupplierInsertDate[this] = value; }
        }

        [DisplayName("Supplier Insert User Id"), Expression("jSupplier.[InsertUserId]")]
        public Int32? SupplierInsertUserId
        {
            get { return Fields.SupplierInsertUserId[this]; }
            set { Fields.SupplierInsertUserId[this] = value; }
        }

        [DisplayName("Supplier Update Date"), Expression("jSupplier.[UpdateDate]")]
        public DateTime? SupplierUpdateDate
        {
            get { return Fields.SupplierUpdateDate[this]; }
            set { Fields.SupplierUpdateDate[this] = value; }
        }

        [DisplayName("Supplier Update User Id"), Expression("jSupplier.[UpdateUserId]")]
        public Int32? SupplierUpdateUserId
        {
            get { return Fields.SupplierUpdateUserId[this]; }
            set { Fields.SupplierUpdateUserId[this] = value; }
        }

        [DisplayName("Supplier Delete Date"), Expression("jSupplier.[DeleteDate]")]
        public DateTime? SupplierDeleteDate
        {
            get { return Fields.SupplierDeleteDate[this]; }
            set { Fields.SupplierDeleteDate[this] = value; }
        }

        [DisplayName("Supplier Delete User Id"), Expression("jSupplier.[DeleteUserId]")]
        public Int32? SupplierDeleteUserId
        {
            get { return Fields.SupplierDeleteUserId[this]; }
            set { Fields.SupplierDeleteUserId[this] = value; }
        }

        [DisplayName("Supplier Is Active"), Expression("jSupplier.[IsActive]")]
        public Int32? SupplierIsActive
        {
            get { return Fields.SupplierIsActive[this]; }
            set { Fields.SupplierIsActive[this] = value; }
        }


        [DisplayName("Opening Balance"), Column("OpeningBalance"), Expression("(ISNULL((SELECT SUM(t1.[Debit]) - SUM(t1.[Credit])  FROM [dbo].[Transactions] t1 where t1.[IsAppove]=1 AND t1.[IsPosted]=1 AND t1.[IsOpening]=1 AND t1.[COA] like Convert(nvarchar(50),t0.[HeadCode])+'%'),0))")]
        public Double? OpeningBalance
        {
            get { return Fields.OpeningBalance[this]; }
            set { Fields.OpeningBalance[this] = value; }
        }
        [DisplayName("Balance"),Column("Balance"), Expression("(ISNULL((SELECT SUM(t1.[Debit]) - SUM(t1.[Credit])  FROM [dbo].[Transactions] t1 where t1.[IsAppove]=1 AND t1.[IsPosted]=1 AND t1.[COA] like Convert(nvarchar(50),t0.[HeadCode])+'%'),0))")]
        public Double? Balance
        {
            get { return Fields.Balance[this]; }
            set { Fields.Balance[this] = value; }
        }

        public AccountsRow()
        {
        }

        public AccountsRow(RowFields fields)
            : base(fields)
        {
        }

       
        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field HeadCode;
            public StringField HeadName;
            public Int64Field ParentHead;
            public StringField PHeadName;
            public Int32Field HeadLevel;
            public StringField HeadType;
            public BooleanField IsTransaction;
            public BooleanField IsGl;
            public BooleanField IsBudget;
            public BooleanField IsDepreciation;
            public Int64Field CustomerId;
            public Int64Field SupplierId;
            public DoubleField DepreciationRate;

            public DoubleField OpeningBalance;
            public DoubleField Balance;

            public StringField HeadCodeName;

            public Int64Field ParentHeadHeadCode;
            public StringField ParentHeadHeadName;
            public Int64Field ParentHead1;
            public StringField ParentHeadPHeadName;
            public Int32Field ParentHeadHeadLevel;
            public StringField ParentHeadHeadType;
            public BooleanField ParentHeadIsTransaction;
            public BooleanField ParentHeadIsGl;
            public BooleanField ParentHeadIsBudget;
            public BooleanField ParentHeadIsDepreciation;
            public Int64Field ParentHeadCustomerId;
            public Int64Field ParentHeadSupplierId;
            public DoubleField ParentHeadDepreciationRate;

            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int64Field CustomerCountryId;
            public Int64Field CustomerStateId;
            public Int64Field CustomerCityId;
            public StringField CustomerAddress;
            public Int64Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmail;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;
            public DateTimeField CustomerInsertDate;
            public Int32Field CustomerInsertUserId;
            public DateTimeField CustomerUpdateDate;
            public Int32Field CustomerUpdateUserId;
            public DateTimeField CustomerDeleteDate;
            public Int32Field CustomerDeleteUserId;
            public Int32Field CustomerIsActive;

            public StringField SupplierCompanyName;
            public Int64Field SupplierCountryId;
            public Int64Field SupplierStateId;
            public Int64Field SupplierCityId;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public Int64Field SupplierRegionId;
            public StringField SupplierPostalCode;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierWebsite;
            public StringField SupplierEmail;
            public StringField SupplierEmailAddress;
            public DoubleField SupplierPreviousCreditBalance;
            public DateTimeField SupplierInsertDate;
            public Int32Field SupplierInsertUserId;
            public DateTimeField SupplierUpdateDate;
            public Int32Field SupplierUpdateUserId;
            public DateTimeField SupplierDeleteDate;
            public Int32Field SupplierDeleteUserId;
            public Int32Field SupplierIsActive;
        }
    }
}
