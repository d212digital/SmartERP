
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class GoodsIssueGrid extends Serenity.EntityGrid<GoodsIssueRow, any> {
        protected getColumnsKey() { return 'Inventory.GoodsIssue'; }
        protected getDialogType() { return GoodsIssueDialog; }
        protected getIdProperty() { return GoodsIssueRow.idProperty; }
        protected getInsertPermission() { return GoodsIssueRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsIssueRow.localTextPrefix; }
        protected getService() { return GoodsIssueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}