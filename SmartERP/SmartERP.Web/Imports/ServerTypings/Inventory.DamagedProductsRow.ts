namespace SmartERP.Inventory {
    export interface DamagedProductsRow {
        Id?: number;
        Code?: string;
        Name?: string;
        CategoryId?: number;
        PurchasePrice?: number;
        Quantity?: number;
        Date?: string;
        Note?: string;
        ProductId?: number;
        VNo?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
        CategoryInsertDate?: string;
        CategoryInsertUserId?: number;
        CategoryUpdateDate?: string;
        CategoryUpdateUserId?: number;
        CategoryDeleteDate?: string;
        CategoryDeleteUserId?: number;
        CategoryIsActive?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace DamagedProductsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Inventory.DamagedProducts';
        export const lookupKey = 'Inventory.DamagedProducts';

        export function getLookup(): Q.Lookup<DamagedProductsRow> {
            return Q.getLookup<DamagedProductsRow>('Inventory.DamagedProducts');
        }
        export const deletePermission = 'Inventory:Damaged Product:Delete';
        export const insertPermission = 'Inventory:Damaged Product:Create';
        export const readPermission = 'Inventory:Damaged Product:View';
        export const updatePermission = 'Inventory:Damaged Product:Update';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            CategoryId = "CategoryId",
            PurchasePrice = "PurchasePrice",
            Quantity = "Quantity",
            Date = "Date",
            Note = "Note",
            ProductId = "ProductId",
            VNo = "VNo",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
            CategoryInsertDate = "CategoryInsertDate",
            CategoryInsertUserId = "CategoryInsertUserId",
            CategoryUpdateDate = "CategoryUpdateDate",
            CategoryUpdateUserId = "CategoryUpdateUserId",
            CategoryDeleteDate = "CategoryDeleteDate",
            CategoryDeleteUserId = "CategoryDeleteUserId",
            CategoryIsActive = "CategoryIsActive",
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
