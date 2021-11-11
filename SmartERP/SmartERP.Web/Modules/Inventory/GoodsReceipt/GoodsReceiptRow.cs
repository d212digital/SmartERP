
namespace SmartERP.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Purchases.Entities;
    using SmartERP.Suppliers.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[GoodsReceipt]")]
    [DisplayName("Goods Receipt"), InstanceName("Goods Receipt")]
    [ReadPermission(PermissionKeys.GoodsReceipt.View)]
    [InsertPermission(PermissionKeys.GoodsReceipt.Create)]
    [UpdatePermission(PermissionKeys.GoodsReceipt.Update)]
    [DeletePermission(PermissionKeys.GoodsReceipt.Delete)]
    public sealed class GoodsReceiptRow : SmartERP.LoggingRow<GoodsReceiptRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Supplier"), NotNull,PrimaryKey, ForeignKey("[dbo].[Suppliers]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SuppliersRow))]
        public Int64? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Purchase"), NotNull, PrimaryKey, ForeignKey("[dbo].[Purchases]", "Id"), LeftJoin("jPurchase"), TextualField("PurchaseBill")]
        [LookupEditor(typeof(PurchasesRow))]
        public Int64? PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
        }
        [DisplayName("Purchase Bill"), Column("PurchaseBill"), Expression("('BILL-'+convert(nvarchar(50),jPurchase.Id))")]
        public string PurchaseBill
        {
            get { return Fields.PurchaseBill[this]; }
            set { Fields.PurchaseBill[this] = value; }
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

        [DisplayName("Employee"), PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jEmployeen"), TextualField("EmployeeFullName")]
        [LookupInclude, LookupEditor(typeof(HumanResource.Entities.EmployeesRow), AutoComplete = true,FilterField = "IsActive", FilterValue = "1")]
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
        [MasterDetailRelation(foreignKey: "GoodsReceiptId", IncludeColumns = "Name,Quntity,Total")]
        [DisplayName("Line Items"), NotMapped]
        public List<GoodsReceiptDetailsRow> LineItems
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

        [DisplayName("Purchase Supplier Id"), Expression("jPurchase.[SupplierId]")]
        public Int64? PurchaseSupplierId
        {
            get { return Fields.PurchaseSupplierId[this]; }
            set { Fields.PurchaseSupplierId[this] = value; }
        }

        [DisplayName("Purchase Invoice No"), Expression("jPurchase.[InvoiceNo]")]
        public String PurchaseInvoiceNo
        {
            get { return Fields.PurchaseInvoiceNo[this]; }
            set { Fields.PurchaseInvoiceNo[this] = value; }
        }

        [DisplayName("Purchase Date"), Expression("jPurchase.[Date]")]
        public DateTime? PurchaseDate
        {
            get { return Fields.PurchaseDate[this]; }
            set { Fields.PurchaseDate[this] = value; }
        }

        [DisplayName("Purchase Discount"), Expression("jPurchase.[Discount]")]
        public Double? PurchaseDiscount
        {
            get { return Fields.PurchaseDiscount[this]; }
            set { Fields.PurchaseDiscount[this] = value; }
        }

        [DisplayName("Purchase Total Discount"), Expression("jPurchase.[TotalDiscount]")]
        public Double? PurchaseTotalDiscount
        {
            get { return Fields.PurchaseTotalDiscount[this]; }
            set { Fields.PurchaseTotalDiscount[this] = value; }
        }

        [DisplayName("Purchase Shipping Cost"), Expression("jPurchase.[ShippingCost]")]
        public Double? PurchaseShippingCost
        {
            get { return Fields.PurchaseShippingCost[this]; }
            set { Fields.PurchaseShippingCost[this] = value; }
        }

        [DisplayName("Purchase Grand Total"), Expression("jPurchase.[GrandTotal]")]
        public Double? PurchaseGrandTotal
        {
            get { return Fields.PurchaseGrandTotal[this]; }
            set { Fields.PurchaseGrandTotal[this] = value; }
        }

        [DisplayName("Purchase Net Total"), Expression("jPurchase.[NetTotal]")]
        public Double? PurchaseNetTotal
        {
            get { return Fields.PurchaseNetTotal[this]; }
            set { Fields.PurchaseNetTotal[this] = value; }
        }

        [DisplayName("Purchase Paid Amount"), Expression("jPurchase.[PaidAmount]")]
        public Double? PurchasePaidAmount
        {
            get { return Fields.PurchasePaidAmount[this]; }
            set { Fields.PurchasePaidAmount[this] = value; }
        }

        [DisplayName("Purchase Due"), Expression("jPurchase.[Due]")]
        public Double? PurchaseDue
        {
            get { return Fields.PurchaseDue[this]; }
            set { Fields.PurchaseDue[this] = value; }
        }

        [DisplayName("Purchase Change"), Expression("jPurchase.[Change]")]
        public Double? PurchaseChange
        {
            get { return Fields.PurchaseChange[this]; }
            set { Fields.PurchaseChange[this] = value; }
        }

        [DisplayName("Purchase Details"), Expression("jPurchase.[Details]")]
        public String PurchaseDetails
        {
            get { return Fields.PurchaseDetails[this]; }
            set { Fields.PurchaseDetails[this] = value; }
        }

        [DisplayName("Purchase Payment Account"), Expression("jPurchase.[PaymentAccount]")]
        public Int64? PurchasePaymentAccount
        {
            get { return Fields.PurchasePaymentAccount[this]; }
            set { Fields.PurchasePaymentAccount[this] = value; }
        }

        [DisplayName("Purchase Employee Id"), Expression("jPurchase.[EmployeeId]")]
        public Int64? PurchaseEmployeeId
        {
            get { return Fields.PurchaseEmployeeId[this]; }
            set { Fields.PurchaseEmployeeId[this] = value; }
        }

        [DisplayName("Purchase V No"), Expression("jPurchase.[VNo]")]
        public Int64? PurchaseVNo
        {
            get { return Fields.PurchaseVNo[this]; }
            set { Fields.PurchaseVNo[this] = value; }
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

        public GoodsReceiptRow()
        {
        }

        public GoodsReceiptRow(RowFields fields)
            : base(fields)
        {
        }

        

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field SupplierId;
            public Int64Field PurchaseId;
            public DateTimeField Date;
            public DoubleField TotalQuantity;
            public Int64Field EmployeenId;
            public StringField Remarks;
            public StringField JournalRemarks;
            public StringField Reference;
            public readonly RowListField<GoodsReceiptDetailsRow> LineItems;
            public StringField PurchaseBill;

            public StringField EmployeeFullName;
            
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

            public Int64Field PurchaseSupplierId;
            public StringField PurchaseInvoiceNo;
            public DateTimeField PurchaseDate;
            public DoubleField PurchaseDiscount;
            public DoubleField PurchaseTotalDiscount;
            public DoubleField PurchaseShippingCost;
            public DoubleField PurchaseGrandTotal;
            public DoubleField PurchaseNetTotal;
            public DoubleField PurchasePaidAmount;
            public DoubleField PurchaseDue;
            public DoubleField PurchaseChange;
            public StringField PurchaseDetails;
            public Int64Field PurchasePaymentAccount;
            public Int64Field PurchaseEmployeeId;
            public Int64Field PurchaseVNo;

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
