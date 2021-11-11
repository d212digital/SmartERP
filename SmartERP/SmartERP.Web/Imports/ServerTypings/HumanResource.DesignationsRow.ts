namespace SmartERP.HumanResource {
    export interface DesignationsRow {
        Id?: number;
        Designation?: string;
        Description?: string;
        ParentDesignationId?: number;
        ParentDesignationDesignation?: string;
        ParentDesignationDescription?: string;
        ParentDesignationParentDesignationId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace DesignationsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Designation';
        export const localTextPrefix = 'HumanResource.Designations';
        export const lookupKey = 'HumanResource.Designations';

        export function getLookup(): Q.Lookup<DesignationsRow> {
            return Q.getLookup<DesignationsRow>('HumanResource.Designations');
        }
        export const deletePermission = 'Human Resource:Designation:Delete';
        export const insertPermission = 'Human Resource:Designation:Create';
        export const readPermission = 'Human Resource:Designation:View';
        export const updatePermission = 'Human Resource:Designation:Update';

        export declare const enum Fields {
            Id = "Id",
            Designation = "Designation",
            Description = "Description",
            ParentDesignationId = "ParentDesignationId",
            ParentDesignationDesignation = "ParentDesignationDesignation",
            ParentDesignationDescription = "ParentDesignationDescription",
            ParentDesignationParentDesignationId = "ParentDesignationParentDesignationId",
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
