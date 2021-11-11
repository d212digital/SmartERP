
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    export class SupplierPaymentGrid extends Serenity.EntityGrid<SupplierPaymentRow, any> {
        protected getColumnsKey() { return 'Accounts.SupplierPayment'; }
        protected getDialogType() { return SupplierPaymentDialog; }
        protected getIdProperty() { return SupplierPaymentRow.idProperty; }
        protected getInsertPermission() { return SupplierPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierPaymentRow.localTextPrefix; }
        protected getService() { return SupplierPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}