
namespace SmartERP.Customers.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Administration.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Customers"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
   
    [ReadPermission(BusinessPartners.PermissionKeys.Customers.View)]
    [InsertPermission(BusinessPartners.PermissionKeys.Customers.Create)]
    [UpdatePermission(BusinessPartners.PermissionKeys.Customers.Update)]
    [DeletePermission(BusinessPartners.PermissionKeys.Customers.Delete)]

    [LookupScript("Customers.Customers", Permission = BusinessPartners.PermissionKeys.Customers.View)]
    public sealed class CustomersRow : SmartERP.LoggingRow<CustomersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        [DisplayName("Country"),PrimaryKey, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Administration.Countries")]
        public Int64? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("State"), PrimaryKey, ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "Administration.States")]
        public Int64? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("City"), PrimaryKey, ForeignKey("[dbo].[Cities]", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "Administration.Cities")]
        public Int64? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Region"), PrimaryKey, ForeignKey("[dbo].[Regions]", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
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

        [DisplayName("Phone"),NotNull, Size(250)]
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

        [DisplayName("Customer Receivable"), Column("CustomerReceivable"), Expression("(ISNULL((select sum(t.[Debit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.CustomerId=t0.Id)),0))"), LookupInclude]
        public double? CustomerReceivable
        {
            get { return Fields.CustomerReceivable[this]; }
            set { Fields.CustomerReceivable[this] = value; }
        }

        [DisplayName("Customer Received"), Column("CustomerReceived"), Expression("(ISNULL((select sum(t.[Credit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.CustomerId=t0.Id)),0))"), LookupInclude]
        public double? CustomerReceived
        {
            get { return Fields.CustomerReceived[this]; }
            set { Fields.CustomerReceived[this] = value; }
        }
        [DisplayName("Customer Balance"), Column("CustomerBalance"), Expression("(ISNULL((select sum(t.[Debit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.CustomerId=t0.Id)),0) - ISNULL((select sum(t.[Credit]) from [dbo].[Transactions] t where t.[COAId]=(SELECT top 1 a.Id FROM Accounts a where a.CustomerId=t0.Id)),0))"), LookupInclude]
        public double? CustomerBalance
        {
            get { return Fields.CustomerBalance[this]; }
            set { Fields.CustomerBalance[this] = value; }
        }

        [DisplayName("Customer Group"), ForeignKey("[dbo].[SupplierGroups]", "Id"), LeftJoin("jCustomerGroup"), TextualField("CustomerGroupName")]
        [LookupEditor(typeof(Masters.Entities.CustomerGroupsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Masters.CustomerGroups")]
        public Int64? CustomerGroupId
        {
            get { return Fields.CustomerGroupId[this]; }
            set { Fields.CustomerGroupId[this] = value; }
        }
        [DisplayName("Customer Group"), Expression("jCustomerGroup.[Name]")]
        public String CustomerGroupName
        {
            get { return Fields.CustomerGroupName[this]; }
            set { Fields.CustomerGroupName[this] = value; }
        }
        [DisplayName("CNIC"), Size(50), Unique]
        public String CNIC
        {
            get { return Fields.CNIC[this]; }
            set { Fields.CNIC[this] = value; }
        }
        [DisplayName("NTN"), Size(50), Unique]
        public String NTN
        {
            get { return Fields.NTN[this]; }
            set { Fields.NTN[this] = value; }
        }
        [DisplayName("STRN"), Size(50),Unique]
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
        [DisplayName("Sales Man"), ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jSalesMan"), TextualField("SalesManName")]
        [LookupEditor(typeof(HumanResource.Entities.EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "HumanResource.Employees")]
        public Int64? SalesMan
        {
            get { return Fields.SalesMan[this]; }
            set { Fields.SalesMan[this] = value; }
        }
        [DisplayName("Sales Man"), Expression("(jSalesMan.[FirstName] + ' ' + jSalesMan.[LastName])")]
        public String SalesManName
        {
            get { return Fields.SalesManName[this]; }
            set { Fields.SalesManName[this] = value; }
        }
        [DisplayName("Order Booker"), NotNull, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jOrderBooker"), TextualField("OrderBookerName")]
        [LookupEditor(typeof(HumanResource.Entities.EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "HumanResource.Employees")]
        public Int64? OrderBooker
        {
            get { return Fields.OrderBooker[this]; }
            set { Fields.OrderBooker[this] = value; }
        }
        [DisplayName("Order Booker"), Expression("(jOrderBooker.[FirstName] + ' ' + jOrderBooker.[LastName])")]
        public String OrderBookerName
        {
            get { return Fields.OrderBookerName[this]; }
            set { Fields.OrderBookerName[this] = value; }
        }
        public CustomersRow()
        {
        }

        public CustomersRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public StringField ContactName;
            public StringField ContactTitle;
            public Int64Field CountryId;
            public Int64Field StateId;
            public Int64Field CityId;
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

            public DoubleField CustomerReceivable;
            public DoubleField CustomerReceived;
            public DoubleField CustomerBalance;

            public Int64Field CustomerGroupId;
            public StringField CustomerGroupName;

            public StringField CNIC;
            public StringField NTN;
            public StringField STRN;
            public Int64Field SalesMan;
            public StringField SalesManName; 
            public StringField Vat;

            public Int64Field OrderBooker;
            public StringField OrderBookerName;
        }
    }
}
