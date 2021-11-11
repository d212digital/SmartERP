
namespace SmartERP.Suppliers.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Administration.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Suppliers"), TableName("[dbo].[Suppliers]")]
    [DisplayName("Suppliers"), InstanceName("Suppliers")]
    [ReadPermission(BusinessPartners.PermissionKeys.Suppliers.View)]
    [InsertPermission(BusinessPartners.PermissionKeys.Suppliers.Create)]
    [UpdatePermission(BusinessPartners.PermissionKeys.Suppliers.Update)]
    [DeletePermission(BusinessPartners.PermissionKeys.Suppliers.Delete)]

    [LookupScript("Suppliers.Suppliers", Permission = BusinessPartners.PermissionKeys.Suppliers.View)]
    public sealed class SuppliersRow : SmartERP.LoggingRow<SuppliersRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Country"),PrimaryKey, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("State"),PrimaryKey, ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "Administration.States")]
        public Int64? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("City"),PrimaryKey, ForeignKey("[dbo].[Cities]", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "Administration.Cities")]
        public Int64? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Contact Name"), Size(250)]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Contact Title"), Size(250)]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Region"), ForeignKey("[dbo].[Regions]", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(RegionsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Regions")]
        public Int64? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Postal Code"), Size(250)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Phone"), Size(250)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Fax"), Size(250)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Website"), Size(250)]
        public String Website
        {
            get { return Fields.Website[this]; }
            set { Fields.Website[this] = value; }
        }

        [DisplayName("Email"), Size(250)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Email Address"), Size(250)]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
        }

        [DisplayName("Previous Credit Balance"), NotNull]
        public Double? PreviousCreditBalance
        {
            get { return Fields.PreviousCreditBalance[this]; }
            set { Fields.PreviousCreditBalance[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        [DisplayName("State Name"), Expression("jState.[Name]")]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }

        [DisplayName("State Country Id"), Expression("jState.[CountryId]")]
        public Int64? StateCountryId
        {
            get { return Fields.StateCountryId[this]; }
            set { Fields.StateCountryId[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("City Country Id"), Expression("jCity.[CountryId]")]
        public Int64? CityCountryId
        {
            get { return Fields.CityCountryId[this]; }
            set { Fields.CityCountryId[this] = value; }
        }

        [DisplayName("City State Id"), Expression("jCity.[StateId]")]
        public Int64? CityStateId
        {
            get { return Fields.CityStateId[this]; }
            set { Fields.CityStateId[this] = value; }
        }

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public String RegionName
        {
            get { return Fields.RegionName[this]; }
            set { Fields.RegionName[this] = value; }
        }


        [DisplayName("Supplier Payable"), Column("SupplierPayable"), Expression("(ISNULL((select sum(t.[Credit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.SupplierId=t0.Id)),0))"), LookupInclude]
        public double? SupplierPayable
        {
            get { return Fields.SupplierPayable[this]; }
            set { Fields.SupplierPayable[this] = value; }
        }

        [DisplayName("Supplier Paid"), Column("SupplierPaid"), Expression("(ISNULL((select sum(t.[Debit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.SupplierId=t0.Id)),0))"), LookupInclude]
        public double? SupplierPaid
        {
            get { return Fields.SupplierPaid[this]; }
            set { Fields.SupplierPaid[this] = value; }
        }
        [DisplayName("Supplier Balance"), Column("SupplierBalance"), Expression("(ISNULL((select sum(t.[Credit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.SupplierId=t0.Id)),0) - ISNULL((select sum(t.[Debit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.SupplierId=t0.Id)),0))"), LookupInclude]
        public double? SupplierBalance
        {
            get { return Fields.SupplierBalance[this]; }
            set { Fields.SupplierBalance[this] = value; }
        }

        [DisplayName("Supplier Group"), ForeignKey("[dbo].[SupplierGroups]", "Id"), LeftJoin("jSupplierGroups"), TextualField("SupplierGroupName")]
        [LookupEditor(typeof(Masters.Entities.SupplierGroupsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Masters.SupplierGroups")]
        public Int64? SupplierGroupId
        {
            get { return Fields.SupplierGroupId[this]; }
            set { Fields.SupplierGroupId[this] = value; }
        }
        [DisplayName("Supplier Group"), Expression("jSupplierGroups.[Name]")]
        public String SupplierGroupName
        {
            get { return Fields.SupplierGroupName[this]; }
            set { Fields.SupplierGroupName[this] = value; }
        }
        [DisplayName("CNIC"), Size(50)]
        public String CNIC
        {
            get { return Fields.CNIC[this]; }
            set { Fields.CNIC[this] = value; }
        }
        [DisplayName("NTN"), Size(50)]
        public String NTN
        {
            get { return Fields.NTN[this]; }
            set { Fields.NTN[this] = value; }
        }
        [DisplayName("STRN"), Size(50)]
        public String STRN
        {
            get { return Fields.STRN[this]; }
            set { Fields.STRN[this] = value; }
        }
        [DisplayName("Vat"), Size(50), Unique]
        public String Vat
        {
            get { return Fields.Vat[this]; }
            set { Fields.Vat[this] = value; }
        }
        [DisplayName("Order Booker"), ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jOrderBooker"), TextualField("OrderBookerName")]
        [LookupEditor(typeof(HumanResource.Entities.EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "HumanResource.Employees")]
        public Int64? OrderBooker
        {
            get { return Fields.OrderBooker[this]; }
            set { Fields.OrderBooker[this] = value; }
        }
        [DisplayName("Order Booker"),Expression("(jOrderBooker.[FirstName] + ' ' + jOrderBooker.[LastName])")]       
        public String OrderBookerName
        {
            get { return Fields.OrderBookerName[this]; }
            set { Fields.OrderBookerName[this] = value; }
        }
        public SuppliersRow()
        {
        }

        public SuppliersRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField CompanyName;
            public Int64Field CountryId;
            public Int64Field StateId;
            public Int64Field CityId;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public Int64Field RegionId;
            public StringField PostalCode;
            public StringField Phone;
            public StringField Fax;
            public StringField Website;
            public StringField Email;
            public StringField EmailAddress;
            public DoubleField PreviousCreditBalance;

            public StringField CountryName;

            public StringField StateName;
            public Int64Field StateCountryId;

            public StringField CityName;
            public Int64Field CityCountryId;
            public Int64Field CityStateId;

            public StringField RegionName;

            public DoubleField SupplierPayable;
            public DoubleField SupplierPaid;
            public DoubleField SupplierBalance;

            public Int64Field SupplierGroupId;
            public StringField SupplierGroupName;


            public StringField CNIC;
            public StringField NTN;
            public StringField STRN;
            public Int64Field OrderBooker;
            public StringField OrderBookerName;
            public StringField Vat;


        }
    }
}
