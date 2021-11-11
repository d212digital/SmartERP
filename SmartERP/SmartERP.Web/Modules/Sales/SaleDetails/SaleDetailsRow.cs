
namespace SmartERP.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Products.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Sales"), TableName("[dbo].[SaleDetails]")]
    [DisplayName("Sale Details"), InstanceName("Sale Details")]
    [ReadPermission(PermissionKeys.Sales.View)]
    [InsertPermission(PermissionKeys.Sales.Create)]
    [UpdatePermission(PermissionKeys.Sales.Update)]
    [DeletePermission(PermissionKeys.Sales.Delete)]
    public sealed class SaleDetailsRow : SmartERP.LoggingRow<SaleDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty, Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company / Brand"), NotNull, PrimaryKey, ForeignKey("[dbo].[Brands]", "Id"), LeftJoin("jBrand"), TextualField("BrandName"), LookupInclude]
        [LookupEditor(typeof(BrandsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Brands")]
        [NotMapped]
        public Int64? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }
        [DisplayName("Brand Name"), Expression("jBrand.[Name]")]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }
        [DisplayName("Product"), NotNull,PrimaryKey, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", CascadeField = "BrandId", CascadeFrom = "BrandId", DialogType = "Products.Products")]
        public Int64? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }
        [DisplayName("Product Name"), Size(250), QuickSearch,NameProperty]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }
        [DisplayName("Description"), Size(500), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Unit"), NotNull,PrimaryKey, ForeignKey("[dbo].[Units]", "Id"), LeftJoin("jUnit"), TextualField("UnitUnitName")]
        [LookupEditor(typeof(UnitsRow),  FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Units")]
        public Int64? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitUnitName
        {
            get { return Fields.UnitUnitName[this]; }
            set { Fields.UnitUnitName[this] = value; }
        }
        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Unit Price"), NotNull]
        public Double? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Double? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Total"), NotNull]
        public Double? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

       

        [DisplayName("Unit Name"), Size(250), QuickSearch]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }


        [DisplayName("Sale"), NotNull,PrimaryKey, ForeignKey("[dbo].[Sales]", "Id"), LeftJoin("jSale"), TextualField("SaleDetails"),Updatable(false)]
        public Int64? SaleId
        {
            get { return Fields.SaleId[this]; }
            set { Fields.SaleId[this] = value; }
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get { return Fields.ProductBarcode[this]; }
            set { Fields.ProductBarcode[this] = value; }
        }

        [DisplayName("Product Sn"), Expression("jProduct.[SN]")]
        public String ProductSn
        {
            get { return Fields.ProductSn[this]; }
            set { Fields.ProductSn[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Model"), Expression("jProduct.[Model]")]
        public String ProductModel
        {
            get { return Fields.ProductModel[this]; }
            set { Fields.ProductModel[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public Double? ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Double? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Double? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Double? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Double? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public Int64? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Unit Id"), Expression("jProduct.[UnitId]")]
        public Int64? ProductUnitId
        {
            get { return Fields.ProductUnitId[this]; }
            set { Fields.ProductUnitId[this] = value; }
        }

        [DisplayName("Product Image"), Expression("jProduct.[Image]")]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Product Product Details"), Expression("jProduct.[ProductDetails]")]
        public String ProductProductDetails
        {
            get { return Fields.ProductProductDetails[this]; }
            set { Fields.ProductProductDetails[this] = value; }
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

        [DisplayName("Sale Payment Type"), Expression("jSale.[PaymentType]")]
        public Int64? SalePaymentType
        {
            get { return Fields.SalePaymentType[this]; }
            set { Fields.SalePaymentType[this] = value; }
        }

        [DisplayName("Sale Bank Id"), Expression("jSale.[BankId]")]
        public Int64? SaleBankId
        {
            get { return Fields.SaleBankId[this]; }
            set { Fields.SaleBankId[this] = value; }
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

        public SaleDetailsRow()
        {
        }

        public SaleDetailsRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field ProductId;
            public StringField ProductName;
            public StringField Description;
            public Int64Field UnitId;
            public StringField UnitName;

            public DoubleField Quantity;
            public DoubleField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int64Field SaleId;

            public StringField ProductBarcode;
            public StringField ProductSn;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DoubleField ProductQuantityPerUnit;
            public DoubleField ProductUnitPrice;
            public DoubleField ProductUnitsInStock;
            public DoubleField ProductUnitsOnOrder;
            public DoubleField ProductReorderLevel;
            public Int64Field ProductCategoryId;
            public Int64Field ProductUnitId;
            public StringField ProductImage;
            public StringField ProductProductDetails;

            public Int64Field SaleCustomerId;
            public DateTimeField SaleDate;
            public Int64Field SalePaymentType;
            public Int64Field SaleBankId;
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

            public StringField UnitUnitName;

            public Int64Field BrandId;
            public StringField BrandName;
        }
    }
}
