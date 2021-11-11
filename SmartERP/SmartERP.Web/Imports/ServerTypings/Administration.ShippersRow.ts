namespace SmartERP.Administration {
    export interface ShippersRow {
        Id?: number;
        CompanyName?: string;
        Phone?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace ShippersRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Administration.Shippers';
        export const lookupKey = 'Administration.Shippers';

        export function getLookup(): Q.Lookup<ShippersRow> {
            return Q.getLookup<ShippersRow>('Administration.Shippers');
        }
        export const deletePermission = 'Masters:Shipper:Delete';
        export const insertPermission = 'Masters:Shipper:Create';
        export const readPermission = 'Masters:Shipper:View';
        export const updatePermission = 'Masters:Shipper:Update';

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            Phone = "Phone",
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
