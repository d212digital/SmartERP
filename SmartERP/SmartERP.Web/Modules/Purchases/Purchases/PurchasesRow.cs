
namespace SmartERP.Purchases.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    //using SmartERP.Accounts;
    using SmartERP.Suppliers.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Purchases"), TableName("[dbo].[Purchases]")]
    [DisplayName("Purchases"), InstanceName("Purchases")]
   
    [ReadPermission(PermissionKeys.Purchases.View)]
    [InsertPermission(PermissionKeys.Purchases.Create)]
    [UpdatePermission(PermissionKeys.Purchases.Update)]
    [DeletePermission(PermissionKeys.Purchases.Delete)]

    [LookupScript("Purchases.Purchases", Permission = PermissionKeys.Purchases.View)]
    public sealed class PurchasesRow : SmartERP.LoggingRow<PurchasesRow.RowFields>, IIdRow, INameRow, IRowVersionRow
    {
        [DisplayName("Id"), Identity,IdProperty,Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Supplier"), NotNull,PrimaryKey, ForeignKey("[dbo].[Suppliers]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SuppliersRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Suppliers.Suppliers"),LookupInclude]
        public Int64? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Invoice No"), Size(250), QuickSearch,NameProperty]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
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

        [DisplayName("Discount"), NotNull]
        public Double? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Total Discount"), NotNull]
        public Double? TotalDiscount
        {
            get { return Fields.TotalDiscount[this]; }
            set { Fields.TotalDiscount[this] = value; }
        }

        [DisplayName("Vat"), NotNull]
        public Double? Vat
        {
            get { return Fields.Vat[this]; }
            set { Fields.Vat[this] = value; }
        }

        [DisplayName("Total Tax"), NotNull]
        public Double? TotalTax
        {
            get { return Fields.TotalTax[this]; }
            set { Fields.TotalTax[this] = value; }
        }

        [DisplayName("Shipping Cost"), NotNull]
        public Double? ShippingCost
        {
            get { return Fields.ShippingCost[this]; }
            set { Fields.ShippingCost[this] = value; }
        }

        [DisplayName("Grand Total"), NotNull]
        public Double? GrandTotal
        {
            get { return Fields.GrandTotal[this]; }
            set { Fields.GrandTotal[this] = value; }
        }

        [DisplayName("Net Total"), NotNull]
        public Double? NetTotal
        {
            get { return Fields.NetTotal[this]; }
            set { Fields.NetTotal[this] = value; }
        }

        [DisplayName("Paid Amount"), NotNull]
        public Double? PaidAmount
        {
            get { return Fields.PaidAmount[this]; }
            set { Fields.PaidAmount[this] = value; }
        }

        [DisplayName("Due"), NotNull]
        public Double? Due
        {
            get { return Fields.Due[this]; }
            set { Fields.Due[this] = value; }
        }

        [DisplayName("Change"), NotNull]
        public Double? Change
        {
            get { return Fields.Change[this]; }
            set { Fields.Change[this] = value; }
        }

        [DisplayName("Details"), Size(4000)]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
        }


        [MasterDetailRelation(foreignKey: "PurchaseId", IncludeColumns = "Name,Quntity,UnitPrice,Total")]
        [DisplayName("Line Items"), NotMapped]
        public List<PurchaseDetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
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
        [DisplayName("VNo"), Hidden]
        public Int64? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Vat Percentage"), DefaultValue(0)]
        public double? VatPercentage
        {
            get { return Fields.VatPercentage[this]; }
            set { Fields.VatPercentage[this] = value; }
        }


        [DisplayName("No Tax"), DefaultValue(false)]
        public Boolean? NoTax
        {
            get { return Fields.NoTax[this]; }
            set { Fields.NoTax[this] = value; }
        }
        [DisplayName("Vat Type"), NotNull, DefaultValue(VatKind.Exclusive), LookupInclude]
        public VatKind? VatType
        {
            get => (VatKind?)fields.VatType[this];
            set => fields.VatType[this] = (Int32)value;
        }
        //[DisplayName("NameField"),Column("NameField"), Expression("('BILL-'+convert(nvarchar(50),t0.Id))")]
        //public string NameField
        //{
        //    get { return Fields.NameField[this]; }
        //    set { Fields.NameField[this] = value; }
        //}
        [DisplayName("Row Version"), NotNull, SetFieldFlags(FieldFlags.Calculated)]
        public byte[] RowVersion
        {
            get { return Fields.RowVersion[this]; }
            set { Fields.RowVersion[this] = value; }
        }
        
        IField IRowVersionRow.RowVersionField
        {
            get { return Fields.RowVersion; }
        }
        public PurchasesRow()
        {
        }

        public PurchasesRow(RowFields fields)
            : base(fields)
        {
        }

       
        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field SupplierId;
            public StringField InvoiceNo;
            public DateTimeField Date;
            public Int64Field PaymentAccount;           
            public DoubleField Discount;
            public DoubleField TotalDiscount;
            public DoubleField Vat;
            public DoubleField TotalTax;
            public DoubleField ShippingCost;
            public DoubleField GrandTotal;
            public DoubleField NetTotal;
            public DoubleField PaidAmount;
            public DoubleField Due;
            public DoubleField Change;
            public StringField Details;
            public readonly RowListField<PurchaseDetailsRow> LineItems;
            public StringField HeadCodeName;
            public Int64Field VNo;
            //public StringField NameField;

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

            public ByteArrayField RowVersion;

            public DoubleField VatPercentage;
            public BooleanField NoTax;
            public Int32Field VatType;
        }
    }
}
