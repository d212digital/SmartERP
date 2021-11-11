
namespace SmartERP.Quotations.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Products.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Quotations"), TableName("[dbo].[QuotationDetails]")]
    [DisplayName("Quotation Details"), InstanceName("Quotation Details")]
    [ReadPermission(Sales.PermissionKeys.Quotations.View)]
    [InsertPermission(Sales.PermissionKeys.Quotations.Create)]
    [UpdatePermission(Sales.PermissionKeys.Quotations.Update)]
    [DeletePermission(Sales.PermissionKeys.Quotations.Delete)]
    public sealed class QuotationDetailsRow : SmartERP.LoggingRow<QuotationDetailsRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Description"), Size(500), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Product Name"), Size(250), QuickSearch,NameProperty]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Unit Name"), Size(250), QuickSearch]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }
        [DisplayName("Unit"), NotNull,PrimaryKey, ForeignKey("[dbo].[Units]", "Id"), LeftJoin("jUnit"), TextualField("UnitUnitName")]
        [LookupEditor(typeof(UnitsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Units")]
        public Int64? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
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

        [DisplayName("Discount (%)"), NotNull]
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

        [DisplayName("Quotation"), NotNull,PrimaryKey, ForeignKey("[dbo].[Quotations]", "Id"), LeftJoin("jQuotation"), TextualField("QuotationDetails")]
        public Int64? QuotationId
        {
            get { return Fields.QuotationId[this]; }
            set { Fields.QuotationId[this] = value; }
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

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]")]
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

        [DisplayName("Product Brand Id"), Expression("jProduct.[BrandId]")]
        public Int64? ProductBrandId
        {
            get { return Fields.ProductBrandId[this]; }
            set { Fields.ProductBrandId[this] = value; }
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

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get { return Fields.ProductInsertDate[this]; }
            set { Fields.ProductInsertDate[this] = value; }
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int32? ProductInsertUserId
        {
            get { return Fields.ProductInsertUserId[this]; }
            set { Fields.ProductInsertUserId[this] = value; }
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get { return Fields.ProductUpdateDate[this]; }
            set { Fields.ProductUpdateDate[this] = value; }
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int32? ProductUpdateUserId
        {
            get { return Fields.ProductUpdateUserId[this]; }
            set { Fields.ProductUpdateUserId[this] = value; }
        }

        [DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        public DateTime? ProductDeleteDate
        {
            get { return Fields.ProductDeleteDate[this]; }
            set { Fields.ProductDeleteDate[this] = value; }
        }

        [DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        public Int32? ProductDeleteUserId
        {
            get { return Fields.ProductDeleteUserId[this]; }
            set { Fields.ProductDeleteUserId[this] = value; }
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int32? ProductIsActive
        {
            get { return Fields.ProductIsActive[this]; }
            set { Fields.ProductIsActive[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitUnitName
        {
            get { return Fields.UnitUnitName[this]; }
            set { Fields.UnitUnitName[this] = value; }
        }

        [DisplayName("Unit Description"), Expression("jUnit.[Description]")]
        public String UnitDescription
        {
            get { return Fields.UnitDescription[this]; }
            set { Fields.UnitDescription[this] = value; }
        }

        [DisplayName("Unit Insert Date"), Expression("jUnit.[InsertDate]")]
        public DateTime? UnitInsertDate
        {
            get { return Fields.UnitInsertDate[this]; }
            set { Fields.UnitInsertDate[this] = value; }
        }

        [DisplayName("Unit Insert User Id"), Expression("jUnit.[InsertUserId]")]
        public Int32? UnitInsertUserId
        {
            get { return Fields.UnitInsertUserId[this]; }
            set { Fields.UnitInsertUserId[this] = value; }
        }

        [DisplayName("Unit Update Date"), Expression("jUnit.[UpdateDate]")]
        public DateTime? UnitUpdateDate
        {
            get { return Fields.UnitUpdateDate[this]; }
            set { Fields.UnitUpdateDate[this] = value; }
        }

        [DisplayName("Unit Update User Id"), Expression("jUnit.[UpdateUserId]")]
        public Int32? UnitUpdateUserId
        {
            get { return Fields.UnitUpdateUserId[this]; }
            set { Fields.UnitUpdateUserId[this] = value; }
        }

        [DisplayName("Unit Delete Date"), Expression("jUnit.[DeleteDate]")]
        public DateTime? UnitDeleteDate
        {
            get { return Fields.UnitDeleteDate[this]; }
            set { Fields.UnitDeleteDate[this] = value; }
        }

        [DisplayName("Unit Delete User Id"), Expression("jUnit.[DeleteUserId]")]
        public Int32? UnitDeleteUserId
        {
            get { return Fields.UnitDeleteUserId[this]; }
            set { Fields.UnitDeleteUserId[this] = value; }
        }

        [DisplayName("Unit Is Active"), Expression("jUnit.[IsActive]")]
        public Int32? UnitIsActive
        {
            get { return Fields.UnitIsActive[this]; }
            set { Fields.UnitIsActive[this] = value; }
        }

        [DisplayName("Quotation Customer Id"), Expression("jQuotation.[CustomerId]")]
        public Int64? QuotationCustomerId
        {
            get { return Fields.QuotationCustomerId[this]; }
            set { Fields.QuotationCustomerId[this] = value; }
        }

        [DisplayName("Quotation Date"), Expression("jQuotation.[Date]")]
        public DateTime? QuotationDate
        {
            get { return Fields.QuotationDate[this]; }
            set { Fields.QuotationDate[this] = value; }
        }

        [DisplayName("Quotation Discount"), Expression("jQuotation.[Discount]")]
        public Double? QuotationDiscount
        {
            get { return Fields.QuotationDiscount[this]; }
            set { Fields.QuotationDiscount[this] = value; }
        }

        [DisplayName("Quotation Total Discount"), Expression("jQuotation.[TotalDiscount]")]
        public Double? QuotationTotalDiscount
        {
            get { return Fields.QuotationTotalDiscount[this]; }
            set { Fields.QuotationTotalDiscount[this] = value; }
        }

        [DisplayName("Quotation Vat"), Expression("jQuotation.[Vat]")]
        public Double? QuotationVat
        {
            get { return Fields.QuotationVat[this]; }
            set { Fields.QuotationVat[this] = value; }
        }

        [DisplayName("Quotation Total Tax"), Expression("jQuotation.[TotalTax]")]
        public Double? QuotationTotalTax
        {
            get { return Fields.QuotationTotalTax[this]; }
            set { Fields.QuotationTotalTax[this] = value; }
        }

        [DisplayName("Quotation Shipping Cost"), Expression("jQuotation.[ShippingCost]")]
        public Double? QuotationShippingCost
        {
            get { return Fields.QuotationShippingCost[this]; }
            set { Fields.QuotationShippingCost[this] = value; }
        }

        [DisplayName("Quotation Grand Total"), Expression("jQuotation.[GrandTotal]")]
        public Double? QuotationGrandTotal
        {
            get { return Fields.QuotationGrandTotal[this]; }
            set { Fields.QuotationGrandTotal[this] = value; }
        }

        [DisplayName("Quotation Net Total"), Expression("jQuotation.[NetTotal]")]
        public Double? QuotationNetTotal
        {
            get { return Fields.QuotationNetTotal[this]; }
            set { Fields.QuotationNetTotal[this] = value; }
        }

        [DisplayName("Quotation Details"), Expression("jQuotation.[Details]")]
        public String QuotationDetails
        {
            get { return Fields.QuotationDetails[this]; }
            set { Fields.QuotationDetails[this] = value; }
        }

        [DisplayName("Quotation Expiry Date"), Expression("jQuotation.[ExpiryDate]")]
        public DateTime? QuotationExpiryDate
        {
            get { return Fields.QuotationExpiryDate[this]; }
            set { Fields.QuotationExpiryDate[this] = value; }
        }

        public QuotationDetailsRow()
        {
        }

        public QuotationDetailsRow(RowFields fields)
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
            public Int64Field QuotationId;

            public StringField ProductBarcode;
            public StringField ProductSn;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DoubleField ProductUnitPrice;
            public DoubleField ProductUnitsInStock;
            public DoubleField ProductUnitsOnOrder;
            public DoubleField ProductReorderLevel;
            public Int64Field ProductCategoryId;
            public Int64Field ProductUnitId;
            public Int64Field ProductBrandId;
            public StringField ProductImage;
            public StringField ProductProductDetails;
            public DateTimeField ProductInsertDate;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public DateTimeField ProductDeleteDate;
            public Int32Field ProductDeleteUserId;
            public Int32Field ProductIsActive;

            public StringField UnitUnitName;
            public StringField UnitDescription;
            public DateTimeField UnitInsertDate;
            public Int32Field UnitInsertUserId;
            public DateTimeField UnitUpdateDate;
            public Int32Field UnitUpdateUserId;
            public DateTimeField UnitDeleteDate;
            public Int32Field UnitDeleteUserId;
            public Int32Field UnitIsActive;

            public Int64Field QuotationCustomerId;
            public DateTimeField QuotationDate;
            public DoubleField QuotationDiscount;
            public DoubleField QuotationTotalDiscount;
            public DoubleField QuotationVat;
            public DoubleField QuotationTotalTax;
            public DoubleField QuotationShippingCost;
            public DoubleField QuotationGrandTotal;
            public DoubleField QuotationNetTotal;
            public StringField QuotationDetails;
            public DateTimeField QuotationExpiryDate;

            public Int64Field BrandId;
            public StringField BrandName;
        }
    }
}
