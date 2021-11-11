namespace SmartERP.Administration {
    export interface NavigationListRow {
        Id?: number;
        Title?: string;
        Url?: string;
        Permission?: string;
        Icon?: string;
        ParentId?: number;
        Sort?: number;
    }

    export namespace NavigationListRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Administration.NavigationList';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Title = "Title",
            Url = "Url",
            Permission = "Permission",
            Icon = "Icon",
            ParentId = "ParentId",
            Sort = "Sort"
        }
    }
}
