
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsIssueDetailsGrid extends Serenity.EntityGrid<GoodsIssueDetailsRow, any> {
        protected getColumnsKey() { return 'Inventory.GoodsIssueDetails'; }
        protected getDialogType() { return GoodsIssueDetailsDialog; }
        protected getIdProperty() { return GoodsIssueDetailsRow.idProperty; }
        protected getInsertPermission() { return GoodsIssueDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsIssueDetailsRow.localTextPrefix; }
        protected getService() { return GoodsIssueDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}