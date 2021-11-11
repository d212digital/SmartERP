
namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    export class ServiceInvoiceDetailsGrid extends Serenity.EntityGrid<ServiceInvoiceDetailsRow, any> {
        protected getColumnsKey() { return 'Services.ServiceInvoiceDetails'; }
        protected getDialogType() { return ServiceInvoiceDetailsDialog; }
        protected getIdProperty() { return ServiceInvoiceDetailsRow.idProperty; }
        protected getInsertPermission() { return ServiceInvoiceDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceInvoiceDetailsRow.localTextPrefix; }
        protected getService() { return ServiceInvoiceDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}