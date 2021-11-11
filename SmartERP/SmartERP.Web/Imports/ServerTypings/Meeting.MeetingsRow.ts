namespace SmartERP.Meeting {
    export interface MeetingsRow {
        Id?: number;
        MeetingName?: string;
        MeetingType?: number;
        StartDate?: string;
        EndDate?: string;
        Department?: number;
        Location?: number;
        OrganizedBy?: number;
        Reporter?: number;
        MeetingTypeName?: string;
        Department1?: string;
        DepartmentDescription?: string;
        DepartmentParentDepartmentId?: number;
        DepartmentInsertDate?: string;
        DepartmentInsertUserId?: number;
        DepartmentUpdateDate?: string;
        DepartmentUpdateUserId?: number;
        DepartmentDeleteDate?: string;
        DepartmentDeleteUserId?: number;
        DepartmentIsActive?: number;
        LocationName?: string;
        LocationCountryId?: number;
        LocationStateId?: number;
        LocationCityId?: number;
        LocationAddress?: string;
        LocationLatitude?: string;
        LocationLongitude?: string;
        OrganizedByFirstName?: string;
        OrganizedByLastName?: string;
        OrganizedByFullName?: string;
        OrganizedByDesignationId?: number;
        OrganizedByDepartmentId?: number;
        OrganizedByRateType?: number;
        OrganizedByPhone?: string;
        OrganizedByHoureRateSalary?: number;
        OrganizedByEmail?: string;
        OrganizedByBloodGroup?: number;
        OrganizedByPicture?: string;
        OrganizedByCountryId?: number;
        OrganizedByStateId?: number;
        OrganizedByCityId?: number;
        OrganizedByZipCode?: string;
        OrganizedByAddress?: string;
        OrganizedByUserId?: number;
        OrganizedByRegionId?: number;
        OrganizedByTerritoryId?: number;
        OrganizedByCnic?: string;
        OrganizedByInsertDate?: string;
        OrganizedByInsertUserId?: number;
        OrganizedByUpdateDate?: string;
        OrganizedByUpdateUserId?: number;
        OrganizedByDeleteDate?: string;
        OrganizedByDeleteUserId?: number;
        OrganizedByIsActive?: number;
        ReporterFirstName?: string;
        ReporterLastName?: string;
        ReporterFullName?: string;
        ReporterDesignationId?: number;
        ReporterDepartmentId?: number;
        ReporterRateType?: number;
        ReporterPhone?: string;
        ReporterHoureRateSalary?: number;
        ReporterEmail?: string;
        ReporterBloodGroup?: number;
        ReporterPicture?: string;
        ReporterCountryId?: number;
        ReporterStateId?: number;
        ReporterCityId?: number;
        ReporterZipCode?: string;
        ReporterAddress?: string;
        ReporterUserId?: number;
        ReporterRegionId?: number;
        ReporterTerritoryId?: number;
        ReporterCnic?: string;
        ReporterInsertDate?: string;
        ReporterInsertUserId?: number;
        ReporterUpdateDate?: string;
        ReporterUpdateUserId?: number;
        ReporterDeleteDate?: string;
        ReporterDeleteUserId?: number;
        ReporterIsActive?: number;
        Attendees?: MeetingAttendeesRow[];
        AgendaItems?: AgendaItemsRow[];
        AgendaDecisions?: AgendaDecisionsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace MeetingsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MeetingName';
        export const localTextPrefix = 'Meeting.Meetings';
        export const lookupKey = 'Meetings.Meetings';

        export function getLookup(): Q.Lookup<MeetingsRow> {
            return Q.getLookup<MeetingsRow>('Meetings.Meetings');
        }
        export const deletePermission = 'Masters:Meeting:Delete';
        export const insertPermission = 'Masters:Meeting:Create';
        export const readPermission = 'Masters:Meeting:View';
        export const updatePermission = 'Masters:Meeting:Update';

        export declare const enum Fields {
            Id = "Id",
            MeetingName = "MeetingName",
            MeetingType = "MeetingType",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Department = "Department",
            Location = "Location",
            OrganizedBy = "OrganizedBy",
            Reporter = "Reporter",
            MeetingTypeName = "MeetingTypeName",
            Department1 = "Department1",
            DepartmentDescription = "DepartmentDescription",
            DepartmentParentDepartmentId = "DepartmentParentDepartmentId",
            DepartmentInsertDate = "DepartmentInsertDate",
            DepartmentInsertUserId = "DepartmentInsertUserId",
            DepartmentUpdateDate = "DepartmentUpdateDate",
            DepartmentUpdateUserId = "DepartmentUpdateUserId",
            DepartmentDeleteDate = "DepartmentDeleteDate",
            DepartmentDeleteUserId = "DepartmentDeleteUserId",
            DepartmentIsActive = "DepartmentIsActive",
            LocationName = "LocationName",
            LocationCountryId = "LocationCountryId",
            LocationStateId = "LocationStateId",
            LocationCityId = "LocationCityId",
            LocationAddress = "LocationAddress",
            LocationLatitude = "LocationLatitude",
            LocationLongitude = "LocationLongitude",
            OrganizedByFirstName = "OrganizedByFirstName",
            OrganizedByLastName = "OrganizedByLastName",
            OrganizedByFullName = "OrganizedByFullName",
            OrganizedByDesignationId = "OrganizedByDesignationId",
            OrganizedByDepartmentId = "OrganizedByDepartmentId",
            OrganizedByRateType = "OrganizedByRateType",
            OrganizedByPhone = "OrganizedByPhone",
            OrganizedByHoureRateSalary = "OrganizedByHoureRateSalary",
            OrganizedByEmail = "OrganizedByEmail",
            OrganizedByBloodGroup = "OrganizedByBloodGroup",
            OrganizedByPicture = "OrganizedByPicture",
            OrganizedByCountryId = "OrganizedByCountryId",
            OrganizedByStateId = "OrganizedByStateId",
            OrganizedByCityId = "OrganizedByCityId",
            OrganizedByZipCode = "OrganizedByZipCode",
            OrganizedByAddress = "OrganizedByAddress",
            OrganizedByUserId = "OrganizedByUserId",
            OrganizedByRegionId = "OrganizedByRegionId",
            OrganizedByTerritoryId = "OrganizedByTerritoryId",
            OrganizedByCnic = "OrganizedByCnic",
            OrganizedByInsertDate = "OrganizedByInsertDate",
            OrganizedByInsertUserId = "OrganizedByInsertUserId",
            OrganizedByUpdateDate = "OrganizedByUpdateDate",
            OrganizedByUpdateUserId = "OrganizedByUpdateUserId",
            OrganizedByDeleteDate = "OrganizedByDeleteDate",
            OrganizedByDeleteUserId = "OrganizedByDeleteUserId",
            OrganizedByIsActive = "OrganizedByIsActive",
            ReporterFirstName = "ReporterFirstName",
            ReporterLastName = "ReporterLastName",
            ReporterFullName = "ReporterFullName",
            ReporterDesignationId = "ReporterDesignationId",
            ReporterDepartmentId = "ReporterDepartmentId",
            ReporterRateType = "ReporterRateType",
            ReporterPhone = "ReporterPhone",
            ReporterHoureRateSalary = "ReporterHoureRateSalary",
            ReporterEmail = "ReporterEmail",
            ReporterBloodGroup = "ReporterBloodGroup",
            ReporterPicture = "ReporterPicture",
            ReporterCountryId = "ReporterCountryId",
            ReporterStateId = "ReporterStateId",
            ReporterCityId = "ReporterCityId",
            ReporterZipCode = "ReporterZipCode",
            ReporterAddress = "ReporterAddress",
            ReporterUserId = "ReporterUserId",
            ReporterRegionId = "ReporterRegionId",
            ReporterTerritoryId = "ReporterTerritoryId",
            ReporterCnic = "ReporterCnic",
            ReporterInsertDate = "ReporterInsertDate",
            ReporterInsertUserId = "ReporterInsertUserId",
            ReporterUpdateDate = "ReporterUpdateDate",
            ReporterUpdateUserId = "ReporterUpdateUserId",
            ReporterDeleteDate = "ReporterDeleteDate",
            ReporterDeleteUserId = "ReporterDeleteUserId",
            ReporterIsActive = "ReporterIsActive",
            Attendees = "Attendees",
            AgendaItems = "AgendaItems",
            AgendaDecisions = "AgendaDecisions",
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
