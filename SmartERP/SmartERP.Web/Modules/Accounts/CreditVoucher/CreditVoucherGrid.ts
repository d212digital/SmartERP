
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CreditVoucherGrid extends Serenity.EntityGrid<CreditVoucherRow, any> {
        protected getColumnsKey() { return 'Accounts.CreditVoucher'; }
        protected getDialogType() { return CreditVoucherDialog; }
        protected getIdProperty() { return CreditVoucherRow.idProperty; }
        protected getInsertPermission() { return CreditVoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return CreditVoucherRow.localTextPrefix; }
        protected getService() { return CreditVoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}