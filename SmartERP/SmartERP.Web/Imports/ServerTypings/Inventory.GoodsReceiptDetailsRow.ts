namespace SmartERP.Inventory {
    export interface GoodsReceiptDetailsRow {
        Id?: number;
        GoodsReceiptId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        WarehouseWarehouseName?: string;
        GoodsReceiptSupplierId?: number;
        GoodsReceiptPurchaseId?: number;
        GoodsReceiptDate?: string;
        GoodsReceiptTotalQuantity?: number;
        GoodsReceiptEmployeenId?: number;
        GoodsReceiptRemarks?: string;
        GoodsReceiptJournalRemarks?: string;
        GoodsReceiptReference?: string;
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
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace GoodsReceiptDetailsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Inventory.GoodsReceiptDetails';
        export const deletePermission = 'Inventory:Goods Receipt:Delete';
        export const insertPermission = 'Inventory:Goods Receipt:Create';
        export const readPermission = 'Inventory:Goods Receipt:View';
        export const updatePermission = 'Inventory:Goods Receipt:Update';

        export declare const enum Fields {
            Id = "Id",
            GoodsReceiptId = "GoodsReceiptId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            WarehouseWarehouseName = "WarehouseWarehouseName",
            GoodsReceiptSupplierId = "GoodsReceiptSupplierId",
            GoodsReceiptPurchaseId = "GoodsReceiptPurchaseId",
            GoodsReceiptDate = "GoodsReceiptDate",
            GoodsReceiptTotalQuantity = "GoodsReceiptTotalQuantity",
            GoodsReceiptEmployeenId = "GoodsReceiptEmployeenId",
            GoodsReceiptRemarks = "GoodsReceiptRemarks",
            GoodsReceiptJournalRemarks = "GoodsReceiptJournalRemarks",
            GoodsReceiptReference = "GoodsReceiptReference",
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
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
