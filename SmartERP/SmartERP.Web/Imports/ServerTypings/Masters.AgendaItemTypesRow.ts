namespace SmartERP.Masters {
    export interface AgendaItemTypesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace AgendaItemTypesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.AgendaItemTypes';
        export const lookupKey = 'Masters.AgendaItemTypes';

        export function getLookup(): Q.Lookup<AgendaItemTypesRow> {
            return Q.getLookup<AgendaItemTypesRow>('Masters.AgendaItemTypes');
        }
        export const deletePermission = 'Masters:Agenda Item Types:Delete';
        export const insertPermission = 'Masters:Agenda Item Types:Create';
        export const readPermission = 'Masters:Agenda Item Types:View';
        export const updatePermission = 'Masters:Agenda Item Types:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
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
