
namespace SmartERP.Inventory.Entities
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

    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[GoodsIssue]")]
    [DisplayName("Goods Issue"), InstanceName("Goods Issue")]
    [ReadPermission(PermissionKeys.GoodsIssue.View)]
    [InsertPermission(PermissionKeys.GoodsIssue.Create)]
    [UpdatePermission(PermissionKeys.GoodsIssue.Update)]
    [DeletePermission(PermissionKeys.GoodsIssue.Delete)]
    public sealed class GoodsIssueRow : SmartERP.LoggingRow<GoodsIssueRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Customer"), NotNull,PrimaryKey, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow))]
        public Int64? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Sale"), NotNull, PrimaryKey, ForeignKey("[dbo].[Sales]", "Id"), LeftJoin("jSale"), TextualField("SaleInvoice")]
        [LookupEditor(typeof(Sales.Entities.SalesRow))]
        public Int64? SaleId
        {
            get { return Fields.SaleId[this]; }
            set { Fields.SaleId[this] = value; }
        }


        [DisplayName("Sale Invoice"), Column("SaleInvoice"), Expression("('INV-'+convert(nvarchar(50),jSale.Id))")]
        public string SaleInvoice
        {
            get { return Fields.SaleInvoice[this]; }
            set { Fields.SaleInvoice[this] = value; }
        }

        [DisplayName("Date"), NotNull,NameProperty]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Total Quantity"), NotNull]
        public Double? TotalQuantity
        {
            get { return Fields.TotalQuantity[this]; }
            set { Fields.TotalQuantity[this] = value; }
        }

        [DisplayName("Sales Person"), PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jEmployeen"), TextualField("EmployeeFullName")]
        [LookupInclude, LookupEditor(typeof(HumanResource.Entities.EmployeesRow), AutoComplete = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? EmployeenId
        {
            get { return Fields.EmployeenId[this]; }
            set { Fields.EmployeenId[this] = value; }
        }
        [DisplayName("Employee"), Expression("(jEmployeen.[FirstName] + ' ' + jEmployeen.[LastName])")]
        public string EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "GoodsIssueId", IncludeColumns = "Name,Quntity,Total")]
        [DisplayName("Line Items"), NotMapped]
        public List<GoodsIssueDetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }

        [DisplayName("Remarks"), Size(4000), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Journal Remarks"), Size(4000)]
        public String JournalRemarks
        {
            get { return Fields.JournalRemarks[this]; }
            set { Fields.JournalRemarks[this] = value; }
        }

        [DisplayName("Reference"), Size(250)]
        public String Reference
        {
            get { return Fields.Reference[this]; }
            set { Fields.Reference[this] = value; }
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

        [DisplayName("Sale Customer Id"), Expression("jSale.[CustomerId]")]
        public Int64? SaleCustomerId
        {
            get { return Fields.SaleCustomerId[this]; }
            set { Fields.SaleCustomerId[this] = value; }
        }

        [DisplayName("Sale Date"), Expression("jSale.[Date]")]
        public DateTime? SaleDate
        {
            get { return Fields.SaleDate[this]; }
            set { Fields.SaleDate[this] = value; }
        }

        [DisplayName("Sale Discount"), Expression("jSale.[Discount]")]
        public Double? SaleDiscount
        {
            get { return Fields.SaleDiscount[this]; }
            set { Fields.SaleDiscount[this] = value; }
        }

        [DisplayName("Sale Total Discount"), Expression("jSale.[TotalDiscount]")]
        public Double? SaleTotalDiscount
        {
            get { return Fields.SaleTotalDiscount[this]; }
            set { Fields.SaleTotalDiscount[this] = value; }
        }

        [DisplayName("Sale Vat"), Expression("jSale.[Vat]")]
        public Double? SaleVat
        {
            get { return Fields.SaleVat[this]; }
            set { Fields.SaleVat[this] = value; }
        }

        [DisplayName("Sale Total Tax"), Expression("jSale.[TotalTax]")]
        public Double? SaleTotalTax
        {
            get { return Fields.SaleTotalTax[this]; }
            set { Fields.SaleTotalTax[this] = value; }
        }

        [DisplayName("Sale Shipping Cost"), Expression("jSale.[ShippingCost]")]
        public Double? SaleShippingCost
        {
            get { return Fields.SaleShippingCost[this]; }
            set { Fields.SaleShippingCost[this] = value; }
        }

        [DisplayName("Sale Grand Total"), Expression("jSale.[GrandTotal]")]
        public Double? SaleGrandTotal
        {
            get { return Fields.SaleGrandTotal[this]; }
            set { Fields.SaleGrandTotal[this] = value; }
        }

        [DisplayName("Sale Net Total"), Expression("jSale.[NetTotal]")]
        public Double? SaleNetTotal
        {
            get { return Fields.SaleNetTotal[this]; }
            set { Fields.SaleNetTotal[this] = value; }
        }

        [DisplayName("Sale Paid Amount"), Expression("jSale.[PaidAmount]")]
        public Double? SalePaidAmount
        {
            get { return Fields.SalePaidAmount[this]; }
            set { Fields.SalePaidAmount[this] = value; }
        }

        [DisplayName("Sale Due"), Expression("jSale.[Due]")]
        public Double? SaleDue
        {
            get { return Fields.SaleDue[this]; }
            set { Fields.SaleDue[this] = value; }
        }

        [DisplayName("Sale Change"), Expression("jSale.[Change]")]
        public Double? SaleChange
        {
            get { return Fields.SaleChange[this]; }
            set { Fields.SaleChange[this] = value; }
        }

        [DisplayName("Sale Details"), Expression("jSale.[Details]")]
        public String SaleDetails
        {
            get { return Fields.SaleDetails[this]; }
            set { Fields.SaleDetails[this] = value; }
        }

        [DisplayName("Sale Payment Account"), Expression("jSale.[PaymentAccount]")]
        public Int64? SalePaymentAccount
        {
            get { return Fields.SalePaymentAccount[this]; }
            set { Fields.SalePaymentAccount[this] = value; }
        }

        [DisplayName("Sale V No"), Expression("jSale.[VNo]")]
        public Int64? SaleVNo
        {
            get { return Fields.SaleVNo[this]; }
            set { Fields.SaleVNo[this] = value; }
        }

        [DisplayName("Employeen First Name"), Expression("jEmployeen.[FirstName]")]
        public String EmployeenFirstName
        {
            get { return Fields.EmployeenFirstName[this]; }
            set { Fields.EmployeenFirstName[this] = value; }
        }

        [DisplayName("Employeen Last Name"), Expression("jEmployeen.[LastName]")]
        public String EmployeenLastName
        {
            get { return Fields.EmployeenLastName[this]; }
            set { Fields.EmployeenLastName[this] = value; }
        }

        [DisplayName("Employeen Designation Id"), Expression("jEmployeen.[DesignationId]")]
        public Int64? EmployeenDesignationId
        {
            get { return Fields.EmployeenDesignationId[this]; }
            set { Fields.EmployeenDesignationId[this] = value; }
        }

        [DisplayName("Employeen Department Id"), Expression("jEmployeen.[DepartmentId]")]
        public Int64? EmployeenDepartmentId
        {
            get { return Fields.EmployeenDepartmentId[this]; }
            set { Fields.EmployeenDepartmentId[this] = value; }
        }

        [DisplayName("Employeen Rate Type"), Expression("jEmployeen.[RateType]")]
        public Int32? EmployeenRateType
        {
            get { return Fields.EmployeenRateType[this]; }
            set { Fields.EmployeenRateType[this] = value; }
        }

        [DisplayName("Employeen Phone"), Expression("jEmployeen.[Phone]")]
        public String EmployeenPhone
        {
            get { return Fields.EmployeenPhone[this]; }
            set { Fields.EmployeenPhone[this] = value; }
        }

        [DisplayName("Employeen Houre Rate Salary"), Expression("jEmployeen.[HoureRateSalary]")]
        public Double? EmployeenHoureRateSalary
        {
            get { return Fields.EmployeenHoureRateSalary[this]; }
            set { Fields.EmployeenHoureRateSalary[this] = value; }
        }

        [DisplayName("Employeen Email"), Expression("jEmployeen.[Email]")]
        public String EmployeenEmail
        {
            get { return Fields.EmployeenEmail[this]; }
            set { Fields.EmployeenEmail[this] = value; }
        }

        [DisplayName("Employeen Blood Group"), Expression("jEmployeen.[BloodGroup]")]
        public Int32? EmployeenBloodGroup
        {
            get { return Fields.EmployeenBloodGroup[this]; }
            set { Fields.EmployeenBloodGroup[this] = value; }
        }

        [DisplayName("Employeen Picture"), Expression("jEmployeen.[Picture]")]
        public String EmployeenPicture
        {
            get { return Fields.EmployeenPicture[this]; }
            set { Fields.EmployeenPicture[this] = value; }
        }

        [DisplayName("Employeen Country Id"), Expression("jEmployeen.[CountryId]")]
        public Int64? EmployeenCountryId
        {
            get { return Fields.EmployeenCountryId[this]; }
            set { Fields.EmployeenCountryId[this] = value; }
        }

        [DisplayName("Employeen State Id"), Expression("jEmployeen.[StateId]")]
        public Int64? EmployeenStateId
        {
            get { return Fields.EmployeenStateId[this]; }
            set { Fields.EmployeenStateId[this] = value; }
        }

        [DisplayName("Employeen City Id"), Expression("jEmployeen.[CityId]")]
        public Int64? EmployeenCityId
        {
            get { return Fields.EmployeenCityId[this]; }
            set { Fields.EmployeenCityId[this] = value; }
        }

        [DisplayName("Employeen Zip Code"), Expression("jEmployeen.[ZipCode]")]
        public String EmployeenZipCode
        {
            get { return Fields.EmployeenZipCode[this]; }
            set { Fields.EmployeenZipCode[this] = value; }
        }

        [DisplayName("Employeen Address"), Expression("jEmployeen.[Address]")]
        public String EmployeenAddress
        {
            get { return Fields.EmployeenAddress[this]; }
            set { Fields.EmployeenAddress[this] = value; }
        }

        [DisplayName("Employeen User Id"), Expression("jEmployeen.[UserId]")]
        public Int32? EmployeenUserId
        {
            get { return Fields.EmployeenUserId[this]; }
            set { Fields.EmployeenUserId[this] = value; }
        }

        [DisplayName("Employeen Region Id"), Expression("jEmployeen.[RegionId]")]
        public Int64? EmployeenRegionId
        {
            get { return Fields.EmployeenRegionId[this]; }
            set { Fields.EmployeenRegionId[this] = value; }
        }

        [DisplayName("Employeen Territory Id"), Expression("jEmployeen.[TerritoryId]")]
        public Int64? EmployeenTerritoryId
        {
            get { return Fields.EmployeenTerritoryId[this]; }
            set { Fields.EmployeenTerritoryId[this] = value; }
        }

        [DisplayName("Employeen Cnic"), Expression("jEmployeen.[CNIC]")]
        public String EmployeenCnic
        {
            get { return Fields.EmployeenCnic[this]; }
            set { Fields.EmployeenCnic[this] = value; }
        }

        [DisplayName("Employeen Insert Date"), Expression("jEmployeen.[InsertDate]")]
        public DateTime? EmployeenInsertDate
        {
            get { return Fields.EmployeenInsertDate[this]; }
            set { Fields.EmployeenInsertDate[this] = value; }
        }

        [DisplayName("Employeen Insert User Id"), Expression("jEmployeen.[InsertUserId]")]
        public Int32? EmployeenInsertUserId
        {
            get { return Fields.EmployeenInsertUserId[this]; }
            set { Fields.EmployeenInsertUserId[this] = value; }
        }

        [DisplayName("Employeen Update Date"), Expression("jEmployeen.[UpdateDate]")]
        public DateTime? EmployeenUpdateDate
        {
            get { return Fields.EmployeenUpdateDate[this]; }
            set { Fields.EmployeenUpdateDate[this] = value; }
        }

        [DisplayName("Employeen Update User Id"), Expression("jEmployeen.[UpdateUserId]")]
        public Int32? EmployeenUpdateUserId
        {
            get { return Fields.EmployeenUpdateUserId[this]; }
            set { Fields.EmployeenUpdateUserId[this] = value; }
        }

        [DisplayName("Employeen Delete Date"), Expression("jEmployeen.[DeleteDate]")]
        public DateTime? EmployeenDeleteDate
        {
            get { return Fields.EmployeenDeleteDate[this]; }
            set { Fields.EmployeenDeleteDate[this] = value; }
        }

        [DisplayName("Employeen Delete User Id"), Expression("jEmployeen.[DeleteUserId]")]
        public Int32? EmployeenDeleteUserId
        {
            get { return Fields.EmployeenDeleteUserId[this]; }
            set { Fields.EmployeenDeleteUserId[this] = value; }
        }

        [DisplayName("Employeen Is Active"), Expression("jEmployeen.[IsActive]")]
        public Int32? EmployeenIsActive
        {
            get { return Fields.EmployeenIsActive[this]; }
            set { Fields.EmployeenIsActive[this] = value; }
        }

        public GoodsIssueRow()
        {
        }

        public GoodsIssueRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field CustomerId;
            public Int64Field SaleId;
            public DateTimeField Date;
            public DoubleField TotalQuantity;
            public Int64Field EmployeenId;
            public StringField Remarks;
            public StringField JournalRemarks;
            public StringField Reference;
            public readonly RowListField<GoodsIssueDetailsRow> LineItems;
            public StringField SaleInvoice;

            public StringField EmployeeFullName;
            
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

            public Int64Field SaleCustomerId;
            public DateTimeField SaleDate;
            public DoubleField SaleDiscount;
            public DoubleField SaleTotalDiscount;
            public DoubleField SaleVat;
            public DoubleField SaleTotalTax;
            public DoubleField SaleShippingCost;
            public DoubleField SaleGrandTotal;
            public DoubleField SaleNetTotal;
            public DoubleField SalePaidAmount;
            public DoubleField SaleDue;
            public DoubleField SaleChange;
            public StringField SaleDetails;
            public Int64Field SalePaymentAccount;
            public Int64Field SaleVNo;

            public StringField EmployeenFirstName;
            public StringField EmployeenLastName;
            public Int64Field EmployeenDesignationId;
            public Int64Field EmployeenDepartmentId;
            public Int32Field EmployeenRateType;
            public StringField EmployeenPhone;
            public DoubleField EmployeenHoureRateSalary;
            public StringField EmployeenEmail;
            public Int32Field EmployeenBloodGroup;
            public StringField EmployeenPicture;
            public Int64Field EmployeenCountryId;
            public Int64Field EmployeenStateId;
            public Int64Field EmployeenCityId;
            public StringField EmployeenZipCode;
            public StringField EmployeenAddress;
            public Int32Field EmployeenUserId;
            public Int64Field EmployeenRegionId;
            public Int64Field EmployeenTerritoryId;
            public StringField EmployeenCnic;
            public DateTimeField EmployeenInsertDate;
            public Int32Field EmployeenInsertUserId;
            public DateTimeField EmployeenUpdateDate;
            public Int32Field EmployeenUpdateUserId;
            public DateTimeField EmployeenDeleteDate;
            public Int32Field EmployeenDeleteUserId;
            public Int32Field EmployeenIsActive;
        }
    }
}
