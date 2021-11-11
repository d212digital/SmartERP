namespace SmartERP.Inventory {
    export interface GoodsIssueDetailsRow {
        Id?: number;
        GoodsIssueId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        WarehouseWarehouseName?: string;
        GoodsIssueCustomerId?: number;
        GoodsIssueSaleId?: number;
        GoodsIssueDate?: string;
        GoodsIssueTotalQuantity?: number;
        GoodsIssueEmployeenId?: number;
        GoodsIssueRemarks?: string;
        GoodsIssueJournalRemarks?: string;
        GoodsIssueReference?: string;
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

    export namespace GoodsIssueDetailsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Inventory.GoodsIssueDetails';
        export const deletePermission = 'Inventory:Goods Issue:Delete';
        export const insertPermission = 'Inventory:Goods Issue:Create';
        export const readPermission = 'Inventory:Goods Issue:View';
        export const updatePermission = 'Inventory:Goods Issue:Update';

        export declare const enum Fields {
            Id = "Id",
            GoodsIssueId = "GoodsIssueId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            WarehouseWarehouseName = "WarehouseWarehouseName",
            GoodsIssueCustomerId = "GoodsIssueCustomerId",
            GoodsIssueSaleId = "GoodsIssueSaleId",
            GoodsIssueDate = "GoodsIssueDate",
            GoodsIssueTotalQuantity = "GoodsIssueTotalQuantity",
            GoodsIssueEmployeenId = "GoodsIssueEmployeenId",
            GoodsIssueRemarks = "GoodsIssueRemarks",
            GoodsIssueJournalRemarks = "GoodsIssueJournalRemarks",
            GoodsIssueReference = "GoodsIssueReference",
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
