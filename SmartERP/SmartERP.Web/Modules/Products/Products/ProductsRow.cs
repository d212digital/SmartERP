
namespace SmartERP.Products.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Products"), TableName("[dbo].[Products]")]
    [DisplayName("Products"), InstanceName("Products")]
    [ReadPermission(Inventory.PermissionKeys.Products.View)]
    [InsertPermission(Inventory.PermissionKeys.Products.Create)]
    [UpdatePermission(Inventory.PermissionKeys.Products.Update)]
    [DeletePermission(Inventory.PermissionKeys.Products.Delete)]

    [LookupScript("Products.Products", Permission = Inventory.PermissionKeys.Products.View)]
    public sealed class ProductsRow : SmartERP.LoggingRow<ProductsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Product Code"), Size(250), QuickSearch, LookupInclude]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
        }

        [DisplayName("Sn"), Column("SN"), Size(250), LookupInclude]
        public String Sn
        {
            get { return Fields.Sn[this]; }
            set { Fields.Sn[this] = value; }
        }

        [DisplayName("Product Name"), Size(250),LookupInclude,NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }
        [DisplayName("Product Title"), Size(250), NameProperty, LookupInclude]
        [Column("ProductListName"), Expression("t0.[Barcode] +' - '+ t0.[ProductName]")]
        public String ProductListName
        {
            get { return Fields.ProductListName[this]; }
            set { Fields.ProductListName[this] = value; }
        }
        
        [DisplayName("Model"), Size(250), LookupInclude]
        public String Model
        {
            get { return Fields.Model[this]; }
            set { Fields.Model[this] = value; }
        }

        [DisplayName("Unit Price"), NotNull,LookupInclude]
        public Double? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Units In Stock"), NotNull, LookupInclude]
        public Double? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Units On Order"), NotNull, LookupInclude]
        public Double? UnitsOnOrder
        {
            get { return Fields.UnitsOnOrder[this]; }
            set { Fields.UnitsOnOrder[this] = value; }
        }

        [DisplayName("Reorder Level"), NotNull]
        public Double? ReorderLevel
        {
            get { return Fields.ReorderLevel[this]; }
            set { Fields.ReorderLevel[this] = value; }
        }

        [DisplayName("Category"), NotNull,PrimaryKey, ForeignKey("[dbo].[Categories]", "Id"), LeftJoin("jCategory"), TextualField("CategoryName"), LookupInclude]        
        [CategoriesEditor(InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Categories")]
        public Int64? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Unit"), NotNull,PrimaryKey, ForeignKey("[dbo].[Units]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]       
        [LookupEditor(typeof(UnitsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Units"),LookupInclude]
        public Int64? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Company / Brand"), NotNull,PrimaryKey, ForeignKey("[dbo].[Brands]", "Id"), LeftJoin("jBrand"), TextualField("BrandName"), LookupInclude]
        [LookupEditor(typeof(BrandsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Brands")]
        public Int64? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }


        [DisplayName("Image"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Image
        {
            get { return Fields.Image[this]; }
            set { Fields.Image[this] = value; }
        }

        [DisplayName("Product Details"), Size(4000)]
        public String ProductDetails
        {
            get { return Fields.ProductDetails[this]; }
            set { Fields.ProductDetails[this] = value; }
        }

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Description"), Expression("jCategory.[Description]")]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Brand Name"), Expression("jBrand.[Name]")]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        [DisplayName("Unit Description"), Expression("jUnit.[Description]")]
        public String UnitDescription
        {
            get { return Fields.UnitDescription[this]; }
            set { Fields.UnitDescription[this] = value; }
        }

        [DisplayName("Purchase Price"),Column("PurchasePrice"), Expression("(SELECT AVG(pd.[UnitPrice])  FROM [dbo].[PurchaseDetails] pd where pd.[ProductId]=t0.[Id])"), LookupInclude]
        public double? PurchasePrice
        {
            get { return Fields.PurchasePrice[this]; }
            set { Fields.PurchasePrice[this] = value; }
        }
        [DisplayName("Qty In"), Column("QtyIn"), Expression("(ISNULL((SELECT SUM([Quantity]) FROM [dbo].[Stocks] WHERE [Status]=2 AND [Mode]='IN' AND [ProductId]=t0.[Id]),0))"), LookupInclude]
        //[DisplayName("Qty In"), Column("QtyIn"), Expression("(SELECT SUM(pd.[Quantity])  FROM [dbo].[PurchaseDetails] pd where pd.[ProductId]=t0.[Id])"), LookupInclude]
        public double? QtyIn
        {
            get { return Fields.QtyOut[this]; }
            set { Fields.QtyOut[this] = value; }
        }
        [DisplayName("Qty Out"), Column("QtyOut"), Expression("(ISNULL((SELECT SUM([Quantity]) FROM [dbo].[Stocks] WHERE [Status]=2 AND [Mode]='OUT' AND [ProductId]=t0.[Id]),0))"), LookupInclude]
        //[DisplayName("Qty Out"), Column("QtyOut"), Expression("(SELECT SUM(sd.[Quantity])  FROM [dbo].[SaleDetails] sd where sd.[ProductId]=t0.[Id])"), LookupInclude]
        public double? QtyOut
        {
            get { return Fields.QtyOut[this]; }
            set { Fields.QtyOut[this] = value; }
        }
        [DisplayName("Stock"), Column("Stock"), Expression("((ISNULL((SELECT SUM([Quantity]) FROM [dbo].[Stocks] WHERE [Status]=2 AND [Mode]='IN' AND [ProductId]=t0.[Id]),0)) - (ISNULL((SELECT SUM([Quantity]) FROM [dbo].[Stocks] WHERE [Status]=2 AND [Mode]='OUT' AND [ProductId]=t0.[Id]),0)))"), LookupInclude]
        //[DisplayName("Stock"), Column("Stock"), Expression("((SELECT SUM(pd.[Quantity])  FROM [dbo].[PurchaseDetails] pd where pd.[ProductId]=t0.[Id]) - (SELECT SUM(sd.[Quantity])  FROM [dbo].[SaleDetails] sd where sd.[ProductId]=t0.[Id]))"), LookupInclude]
        public double? Stock
        {
            get { return Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        }

        public ProductsRow()
        {
        }

        public ProductsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Barcode;
            public StringField Sn;
            public StringField ProductName;
            public StringField Model;           
            public DoubleField UnitPrice;
            public DoubleField UnitsInStock;
            public DoubleField UnitsOnOrder;
            public DoubleField ReorderLevel;
            public Int64Field CategoryId;
            public Int64Field UnitId;
            public Int64Field BrandId;
            public StringField Image;
            public StringField ProductDetails;
            public StringField ProductListName;

            public StringField CategoryName;
            public StringField CategoryDescription;

            public StringField UnitName;
            public StringField UnitDescription;

            public StringField BrandName;

            public DoubleField PurchasePrice;

            public DoubleField QtyOut;
            public DoubleField QtyIn;
            public DoubleField Stock;

        }
    }
}
