namespace SmartERP.Services {
    export interface ServiceInvoiceDetailsRow {
        Id?: number;
        ServiceId?: number;
        ServiceName?: string;
        Description?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        ServiceInvoiceId?: number;
        ServiceServiceName?: string;
        ServiceCharge?: number;
        ServiceDescription?: string;
        ServiceTax?: number;
        ServiceInvoiceCustomerId?: number;
        ServiceInvoiceDate?: string;
        ServiceInvoiceUserId?: number;
        ServiceInvoiceDiscount?: number;
        ServiceInvoiceTotalDiscount?: number;
        ServiceInvoiceVat?: number;
        ServiceInvoiceTotalTax?: number;
        ServiceInvoiceShippingCost?: number;
        ServiceInvoiceGrandTotal?: number;
        ServiceInvoiceNetTotal?: number;
        ServiceInvoicePaidAmount?: number;
        ServiceInvoiceDue?: number;
        ServiceInvoiceChange?: number;
        ServiceInvoiceDetails?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace ServiceInvoiceDetailsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Services.ServiceInvoiceDetails';
        export const deletePermission = 'Services:Service Invoice:Delete';
        export const insertPermission = 'Services:Service Invoice:Create';
        export const readPermission = 'Services:Service Invoice:View';
        export const updatePermission = 'Services:Service Invoice:Update';

        export declare const enum Fields {
            Id = "Id",
            ServiceId = "ServiceId",
            ServiceName = "ServiceName",
            Description = "Description",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            ServiceInvoiceId = "ServiceInvoiceId",
            ServiceServiceName = "ServiceServiceName",
            ServiceCharge = "ServiceCharge",
            ServiceDescription = "ServiceDescription",
            ServiceTax = "ServiceTax",
            ServiceInvoiceCustomerId = "ServiceInvoiceCustomerId",
            ServiceInvoiceDate = "ServiceInvoiceDate",
            ServiceInvoiceUserId = "ServiceInvoiceUserId",
            ServiceInvoiceDiscount = "ServiceInvoiceDiscount",
            ServiceInvoiceTotalDiscount = "ServiceInvoiceTotalDiscount",
            ServiceInvoiceVat = "ServiceInvoiceVat",
            ServiceInvoiceTotalTax = "ServiceInvoiceTotalTax",
            ServiceInvoiceShippingCost = "ServiceInvoiceShippingCost",
            ServiceInvoiceGrandTotal = "ServiceInvoiceGrandTotal",
            ServiceInvoiceNetTotal = "ServiceInvoiceNetTotal",
            ServiceInvoicePaidAmount = "ServiceInvoicePaidAmount",
            ServiceInvoiceDue = "ServiceInvoiceDue",
            ServiceInvoiceChange = "ServiceInvoiceChange",
            ServiceInvoiceDetails = "ServiceInvoiceDetails",
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
