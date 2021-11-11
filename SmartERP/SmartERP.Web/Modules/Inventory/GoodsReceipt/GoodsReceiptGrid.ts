
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class GoodsReceiptGrid extends Serenity.EntityGrid<GoodsReceiptRow, any> {
        protected getColumnsKey() { return 'Inventory.GoodsReceipt'; }
        protected getDialogType() { return GoodsReceiptDialog; }
        protected getIdProperty() { return GoodsReceiptRow.idProperty; }
        protected getInsertPermission() { return GoodsReceiptRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsReceiptRow.localTextPrefix; }
        protected getService() { return GoodsReceiptService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}