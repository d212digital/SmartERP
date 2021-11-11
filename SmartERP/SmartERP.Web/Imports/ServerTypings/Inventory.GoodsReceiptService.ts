namespace SmartERP.Inventory {
    export namespace GoodsReceiptService {
        export const baseUrl = 'Inventory/GoodsReceipt';

        export declare function Create(request: Serenity.SaveRequest<GoodsReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GoodsReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/GoodsReceipt/Create",
            Update = "Inventory/GoodsReceipt/Update",
            Delete = "Inventory/GoodsReceipt/Delete",
            Retrieve = "Inventory/GoodsReceipt/Retrieve",
            List = "Inventory/GoodsReceipt/List",
            Undelete = "Inventory/GoodsReceipt/Undelete"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Undelete'
        ].forEach(x => {
            (<any>GoodsReceiptService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
