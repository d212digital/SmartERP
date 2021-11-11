
namespace SmartERP.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[GoodsIssueDetails]")]
    [DisplayName("Goods Issue Details"), InstanceName("Goods Issue Details")]
    [ReadPermission(PermissionKeys.GoodsIssue.View)]
    [InsertPermission(PermissionKeys.GoodsIssue.Create)]
    [UpdatePermission(PermissionKeys.GoodsIssue.Update)]
    [DeletePermission(PermissionKeys.GoodsIssue.Delete)]
    public sealed class GoodsIssueDetailsRow : SmartERP.LoggingRow<GoodsIssueDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Goods Issue"), NotNull,PrimaryKey, ForeignKey("[dbo].[GoodsIssue]", "Id"), LeftJoin("jGoodsIssue"), TextualField("GoodsIssueRemarks")]
        public Int64? GoodsIssueId
        {
            get { return Fields.GoodsIssueId[this]; }
            set { Fields.GoodsIssueId[this] = value; }
        }

        [DisplayName("Product"), NotNull, PrimaryKey, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(Products.Entities.ProductsRow), FilterField = "IsActive", FilterValue = "1")]
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

        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Warehouse"), NotNull, PrimaryKey, ForeignKey("[dbo].[Warehouses]", "Id"), LeftJoin("jWarehouse"), TextualField("WarehouseWarehouseName")]
        [LookupEditor(typeof(Administration.Entities.WarehousesRow), FilterField = "IsActive", FilterValue = "1")]
        public Int64? WarehouseId
        {
            get { return Fields.WarehouseId[this]; }
            set { Fields.WarehouseId[this] = value; }
        }

        [DisplayName("Goods Issue Customer Id"), Expression("jGoodsIssue.[CustomerId]")]
        public Int64? GoodsIssueCustomerId
        {
            get { return Fields.GoodsIssueCustomerId[this]; }
            set { Fields.GoodsIssueCustomerId[this] = value; }
        }

        [DisplayName("Goods Issue Sale Id"), Expression("jGoodsIssue.[SaleId]")]
        public Int64? GoodsIssueSaleId
        {
            get { return Fields.GoodsIssueSaleId[this]; }
            set { Fields.GoodsIssueSaleId[this] = value; }
        }

        [DisplayName("Goods Issue Date"), Expression("jGoodsIssue.[Date]")]
        public DateTime? GoodsIssueDate
        {
            get { return Fields.GoodsIssueDate[this]; }
            set { Fields.GoodsIssueDate[this] = value; }
        }

        [DisplayName("Goods Issue Total Quantity"), Expression("jGoodsIssue.[TotalQuantity]")]
        public Double? GoodsIssueTotalQuantity
        {
            get { return Fields.GoodsIssueTotalQuantity[this]; }
            set { Fields.GoodsIssueTotalQuantity[this] = value; }
        }

        [DisplayName("Goods Issue Employeen Id"), Expression("jGoodsIssue.[EmployeenId]")]
        public Int64? GoodsIssueEmployeenId
        {
            get { return Fields.GoodsIssueEmployeenId[this]; }
            set { Fields.GoodsIssueEmployeenId[this] = value; }
        }

        [DisplayName("Goods Issue Remarks"), Expression("jGoodsIssue.[Remarks]")]
        public String GoodsIssueRemarks
        {
            get { return Fields.GoodsIssueRemarks[this]; }
            set { Fields.GoodsIssueRemarks[this] = value; }
        }

        [DisplayName("Goods Issue Journal Remarks"), Expression("jGoodsIssue.[JournalRemarks]")]
        public String GoodsIssueJournalRemarks
        {
            get { return Fields.GoodsIssueJournalRemarks[this]; }
            set { Fields.GoodsIssueJournalRemarks[this] = value; }
        }

        [DisplayName("Goods Issue Reference"), Expression("jGoodsIssue.[Reference]")]
        public String GoodsIssueReference
        {
            get { return Fields.GoodsIssueReference[this]; }
            set { Fields.GoodsIssueReference[this] = value; }
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

        [DisplayName("Warehouse Name"), Expression("jWarehouse.[Name]")]
        public String WarehouseWarehouseName
        {
            get { return Fields.WarehouseWarehouseName[this]; }
            set { Fields.WarehouseWarehouseName[this] = value; }
        }
        [DisplayName("Warehouse Name"), NotNull]
        public String WarehouseName
        {
            get { return Fields.WarehouseName[this]; }
            set { Fields.WarehouseName[this] = value; }
        }

        [DisplayName("Warehouse Description"), Expression("jWarehouse.[Description]")]
        public String WarehouseDescription
        {
            get { return Fields.WarehouseDescription[this]; }
            set { Fields.WarehouseDescription[this] = value; }
        }

        [DisplayName("Warehouse Country Id"), Expression("jWarehouse.[CountryId]")]
        public Int64? WarehouseCountryId
        {
            get { return Fields.WarehouseCountryId[this]; }
            set { Fields.WarehouseCountryId[this] = value; }
        }

        [DisplayName("Warehouse State Id"), Expression("jWarehouse.[StateId]")]
        public Int64? WarehouseStateId
        {
            get { return Fields.WarehouseStateId[this]; }
            set { Fields.WarehouseStateId[this] = value; }
        }

        [DisplayName("Warehouse City Id"), Expression("jWarehouse.[CityId]")]
        public Int64? WarehouseCityId
        {
            get { return Fields.WarehouseCityId[this]; }
            set { Fields.WarehouseCityId[this] = value; }
        }

        [DisplayName("Warehouse Phone"), Expression("jWarehouse.[Phone]")]
        public String WarehousePhone
        {
            get { return Fields.WarehousePhone[this]; }
            set { Fields.WarehousePhone[this] = value; }
        }

        [DisplayName("Warehouse Address"), Expression("jWarehouse.[Address]")]
        public String WarehouseAddress
        {
            get { return Fields.WarehouseAddress[this]; }
            set { Fields.WarehouseAddress[this] = value; }
        }

        public GoodsIssueDetailsRow()
        {
        }

        public GoodsIssueDetailsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field GoodsIssueId;
            public Int64Field ProductId;
            public StringField ProductName;
            public StringField Description;
            public DoubleField Quantity;
            public Int64Field WarehouseId;
            public StringField WarehouseWarehouseName;
            

            public Int64Field GoodsIssueCustomerId;
            public Int64Field GoodsIssueSaleId;
            public DateTimeField GoodsIssueDate;
            public DoubleField GoodsIssueTotalQuantity;
            public Int64Field GoodsIssueEmployeenId;
            public StringField GoodsIssueRemarks;
            public StringField GoodsIssueJournalRemarks;
            public StringField GoodsIssueReference;

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

            public StringField WarehouseName;
            public StringField WarehouseDescription;
            public Int64Field WarehouseCountryId;
            public Int64Field WarehouseStateId;
            public Int64Field WarehouseCityId;
            public StringField WarehousePhone;
            public StringField WarehouseAddress;
        }
    }
}
