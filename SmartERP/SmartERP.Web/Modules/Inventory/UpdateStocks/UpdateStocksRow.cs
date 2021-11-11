using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Products.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Inventory.Entities
{
    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[Stocks]")]
    [DisplayName("Update Stock"), InstanceName("Update Stock")]
    [ReadPermission(PermissionKeys.Stocks.View)]
    [InsertPermission(PermissionKeys.Stocks.Create)]
    [UpdatePermission(PermissionKeys.Stocks.Update)]
    [DeletePermission(PermissionKeys.Stocks.Delete)]
    public sealed class UpdateStocksRow : Row<UpdateStocksRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(ProductsRow), FilterField = "IsActive", FilterValue = "1")]
        public Int64? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("V No")]
        public Int64? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

       

        [DisplayName("Warehouse"), ForeignKey("[dbo].[Warehouses]", "Id"), LeftJoin("jWarehouse"), TextualField("WarehouseName")]
        [LookupEditor(typeof(Administration.Entities.WarehousesRow), FilterField = "IsActive", FilterValue = "1")]
        public Int64? WarehouseId
        {
            get => fields.WarehouseId[this];
            set => fields.WarehouseId[this] = value;
        }
                

        [DisplayName("Mode"), Size(10), NameProperty]
        public String Mode
        {
            get => fields.Mode[this];
            set => fields.Mode[this] = value;
        }

        [DisplayName("Transaction Type"), Size(50)]
        public String TransactionType
        {
            get => fields.TransactionType[this];
            set => fields.TransactionType[this] = value;
        }

        [DisplayName("Status"), NotNull, DefaultValue(StatusKind.Complete)]
        public StatusKind? Status
        {
            get => (StatusKind?)fields.Status[this];
            set => fields.Status[this] = (Int32)value;
        }

        [DisplayName("Mode"), NotNull, DefaultValue(StockKind.IN),NotMapped]
        public StockKind? StockMode
        {
            get => (StockKind?)fields.StockMode[this];
            set => fields.StockMode[this] = (Int32)value;
        }


        [DisplayName("Note"), Size(4000), NotNull]
        public String Note
        {
            get => fields.Note[this];
            set => fields.Note[this] = value;
        }

        [DisplayName("Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get => fields.ProductBarcode[this];
            set => fields.ProductBarcode[this] = value;
        }

        [DisplayName("Product Sn"), Expression("jProduct.[SN]")]
        public String ProductSn
        {
            get => fields.ProductSn[this];
            set => fields.ProductSn[this] = value;
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get => fields.ProductProductName[this];
            set => fields.ProductProductName[this] = value;
        }

        [DisplayName("Product Model"), Expression("jProduct.[Model]")]
        public String ProductModel
        {
            get => fields.ProductModel[this];
            set => fields.ProductModel[this] = value;
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Double? ProductUnitPrice
        {
            get => fields.ProductUnitPrice[this];
            set => fields.ProductUnitPrice[this] = value;
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Double? ProductUnitsInStock
        {
            get => fields.ProductUnitsInStock[this];
            set => fields.ProductUnitsInStock[this] = value;
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Double? ProductUnitsOnOrder
        {
            get => fields.ProductUnitsOnOrder[this];
            set => fields.ProductUnitsOnOrder[this] = value;
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Double? ProductReorderLevel
        {
            get => fields.ProductReorderLevel[this];
            set => fields.ProductReorderLevel[this] = value;
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public Int64? ProductCategoryId
        {
            get => fields.ProductCategoryId[this];
            set => fields.ProductCategoryId[this] = value;
        }

        [DisplayName("Product Unit Id"), Expression("jProduct.[UnitId]")]
        public Int64? ProductUnitId
        {
            get => fields.ProductUnitId[this];
            set => fields.ProductUnitId[this] = value;
        }

        [DisplayName("Product Brand Id"), Expression("jProduct.[BrandId]")]
        public Int64? ProductBrandId
        {
            get => fields.ProductBrandId[this];
            set => fields.ProductBrandId[this] = value;
        }

        [DisplayName("Product Image"), Expression("jProduct.[Image]")]
        public String ProductImage
        {
            get => fields.ProductImage[this];
            set => fields.ProductImage[this] = value;
        }

        [DisplayName("Product Product Details"), Expression("jProduct.[ProductDetails]")]
        public String ProductProductDetails
        {
            get => fields.ProductProductDetails[this];
            set => fields.ProductProductDetails[this] = value;
        }

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get => fields.ProductInsertDate[this];
            set => fields.ProductInsertDate[this] = value;
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int32? ProductInsertUserId
        {
            get => fields.ProductInsertUserId[this];
            set => fields.ProductInsertUserId[this] = value;
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get => fields.ProductUpdateDate[this];
            set => fields.ProductUpdateDate[this] = value;
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int32? ProductUpdateUserId
        {
            get => fields.ProductUpdateUserId[this];
            set => fields.ProductUpdateUserId[this] = value;
        }

        [DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        public DateTime? ProductDeleteDate
        {
            get => fields.ProductDeleteDate[this];
            set => fields.ProductDeleteDate[this] = value;
        }

        [DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        public Int32? ProductDeleteUserId
        {
            get => fields.ProductDeleteUserId[this];
            set => fields.ProductDeleteUserId[this] = value;
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int32? ProductIsActive
        {
            get => fields.ProductIsActive[this];
            set => fields.ProductIsActive[this] = value;
        }

        [DisplayName("Product Branch Id"), Expression("jProduct.[BranchId]")]
        public Int64? ProductBranchId
        {
            get => fields.ProductBranchId[this];
            set => fields.ProductBranchId[this] = value;
        }

        
        [DisplayName("Warehouse Name"), Expression("jWarehouse.[Name]")]
        public String WarehouseName
        {
            get => fields.WarehouseName[this];
            set => fields.WarehouseName[this] = value;
        }

        [DisplayName("Warehouse Description"), Expression("jWarehouse.[Description]")]
        public String WarehouseDescription
        {
            get => fields.WarehouseDescription[this];
            set => fields.WarehouseDescription[this] = value;
        }

        [DisplayName("Warehouse Country Id"), Expression("jWarehouse.[CountryId]")]
        public Int64? WarehouseCountryId
        {
            get => fields.WarehouseCountryId[this];
            set => fields.WarehouseCountryId[this] = value;
        }

        [DisplayName("Warehouse State Id"), Expression("jWarehouse.[StateId]")]
        public Int64? WarehouseStateId
        {
            get => fields.WarehouseStateId[this];
            set => fields.WarehouseStateId[this] = value;
        }

        [DisplayName("Warehouse City Id"), Expression("jWarehouse.[CityId]")]
        public Int64? WarehouseCityId
        {
            get => fields.WarehouseCityId[this];
            set => fields.WarehouseCityId[this] = value;
        }

        [DisplayName("Warehouse Phone"), Expression("jWarehouse.[Phone]")]
        public String WarehousePhone
        {
            get => fields.WarehousePhone[this];
            set => fields.WarehousePhone[this] = value;
        }

        [DisplayName("Warehouse Address"), Expression("jWarehouse.[Address]")]
        public String WarehouseAddress
        {
            get => fields.WarehouseAddress[this];
            set => fields.WarehouseAddress[this] = value;
        }

        [DisplayName("Warehouse Insert Date"), Expression("jWarehouse.[InsertDate]")]
        public DateTime? WarehouseInsertDate
        {
            get => fields.WarehouseInsertDate[this];
            set => fields.WarehouseInsertDate[this] = value;
        }

        [DisplayName("Warehouse Insert User Id"), Expression("jWarehouse.[InsertUserId]")]
        public Int32? WarehouseInsertUserId
        {
            get => fields.WarehouseInsertUserId[this];
            set => fields.WarehouseInsertUserId[this] = value;
        }

        [DisplayName("Warehouse Update Date"), Expression("jWarehouse.[UpdateDate]")]
        public DateTime? WarehouseUpdateDate
        {
            get => fields.WarehouseUpdateDate[this];
            set => fields.WarehouseUpdateDate[this] = value;
        }

        [DisplayName("Warehouse Update User Id"), Expression("jWarehouse.[UpdateUserId]")]
        public Int32? WarehouseUpdateUserId
        {
            get => fields.WarehouseUpdateUserId[this];
            set => fields.WarehouseUpdateUserId[this] = value;
        }

        [DisplayName("Warehouse Delete Date"), Expression("jWarehouse.[DeleteDate]")]
        public DateTime? WarehouseDeleteDate
        {
            get => fields.WarehouseDeleteDate[this];
            set => fields.WarehouseDeleteDate[this] = value;
        }

        [DisplayName("Warehouse Delete User Id"), Expression("jWarehouse.[DeleteUserId]")]
        public Int32? WarehouseDeleteUserId
        {
            get => fields.WarehouseDeleteUserId[this];
            set => fields.WarehouseDeleteUserId[this] = value;
        }

        [DisplayName("Warehouse Is Active"), Expression("jWarehouse.[IsActive]")]
        public Int32? WarehouseIsActive
        {
            get => fields.WarehouseIsActive[this];
            set => fields.WarehouseIsActive[this] = value;
        }

        [DisplayName("Warehouse Branch Id"), Expression("jWarehouse.[BranchId]")]
        public Int64? WarehouseBranchId
        {
            get => fields.WarehouseBranchId[this];
            set => fields.WarehouseBranchId[this] = value;
        }

        public UpdateStocksRow()
            : base()
        {
        }

        public UpdateStocksRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field ProductId;
            public DoubleField Quantity;
            public Int64Field VNo;           
            public Int64Field WarehouseId;
            public StringField Mode;
            public StringField TransactionType;
            public Int32Field Status;
            public StringField Note;
            public DateTimeField InsertDate;
            public Int32Field StockMode;
            

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
            public Int64Field ProductBranchId;

            

            public StringField WarehouseName;
            public StringField WarehouseDescription;
            public Int64Field WarehouseCountryId;
            public Int64Field WarehouseStateId;
            public Int64Field WarehouseCityId;
            public StringField WarehousePhone;
            public StringField WarehouseAddress;
            public DateTimeField WarehouseInsertDate;
            public Int32Field WarehouseInsertUserId;
            public DateTimeField WarehouseUpdateDate;
            public Int32Field WarehouseUpdateUserId;
            public DateTimeField WarehouseDeleteDate;
            public Int32Field WarehouseDeleteUserId;
            public Int32Field WarehouseIsActive;
            public Int64Field WarehouseBranchId;
        }
    }
}
