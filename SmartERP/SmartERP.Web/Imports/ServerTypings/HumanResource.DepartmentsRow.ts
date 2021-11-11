namespace SmartERP.HumanResource {
    export interface DepartmentsRow {
        Id?: number;
        Department?: string;
        Description?: string;
        ParentDepartmentId?: number;
        ParentDepartmentDepartment?: string;
        ParentDepartmentDescription?: string;
        ParentDepartmentParentDepartmentId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace DepartmentsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Department';
        export const localTextPrefix = 'HumanResource.Departments';
        export const lookupKey = 'HumanResource.Departments';

        export function getLookup(): Q.Lookup<DepartmentsRow> {
            return Q.getLookup<DepartmentsRow>('HumanResource.Departments');
        }
        export const deletePermission = 'Human Resource:Department:Delete';
        export const insertPermission = 'Human Resource:Department:Create';
        export const readPermission = 'Human Resource:Department:View';
        export const updatePermission = 'Human Resource:Department:Update';

        export declare const enum Fields {
            Id = "Id",
            Department = "Department",
            Description = "Description",
            ParentDepartmentId = "ParentDepartmentId",
            ParentDepartmentDepartment = "ParentDepartmentDepartment",
            ParentDepartmentDescription = "ParentDepartmentDescription",
            ParentDepartmentParentDepartmentId = "ParentDepartmentParentDepartmentId",
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
