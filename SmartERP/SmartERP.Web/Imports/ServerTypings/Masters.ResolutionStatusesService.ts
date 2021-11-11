namespace SmartERP.Masters {
    export namespace ResolutionStatusesService {
        export const baseUrl = 'Masters/ResolutionStatuses';

        export declare function Create(request: Serenity.SaveRequest<ResolutionStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ResolutionStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ResolutionStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ResolutionStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Masters/ResolutionStatuses/Create",
            Update = "Masters/ResolutionStatuses/Update",
            Delete = "Masters/ResolutionStatuses/Delete",
            Retrieve = "Masters/ResolutionStatuses/Retrieve",
            List = "Masters/ResolutionStatuses/List",
            Undelete = "Masters/ResolutionStatuses/Undelete"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Undelete'
        ].forEach(x => {
            (<any>ResolutionStatusesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
