
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CashAdjustmentGrid extends Serenity.EntityGrid<CashAdjustmentRow, any> {
        protected getColumnsKey() { return 'Accounts.CashAdjustment'; }
        protected getDialogType() { return CashAdjustmentDialog; }
        protected getIdProperty() { return CashAdjustmentRow.idProperty; }
        protected getInsertPermission() { return CashAdjustmentRow.insertPermission; }
        protected getLocalTextPrefix() { return CashAdjustmentRow.localTextPrefix; }
        protected getService() { return CashAdjustmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}