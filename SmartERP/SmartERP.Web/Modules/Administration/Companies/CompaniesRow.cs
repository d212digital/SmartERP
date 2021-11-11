
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Companies]")]
    [DisplayName("Companies"), InstanceName("Companies")]    

    [ReadPermission(PermissionKeys.Settings)]
    [ModifyPermission(PermissionKeys.Settings)]

    [LookupScript("Administration.Companies")]
    public sealed class CompaniesRow : SmartERP.LoggingRow<CompaniesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Company Email"), Size(250)]
        public String CompanyEmail
        {
            get { return Fields.CompanyEmail[this]; }
            set { Fields.CompanyEmail[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Phone"), Size(250)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Currency"), ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyName")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Currencies")]
        public Int64? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Vat Percentage"), NotNull,LookupInclude]
        public Double? VatPercentage
        {
            get { return Fields.VatPercentage[this]; }
            set { Fields.VatPercentage[this] = value; }
        }

        [DisplayName("Logo"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Logo
        {
            get { return Fields.Logo[this]; }
            set { Fields.Logo[this] = value; }
        }

        [DisplayName("Invoice Logo"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String SaleLogo
        {
            get { return Fields.SaleLogo[this]; }
            set { Fields.SaleLogo[this] = value; }
        }

        [DisplayName("Favicon"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Favicon
        {
            get { return Fields.Favicon[this]; }
            set { Fields.Favicon[this] = value; }
        }

        [DisplayName("Currency Position"), NotNull]
        public CurrencyPositionKind? CurrencyPosition
        {
            get { return (CurrencyPositionKind)Fields.CurrencyPosition[this]; }
            set { Fields.CurrencyPosition[this] = (Int32)value; }
        }

        [DisplayName("Footer Text"), Size(4000)]
        public String FooterText
        {
            get { return Fields.FooterText[this]; }
            set { Fields.FooterText[this] = value; }
        }

        [DisplayName("Currency Currency Name"), Expression("jCurrency.[CurrencyName]")]
        public String CurrencyCurrencyName
        {
            get { return Fields.CurrencyCurrencyName[this]; }
            set { Fields.CurrencyCurrencyName[this] = value; }
        }

        [DisplayName("Currency Currency Symbol"), Expression("jCurrency.[CurrencySymbol]")]
        public String CurrencyCurrencySymbol
        {
            get { return Fields.CurrencyCurrencySymbol[this]; }
            set { Fields.CurrencyCurrencySymbol[this] = value; }
        }

        [DisplayName("Vat Type"), NotNull, DefaultValue(VatKind.Exclusive),LookupInclude]
        public VatKind? VatType
        {
            get => (VatKind?)fields.VatType[this];
            set => fields.VatType[this] = (Int32)value;
        }
        [DisplayName("Vat #"), Size(50), Unique]
        public String Vat
        {
            get { return Fields.Vat[this]; }
            set { Fields.Vat[this] = value; }
        }
        public CompaniesRow()
        {
        }

        public CompaniesRow(RowFields fields)
            : base(Fields)
        {
        }
        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField CompanyName;
            public StringField CompanyEmail;
            public StringField Address;
            public StringField Phone;
            public Int64Field CurrencyId;
            public DoubleField VatPercentage;
            public StringField Logo;
            public StringField SaleLogo;
            public StringField Favicon;
            public Int32Field CurrencyPosition;
            public StringField FooterText;
            public Int32Field VatType;
            public StringField Vat;

            public StringField CurrencyCurrencyName;
            public StringField CurrencyCurrencySymbol;
        }
    }
}
