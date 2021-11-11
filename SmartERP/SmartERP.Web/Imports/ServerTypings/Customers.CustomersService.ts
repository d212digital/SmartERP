namespace SmartERP.Customers {
    export namespace CustomersService {
        export const baseUrl = 'Customers/Customers';

        export declare function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function HeartBeat(request: Serenity.ServiceRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Customers/Customers/Create",
            Update = "Customers/Customers/Update",
            Delete = "Customers/Customers/Delete",
            HeartBeat = "Customers/Customers/HeartBeat",
            Retrieve = "Customers/Customers/Retrieve",
            List = "Customers/Customers/List",
            Undelete = "Customers/Customers/Undelete"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'HeartBeat', 
            'Retrieve', 
            'List', 
            'Undelete'
        ].forEach(x => {
            (<any>CustomersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
