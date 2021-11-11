namespace SmartERP.Services {
    export namespace ServiceInvoiceDetailsService {
        export const baseUrl = 'Services/ServiceInvoiceDetails';

        export declare function Create(request: Serenity.SaveRequest<ServiceInvoiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ServiceInvoiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceInvoiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceInvoiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Services/ServiceInvoiceDetails/Create",
            Update = "Services/ServiceInvoiceDetails/Update",
            Delete = "Services/ServiceInvoiceDetails/Delete",
            Retrieve = "Services/ServiceInvoiceDetails/Retrieve",
            List = "Services/ServiceInvoiceDetails/List",
            Undelete = "Services/ServiceInvoiceDetails/Undelete"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Undelete'
        ].forEach(x => {
            (<any>ServiceInvoiceDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
