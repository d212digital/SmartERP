namespace SmartERP.Sales {
    export interface SaleDetailsRow {
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
        SaleId?: number;
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
        SaleCustomerId?: number;
        SaleDate?: string;
        SalePaymentType?: number;
        SaleBankId?: number;
        SaleDiscount?: number;
        SaleTotalDiscount?: number;
        SaleVat?: number;
        SaleTotalTax?: number;
        SaleShippingCost?: number;
        SaleGrandTotal?: number;
        SaleNetTotal?: number;
        SalePaidAmount?: number;
        SaleDue?: number;
        SaleChange?: number;
        SaleDetails?: string;
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

    export namespace SaleDetailsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Sales.SaleDetails';
        export const deletePermission = 'Sales:Sale:Delete';
        export const insertPermission = 'Sales:Sale:Create';
        export const readPermission = 'Sales:Sale:View';
        export const updatePermission = 'Sales:Sale:Update';

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
            SaleId = "SaleId",
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
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
            SalePaymentType = "SalePaymentType",
            SaleBankId = "SaleBankId",
            SaleDiscount = "SaleDiscount",
            SaleTotalDiscount = "SaleTotalDiscount",
            SaleVat = "SaleVat",
            SaleTotalTax = "SaleTotalTax",
            SaleShippingCost = "SaleShippingCost",
            SaleGrandTotal = "SaleGrandTotal",
            SaleNetTotal = "SaleNetTotal",
            SalePaidAmount = "SalePaidAmount",
            SaleDue = "SaleDue",
            SaleChange = "SaleChange",
            SaleDetails = "SaleDetails",
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
