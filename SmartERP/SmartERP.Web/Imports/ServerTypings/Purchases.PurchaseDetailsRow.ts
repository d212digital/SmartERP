namespace SmartERP.Purchases {
    export interface PurchaseDetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        UnitName?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        PurchaseId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductQuantityPerUnit?: number;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        PurchaseSupplierId?: number;
        PurchaseInvoiceNo?: string;
        PurchaseDate?: string;
        PurchasePaymentType?: number;
        PurchaseBankId?: number;
        PurchaseDiscount?: number;
        PurchaseTotalDiscount?: number;
        PurchaseVat?: number;
        PurchaseTotalTax?: number;
        PurchaseShippingCost?: number;
        PurchaseGrandTotal?: number;
        PurchaseNetTotal?: number;
        PurchasePaidAmount?: number;
        PurchaseDue?: number;
        PurchaseChange?: number;
        PurchaseDetails?: string;
        UnitUnitName?: string;
        BrandId?: number;
        BrandName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace PurchaseDetailsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Purchases.PurchaseDetails';
        export const deletePermission = 'Purchasing:Purchase:Delete';
        export const insertPermission = 'Purchasing:Purchase:Create';
        export const readPermission = 'Purchasing:Purchase:View';
        export const updatePermission = 'Purchasing:Purchase:Update';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            PurchaseId = "PurchaseId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            PurchaseSupplierId = "PurchaseSupplierId",
            PurchaseInvoiceNo = "PurchaseInvoiceNo",
            PurchaseDate = "PurchaseDate",
            PurchasePaymentType = "PurchasePaymentType",
            PurchaseBankId = "PurchaseBankId",
            PurchaseDiscount = "PurchaseDiscount",
            PurchaseTotalDiscount = "PurchaseTotalDiscount",
            PurchaseVat = "PurchaseVat",
            PurchaseTotalTax = "PurchaseTotalTax",
            PurchaseShippingCost = "PurchaseShippingCost",
            PurchaseGrandTotal = "PurchaseGrandTotal",
            PurchaseNetTotal = "PurchaseNetTotal",
            PurchasePaidAmount = "PurchasePaidAmount",
            PurchaseDue = "PurchaseDue",
            PurchaseChange = "PurchaseChange",
            PurchaseDetails = "PurchaseDetails",
            UnitUnitName = "UnitUnitName",
            BrandId = "BrandId",
            BrandName = "BrandName",
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
