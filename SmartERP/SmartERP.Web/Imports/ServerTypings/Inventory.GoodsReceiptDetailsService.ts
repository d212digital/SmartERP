namespace SmartERP.Inventory {
    export namespace GoodsReceiptDetailsService {
        export const baseUrl = 'Inventory/GoodsReceiptDetails';

        export declare function Create(request: Serenity.SaveRequest<GoodsReceiptDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GoodsReceiptDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsReceiptDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsReceiptDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/GoodsReceiptDetails/Create",
            Update = "Inventory/GoodsReceiptDetails/Update",
            Delete = "Inventory/GoodsReceiptDetails/Delete",
            Retrieve = "Inventory/GoodsReceiptDetails/Retrieve",
            List = "Inventory/GoodsReceiptDetails/List",
            Undelete = "Inventory/GoodsReceiptDetails/Undelete"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Undelete'
        ].forEach(x => {
            (<any>GoodsReceiptDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
