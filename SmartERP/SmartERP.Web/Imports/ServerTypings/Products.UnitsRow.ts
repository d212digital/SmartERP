namespace SmartERP.Products {
    export interface UnitsRow {
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

    export namespace UnitsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Products.Units';
        export const lookupKey = 'Products.Units';

        export function getLookup(): Q.Lookup<UnitsRow> {
            return Q.getLookup<UnitsRow>('Products.Units');
        }
        export const deletePermission = 'Inventory:Unit:Delete';
        export const insertPermission = 'Inventory:Unit:Create';
        export const readPermission = 'Inventory:Unit:View';
        export const updatePermission = 'Inventory:Unit:Update';

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
