
namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    export class ServiceInvoiceDetailsDialog extends Serenity.EntityDialog<ServiceInvoiceDetailsRow, any> {
        protected getFormKey() { return ServiceInvoiceDetailsForm.formKey; }
        protected getIdProperty() { return ServiceInvoiceDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceInvoiceDetailsRow.localTextPrefix; }
        protected getNameProperty() { return ServiceInvoiceDetailsRow.nameProperty; }
        protected getService() { return ServiceInvoiceDetailsService.baseUrl; }
        protected getDeletePermission() { return ServiceInvoiceDetailsRow.deletePermission; }
        protected getInsertPermission() { return ServiceInvoiceDetailsRow.insertPermission; }
        protected getUpdatePermission() { return ServiceInvoiceDetailsRow.updatePermission; }

        protected form = new ServiceInvoiceDetailsForm(this.idPrefix);

    }
}