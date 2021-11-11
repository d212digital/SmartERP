namespace SmartERP.HumanResource {
    export interface AttendanceRow {
        Id?: number;
        EmployeeId?: number;
        CheckIn?: string;
        CheckOut?: string;
        StayTime?: string;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmployeeDesignationId?: number;
        EmployeeDepartmentId?: number;
        EmployeeRateType?: number;
        EmployeePhone?: string;
        EmployeeHoureRateSalary?: number;
        EmployeeEmail?: string;
        EmployeeBloodGroup?: string;
        EmployeePicture?: string;
        EmployeeCountryId?: number;
        EmployeeStateId?: number;
        EmployeeCityId?: number;
        EmployeeZipCode?: string;
        EmployeeAddress?: string;
        EmployeeUserId?: number;
        EmployeeRegionId?: number;
        EmployeeTerritoryId?: number;
        EmployeeCnic?: string;
        EmployeeInsertDate?: string;
        EmployeeInsertUserId?: number;
        EmployeeUpdateDate?: string;
        EmployeeUpdateUserId?: number;
        EmployeeDeleteDate?: string;
        EmployeeDeleteUserId?: number;
        EmployeeIsActive?: number;
        EmployeeFullName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace AttendanceRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'HumanResource.Attendance';
        export const lookupKey = 'HumanResource.Attendance';

        export function getLookup(): Q.Lookup<AttendanceRow> {
            return Q.getLookup<AttendanceRow>('HumanResource.Attendance');
        }
        export const deletePermission = 'Human Resource:Attendance:Delete';
        export const insertPermission = 'Human Resource:Attendance:Create';
        export const readPermission = 'Human Resource:Attendance:View';
        export const updatePermission = 'Human Resource:Attendance:Update';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            CheckIn = "CheckIn",
            CheckOut = "CheckOut",
            StayTime = "StayTime",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeLastName = "EmployeeLastName",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeDepartmentId = "EmployeeDepartmentId",
            EmployeeRateType = "EmployeeRateType",
            EmployeePhone = "EmployeePhone",
            EmployeeHoureRateSalary = "EmployeeHoureRateSalary",
            EmployeeEmail = "EmployeeEmail",
            EmployeeBloodGroup = "EmployeeBloodGroup",
            EmployeePicture = "EmployeePicture",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeStateId = "EmployeeStateId",
            EmployeeCityId = "EmployeeCityId",
            EmployeeZipCode = "EmployeeZipCode",
            EmployeeAddress = "EmployeeAddress",
            EmployeeUserId = "EmployeeUserId",
            EmployeeRegionId = "EmployeeRegionId",
            EmployeeTerritoryId = "EmployeeTerritoryId",
            EmployeeCnic = "EmployeeCnic",
            EmployeeInsertDate = "EmployeeInsertDate",
            EmployeeInsertUserId = "EmployeeInsertUserId",
            EmployeeUpdateDate = "EmployeeUpdateDate",
            EmployeeUpdateUserId = "EmployeeUpdateUserId",
            EmployeeDeleteDate = "EmployeeDeleteDate",
            EmployeeDeleteUserId = "EmployeeDeleteUserId",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeFullName = "EmployeeFullName",
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
