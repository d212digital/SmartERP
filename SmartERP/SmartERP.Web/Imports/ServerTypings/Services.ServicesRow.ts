namespace SmartERP.Services {
    export interface ServicesRow {
        Id?: number;
        ServiceName?: string;
        Charge?: number;
        Description?: string;
        Tax?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace ServicesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ServiceName';
        export const localTextPrefix = 'Services.Services';
        export const lookupKey = 'Services.Services';

        export function getLookup(): Q.Lookup<ServicesRow> {
            return Q.getLookup<ServicesRow>('Services.Services');
        }
        export const deletePermission = 'Masters:Service:Delete';
        export const insertPermission = 'Masters:Service:Create';
        export const readPermission = 'Masters:Service:View';
        export const updatePermission = 'Masters:Service:Update';

        export declare const enum Fields {
            Id = "Id",
            ServiceName = "ServiceName",
            Charge = "Charge",
            Description = "Description",
            Tax = "Tax",
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
