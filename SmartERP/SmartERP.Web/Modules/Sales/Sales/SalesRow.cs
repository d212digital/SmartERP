
namespace SmartERP.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Customers.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Sales"), TableName("[dbo].[Sales]")]
    [DisplayName("Sales"), InstanceName("Sales")]
    [ReadPermission(PermissionKeys.Sales.View)]
    [InsertPermission(PermissionKeys.Sales.Create)]
    [UpdatePermission(PermissionKeys.Sales.Update)]
    [DeletePermission(PermissionKeys.Sales.Delete)]

    [LookupScript("Sales.Sales", Permission = PermissionKeys.Sales.View)]
    public sealed class SalesRow : SmartERP.LoggingRow<SalesRow.RowFields>, IIdRow, INameRow, IRowVersionRow
    {
        [DisplayName("Id"), Identity,IdProperty, Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Customer"), NotNull,PrimaryKey, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Customers.Customers"), LookupInclude]
        public Int64? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Date"), NotNull,NameProperty]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Payment Account"), NotNull,PrimaryKey, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jParentHead"), TextualField("HeadCodeName")]
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
        [MasterDetailRelation(foreignKey: "SaleId", IncludeColumns = "Name,Quntity,UnitPrice,Total")]
        [DisplayName("Line Items"), NotMapped]
        public List<SaleDetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }
        [DisplayName("Details"), Size(4000), QuickSearch]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
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
        [DisplayName("VNo"), Hidden]
        public Int64? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }
        //[DisplayName("NameField"), Column("NameField"), Expression("('INV-'+convert(nvarchar(50),t0.Id))")]
        //public string InvoiceNumberField
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
        IField IRowVersionRow.RowVersionField
        {
            get { return Fields.RowVersion; }
        }
        public SalesRow()
        {
        }

        public SalesRow(RowFields fields)
            : base(fields)
        {
        }

        

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field CustomerId;
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
            public readonly RowListField<SaleDetailsRow> LineItems;
            public StringField HeadCodeName;
            public Int64Field VNo;
            //public StringField NameField;

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

            public ByteArrayField RowVersion;

            public DoubleField VatPercentage;
            public BooleanField NoTax;
            public Int32Field VatType;
        }
    }
}
