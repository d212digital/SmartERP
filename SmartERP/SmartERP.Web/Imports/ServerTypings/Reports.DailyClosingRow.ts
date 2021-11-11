namespace SmartERP.Reports {
    export interface DailyClosingRow {
        Id?: number;
        LastDayClosing?: number;
        CashIn?: number;
        CashOut?: number;
        Date?: string;
        Amount?: number;
        Adjustment?: number;
        Status?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        LastClosingAmount?: number;
        TodayCashIn?: number;
        TodayCashOut?: number;
        LastClosingDate?: string;
    }

    export namespace DailyClosingRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Reports.DailyClosing';
        export const deletePermission = 'Report:Daily Closing Report';
        export const insertPermission = 'Report:Daily Closing Report';
        export const readPermission = 'Report:Daily Closing Report';
        export const updatePermission = 'Report:Daily Closing Report';

        export declare const enum Fields {
            Id = "Id",
            LastDayClosing = "LastDayClosing",
            CashIn = "CashIn",
            CashOut = "CashOut",
            Date = "Date",
            Amount = "Amount",
            Adjustment = "Adjustment",
            Status = "Status",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            LastClosingAmount = "LastClosingAmount",
            TodayCashIn = "TodayCashIn",
            TodayCashOut = "TodayCashOut",
            LastClosingDate = "LastClosingDate"
        }
    }
}
