namespace SmartERP.Products {
    export interface CategoriesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        ParentCategoryId?: number;
        ParentCategoryName?: string;
        ParentCategoryDescription?: string;
        ParentCategoryParentCategoryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace CategoriesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Products.Categories';
        export const lookupKey = 'Products.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('Products.Categories');
        }
        export const deletePermission = 'Inventory:Category:Delete';
        export const insertPermission = 'Inventory:Category:Create';
        export const readPermission = 'Inventory:Category:View';
        export const updatePermission = 'Inventory:Category:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            ParentCategoryId = "ParentCategoryId",
            ParentCategoryName = "ParentCategoryName",
            ParentCategoryDescription = "ParentCategoryDescription",
            ParentCategoryParentCategoryId = "ParentCategoryParentCategoryId",
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
