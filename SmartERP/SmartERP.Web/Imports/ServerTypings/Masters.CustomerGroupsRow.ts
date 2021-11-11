namespace SmartERP.Masters {
    export interface CustomerGroupsRow {
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

    export namespace CustomerGroupsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.CustomerGroups';
        export const lookupKey = 'Masters.CustomerGroups';

        export function getLookup(): Q.Lookup<CustomerGroupsRow> {
            return Q.getLookup<CustomerGroupsRow>('Masters.CustomerGroups');
        }
        export const deletePermission = 'Masters:Customer Groups:Delete';
        export const insertPermission = 'Masters:Customer Groups:Create';
        export const readPermission = 'Masters:Customer Groups:View';
        export const updatePermission = 'Masters:Customer Groups:Update';

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
