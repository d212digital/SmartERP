namespace SmartERP.Masters {
    export interface SupplierGroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace SupplierGroupsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.SupplierGroups';
        export const lookupKey = 'Masters.SupplierGroups';

        export function getLookup(): Q.Lookup<SupplierGroupsRow> {
            return Q.getLookup<SupplierGroupsRow>('Masters.SupplierGroups');
        }
        export const deletePermission = 'Masters:Supplier Groups:Delete';
        export const insertPermission = 'Masters:Supplier Groups:Create';
        export const readPermission = 'Masters:Supplier Groups:View';
        export const updatePermission = 'Masters:Supplier Groups:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
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
