namespace SmartERP.Inventory {
    export interface GoodsIssueRow {
        Id?: number;
        CustomerId?: number;
        SaleId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        LineItems?: GoodsIssueDetailsRow[];
        SaleInvoice?: string;
        EmployeeFullName?: string;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        SaleCustomerId?: number;
        SaleDate?: string;
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
        SalePaymentAccount?: number;
        SaleVNo?: number;
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

    export namespace GoodsIssueRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Inventory.GoodsIssue';
        export const deletePermission = 'Inventory:Goods Issue:Delete';
        export const insertPermission = 'Inventory:Goods Issue:Create';
        export const readPermission = 'Inventory:Goods Issue:View';
        export const updatePermission = 'Inventory:Goods Issue:Update';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            SaleId = "SaleId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            LineItems = "LineItems",
            SaleInvoice = "SaleInvoice",
            EmployeeFullName = "EmployeeFullName",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
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
            SalePaymentAccount = "SalePaymentAccount",
            SaleVNo = "SaleVNo",
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
