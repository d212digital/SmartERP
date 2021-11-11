
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class JournalVoucherGrid extends Serenity.EntityGrid<JournalVoucherRow, any> {
        protected getColumnsKey() { return 'Accounts.JournalVoucher'; }
        protected getDialogType() { return JournalVoucherDialog; }
        protected getIdProperty() { return JournalVoucherRow.idProperty; }
        protected getInsertPermission() { return JournalVoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return JournalVoucherRow.localTextPrefix; }
        protected getService() { return JournalVoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}