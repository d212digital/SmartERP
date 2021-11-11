namespace SmartERP.Products {
    export interface BrandsRow {
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

    export namespace BrandsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Products.Brands';
        export const lookupKey = 'Products.Brands';

        export function getLookup(): Q.Lookup<BrandsRow> {
            return Q.getLookup<BrandsRow>('Products.Brands');
        }
        export const deletePermission = 'Inventory:Brand:Delete';
        export const insertPermission = 'Inventory:Brand:Create';
        export const readPermission = 'Inventory:Brand:View';
        export const updatePermission = 'Inventory:Brand:Update';

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
