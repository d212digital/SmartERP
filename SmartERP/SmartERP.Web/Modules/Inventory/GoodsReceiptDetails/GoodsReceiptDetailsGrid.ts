
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsReceiptDetailsGrid extends Serenity.EntityGrid<GoodsReceiptDetailsRow, any> {
        protected getColumnsKey() { return 'Inventory.GoodsReceiptDetails'; }
        protected getDialogType() { return GoodsReceiptDetailsDialog; }
        protected getIdProperty() { return GoodsReceiptDetailsRow.idProperty; }
        protected getInsertPermission() { return GoodsReceiptDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsReceiptDetailsRow.localTextPrefix; }
        protected getService() { return GoodsReceiptDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}