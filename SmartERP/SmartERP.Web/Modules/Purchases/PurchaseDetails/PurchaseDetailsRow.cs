
namespace SmartERP.Purchases.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartERP.Products.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Purchases"), TableName("[dbo].[PurchaseDetails]")]
    [DisplayName("Purchase Details"), InstanceName("Purchase Details")]

    [ReadPermission(PermissionKeys.Purchases.View)]
    [InsertPermission(PermissionKeys.Purchases.Create)]
    [UpdatePermission(PermissionKeys.Purchases.Update)]
    [DeletePermission(PermissionKeys.Purchases.Delete)]
    public sealed class PurchaseDetailsRow : SmartERP.LoggingRow<PurchaseDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, Unique]
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
        [DisplayName("Unit Name"), Size(250), QuickSearch]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
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

        [DisplayName("Purchase"), NotNull, PrimaryKey, ForeignKey("[dbo].[Purchases]", "Id"), LeftJoin("jPurchase"), TextualField("PurchaseInvoiceNo")]
        public Int64? PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
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

        [DisplayName("Purchase Payment Type"), Expression("jPurchase.[PaymentType]")]
        public Int64? PurchasePaymentType
        {
            get { return Fields.PurchasePaymentType[this]; }
            set { Fields.PurchasePaymentType[this] = value; }
        }

        [DisplayName("Purchase Bank Id"), Expression("jPurchase.[BankId]")]
        public Int64? PurchaseBankId
        {
            get { return Fields.PurchaseBankId[this]; }
            set { Fields.PurchaseBankId[this] = value; }
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

        [DisplayName("Purchase Vat"), Expression("jPurchase.[Vat]")]
        public Double? PurchaseVat
        {
            get { return Fields.PurchaseVat[this]; }
            set { Fields.PurchaseVat[this] = value; }
        }

        [DisplayName("Purchase Total Tax"), Expression("jPurchase.[TotalTax]")]
        public Double? PurchaseTotalTax
        {
            get { return Fields.PurchaseTotalTax[this]; }
            set { Fields.PurchaseTotalTax[this] = value; }
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

        public PurchaseDetailsRow()
        {
        }

        public PurchaseDetailsRow(RowFields fields)
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
            public Int64Field PurchaseId;

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

            public Int64Field PurchaseSupplierId;
            public StringField PurchaseInvoiceNo;
            public DateTimeField PurchaseDate;
            public Int64Field PurchasePaymentType;
            public Int64Field PurchaseBankId;
            public DoubleField PurchaseDiscount;
            public DoubleField PurchaseTotalDiscount;
            public DoubleField PurchaseVat;
            public DoubleField PurchaseTotalTax;
            public DoubleField PurchaseShippingCost;
            public DoubleField PurchaseGrandTotal;
            public DoubleField PurchaseNetTotal;
            public DoubleField PurchasePaidAmount;
            public DoubleField PurchaseDue;
            public DoubleField PurchaseChange;
            public StringField PurchaseDetails;

            public StringField UnitUnitName;

            public Int64Field BrandId;
            public StringField BrandName;
        }
    }
}
