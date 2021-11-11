
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DebitVoucherGrid extends Serenity.EntityGrid<DebitVoucherRow, any> {
        protected getColumnsKey() { return 'Accounts.DebitVoucher'; }
        protected getDialogType() { return DebitVoucherDialog; }
        protected getIdProperty() { return DebitVoucherRow.idProperty; }
        protected getInsertPermission() { return DebitVoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return DebitVoucherRow.localTextPrefix; }
        protected getService() { return DebitVoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}