
namespace SmartERP.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[DamagedProducts]")]
    [DisplayName("Damaged Products"), InstanceName("Damaged Products")]
    
    [ReadPermission(PermissionKeys.DamagedProducts.View)]
    [InsertPermission(PermissionKeys.DamagedProducts.Create)]
    [UpdatePermission(PermissionKeys.DamagedProducts.Update)]
    [DeletePermission(PermissionKeys.DamagedProducts.Delete)]

    [LookupScript("Inventory.DamagedProducts", Permission = PermissionKeys.DamagedProducts.View)]
    public sealed class DamagedProductsRow : SmartERP.LoggingRow<DamagedProductsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(250), QuickSearch,NameProperty]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Category"), NotNull,PrimaryKey, ForeignKey("[dbo].[Categories]", "Id"), LeftJoin("jCategory"), TextualField("CategoryName")]
        [Products.CategoriesEditor(InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Categories")]
        public Int64? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Purchase Price"), NotNull]
        public Double? PurchasePrice
        {
            get { return Fields.PurchasePrice[this]; }
            set { Fields.PurchasePrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Note"), Size(4000)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Product"), NotNull, PrimaryKey, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode")]
        [LookupEditor(typeof(Products.Entities.ProductsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Products")]
        public Int64? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
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

        [DisplayName("Category Parent Category Id"), Expression("jCategory.[ParentCategoryId]")]
        public Int64? CategoryParentCategoryId
        {
            get { return Fields.CategoryParentCategoryId[this]; }
            set { Fields.CategoryParentCategoryId[this] = value; }
        }

        [DisplayName("Category Insert Date"), Expression("jCategory.[InsertDate]")]
        public DateTime? CategoryInsertDate
        {
            get { return Fields.CategoryInsertDate[this]; }
            set { Fields.CategoryInsertDate[this] = value; }
        }

        [DisplayName("Category Insert User Id"), Expression("jCategory.[InsertUserId]")]
        public Int32? CategoryInsertUserId
        {
            get { return Fields.CategoryInsertUserId[this]; }
            set { Fields.CategoryInsertUserId[this] = value; }
        }

        [DisplayName("Category Update Date"), Expression("jCategory.[UpdateDate]")]
        public DateTime? CategoryUpdateDate
        {
            get { return Fields.CategoryUpdateDate[this]; }
            set { Fields.CategoryUpdateDate[this] = value; }
        }

        [DisplayName("Category Update User Id"), Expression("jCategory.[UpdateUserId]")]
        public Int32? CategoryUpdateUserId
        {
            get { return Fields.CategoryUpdateUserId[this]; }
            set { Fields.CategoryUpdateUserId[this] = value; }
        }

        [DisplayName("Category Delete Date"), Expression("jCategory.[DeleteDate]")]
        public DateTime? CategoryDeleteDate
        {
            get { return Fields.CategoryDeleteDate[this]; }
            set { Fields.CategoryDeleteDate[this] = value; }
        }

        [DisplayName("Category Delete User Id"), Expression("jCategory.[DeleteUserId]")]
        public Int32? CategoryDeleteUserId
        {
            get { return Fields.CategoryDeleteUserId[this]; }
            set { Fields.CategoryDeleteUserId[this] = value; }
        }

        [DisplayName("Category Is Active"), Expression("jCategory.[IsActive]")]
        public Int32? CategoryIsActive
        {
            get { return Fields.CategoryIsActive[this]; }
            set { Fields.CategoryIsActive[this] = value; }
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
        [DisplayName("VNo"), Hidden]
        public Int64? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }
        public DamagedProductsRow()
        {
        }

        public DamagedProductsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Code;
            public StringField Name;
            public Int64Field CategoryId;
            public DoubleField PurchasePrice;
            public DoubleField Quantity;
            public DateTimeField Date;
            public StringField Note;
            public Int64Field ProductId;
            public Int64Field VNo;

            public StringField CategoryName;
            public StringField CategoryDescription;
            public Int64Field CategoryParentCategoryId;
            public DateTimeField CategoryInsertDate;
            public Int32Field CategoryInsertUserId;
            public DateTimeField CategoryUpdateDate;
            public Int32Field CategoryUpdateUserId;
            public DateTimeField CategoryDeleteDate;
            public Int32Field CategoryDeleteUserId;
            public Int32Field CategoryIsActive;

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
        }
    }
}
