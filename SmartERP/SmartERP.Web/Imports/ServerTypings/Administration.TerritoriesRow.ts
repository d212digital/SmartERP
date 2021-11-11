namespace SmartERP.Administration {
    export interface TerritoriesRow {
        Id?: number;
        TerritoryDescription?: string;
        RegionId?: number;
        RegionName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace TerritoriesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'TerritoryDescription';
        export const localTextPrefix = 'Administration.Territories';
        export const lookupKey = 'Administration.Territories';

        export function getLookup(): Q.Lookup<TerritoriesRow> {
            return Q.getLookup<TerritoriesRow>('Administration.Territories');
        }
        export const deletePermission = 'Masters:Territory:Delete';
        export const insertPermission = 'Masters:Territory:Create';
        export const readPermission = 'Masters:Territory:View';
        export const updatePermission = 'Masters:Territory:Update';

        export declare const enum Fields {
            Id = "Id",
            TerritoryDescription = "TerritoryDescription",
            RegionId = "RegionId",
            RegionName = "RegionName",
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
