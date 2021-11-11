
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ContraVoucherGrid extends Serenity.EntityGrid<ContraVoucherRow, any> {
        protected getColumnsKey() { return 'Accounts.ContraVoucher'; }
        protected getDialogType() { return ContraVoucherDialog; }
        protected getIdProperty() { return ContraVoucherRow.idProperty; }
        protected getInsertPermission() { return ContraVoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return ContraVoucherRow.localTextPrefix; }
        protected getService() { return ContraVoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}