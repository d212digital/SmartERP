namespace SmartERP.Inventory {
    export interface UpdateStocksRow {
        Id?: number;
        ProductId?: number;
        Quantity?: number;
        VNo?: number;
        WarehouseId?: number;
        Mode?: string;
        TransactionType?: string;
        Status?: StatusKind;
        Note?: string;
        InsertDate?: string;
        StockMode?: StockKind;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
        WarehouseInsertDate?: string;
        WarehouseInsertUserId?: number;
        WarehouseUpdateDate?: string;
        WarehouseUpdateUserId?: number;
        WarehouseDeleteDate?: string;
        WarehouseDeleteUserId?: number;
        WarehouseIsActive?: number;
        WarehouseBranchId?: number;
    }

    export namespace UpdateStocksRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Mode';
        export const localTextPrefix = 'Inventory.UpdateStocks';
        export const deletePermission = 'Inventory:Stocks:Delete';
        export const insertPermission = 'Inventory:Stocks:Create';
        export const readPermission = 'Inventory:Stocks:View';
        export const updatePermission = 'Inventory:Stocks:Update';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Quantity = "Quantity",
            VNo = "VNo",
            WarehouseId = "WarehouseId",
            Mode = "Mode",
            TransactionType = "TransactionType",
            Status = "Status",
            Note = "Note",
            InsertDate = "InsertDate",
            StockMode = "StockMode",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress",
            WarehouseInsertDate = "WarehouseInsertDate",
            WarehouseInsertUserId = "WarehouseInsertUserId",
            WarehouseUpdateDate = "WarehouseUpdateDate",
            WarehouseUpdateUserId = "WarehouseUpdateUserId",
            WarehouseDeleteDate = "WarehouseDeleteDate",
            WarehouseDeleteUserId = "WarehouseDeleteUserId",
            WarehouseIsActive = "WarehouseIsActive",
            WarehouseBranchId = "WarehouseBranchId"
        }
    }
}
