namespace SmartERP.Inventory {
    export interface GoodsReceiptRow {
        Id?: number;
        SupplierId?: number;
        PurchaseId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        LineItems?: GoodsReceiptDetailsRow[];
        PurchaseBill?: string;
        EmployeeFullName?: string;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierInsertDate?: string;
        SupplierInsertUserId?: number;
        SupplierUpdateDate?: string;
        SupplierUpdateUserId?: number;
        SupplierDeleteDate?: string;
        SupplierDeleteUserId?: number;
        SupplierIsActive?: number;
        PurchaseSupplierId?: number;
        PurchaseInvoiceNo?: string;
        PurchaseDate?: string;
        PurchaseDiscount?: number;
        PurchaseTotalDiscount?: number;
        PurchaseShippingCost?: number;
        PurchaseGrandTotal?: number;
        PurchaseNetTotal?: number;
        PurchasePaidAmount?: number;
        PurchaseDue?: number;
        PurchaseChange?: number;
        PurchaseDetails?: string;
        PurchasePaymentAccount?: number;
        PurchaseEmployeeId?: number;
        PurchaseVNo?: number;
        EmployeenFirstName?: string;
        EmployeenLastName?: string;
        EmployeenDesignationId?: number;
        EmployeenDepartmentId?: number;
        EmployeenRateType?: number;
        EmployeenPhone?: string;
        EmployeenHoureRateSalary?: number;
        EmployeenEmail?: string;
        EmployeenBloodGroup?: number;
        EmployeenPicture?: string;
        EmployeenCountryId?: number;
        EmployeenStateId?: number;
        EmployeenCityId?: number;
        EmployeenZipCode?: string;
        EmployeenAddress?: string;
        EmployeenUserId?: number;
        EmployeenRegionId?: number;
        EmployeenTerritoryId?: number;
        EmployeenCnic?: string;
        EmployeenInsertDate?: string;
        EmployeenInsertUserId?: number;
        EmployeenUpdateDate?: string;
        EmployeenUpdateUserId?: number;
        EmployeenDeleteDate?: string;
        EmployeenDeleteUserId?: number;
        EmployeenIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace GoodsReceiptRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Inventory.GoodsReceipt';
        export const deletePermission = 'Inventory:Goods Receipt:Delete';
        export const insertPermission = 'Inventory:Goods Receipt:Create';
        export const readPermission = 'Inventory:Goods Receipt:View';
        export const updatePermission = 'Inventory:Goods Receipt:Update';

        export declare const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            PurchaseId = "PurchaseId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            LineItems = "LineItems",
            PurchaseBill = "PurchaseBill",
            EmployeeFullName = "EmployeeFullName",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierInsertDate = "SupplierInsertDate",
            SupplierInsertUserId = "SupplierInsertUserId",
            SupplierUpdateDate = "SupplierUpdateDate",
            SupplierUpdateUserId = "SupplierUpdateUserId",
            SupplierDeleteDate = "SupplierDeleteDate",
            SupplierDeleteUserId = "SupplierDeleteUserId",
            SupplierIsActive = "SupplierIsActive",
            PurchaseSupplierId = "PurchaseSupplierId",
            PurchaseInvoiceNo = "PurchaseInvoiceNo",
            PurchaseDate = "PurchaseDate",
            PurchaseDiscount = "PurchaseDiscount",
            PurchaseTotalDiscount = "PurchaseTotalDiscount",
            PurchaseShippingCost = "PurchaseShippingCost",
            PurchaseGrandTotal = "PurchaseGrandTotal",
            PurchaseNetTotal = "PurchaseNetTotal",
            PurchasePaidAmount = "PurchasePaidAmount",
            PurchaseDue = "PurchaseDue",
            PurchaseChange = "PurchaseChange",
            PurchaseDetails = "PurchaseDetails",
            PurchasePaymentAccount = "PurchasePaymentAccount",
            PurchaseEmployeeId = "PurchaseEmployeeId",
            PurchaseVNo = "PurchaseVNo",
            EmployeenFirstName = "EmployeenFirstName",
            EmployeenLastName = "EmployeenLastName",
            EmployeenDesignationId = "EmployeenDesignationId",
            EmployeenDepartmentId = "EmployeenDepartmentId",
            EmployeenRateType = "EmployeenRateType",
            EmployeenPhone = "EmployeenPhone",
            EmployeenHoureRateSalary = "EmployeenHoureRateSalary",
            EmployeenEmail = "EmployeenEmail",
            EmployeenBloodGroup = "EmployeenBloodGroup",
            EmployeenPicture = "EmployeenPicture",
            EmployeenCountryId = "EmployeenCountryId",
            EmployeenStateId = "EmployeenStateId",
            EmployeenCityId = "EmployeenCityId",
            EmployeenZipCode = "EmployeenZipCode",
            EmployeenAddress = "EmployeenAddress",
            EmployeenUserId = "EmployeenUserId",
            EmployeenRegionId = "EmployeenRegionId",
            EmployeenTerritoryId = "EmployeenTerritoryId",
            EmployeenCnic = "EmployeenCnic",
            EmployeenInsertDate = "EmployeenInsertDate",
            EmployeenInsertUserId = "EmployeenInsertUserId",
            EmployeenUpdateDate = "EmployeenUpdateDate",
            EmployeenUpdateUserId = "EmployeenUpdateUserId",
            EmployeenDeleteDate = "EmployeenDeleteDate",
            EmployeenDeleteUserId = "EmployeenDeleteUserId",
            EmployeenIsActive = "EmployeenIsActive",
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
