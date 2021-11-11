
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SupplierPaymentDialog extends Serenity.EntityDialog<SupplierPaymentRow, any> {
        protected getFormKey() { return SupplierPaymentForm.formKey; }
        protected getIdProperty() { return SupplierPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierPaymentRow.localTextPrefix; }
        protected getNameProperty() { return SupplierPaymentRow.nameProperty; }
        protected getService() { return SupplierPaymentService.baseUrl; }
        protected getDeletePermission() { return SupplierPaymentRow.deletePermission; }
        protected getInsertPermission() { return SupplierPaymentRow.insertPermission; }
        protected getUpdatePermission() { return SupplierPaymentRow.updatePermission; }

        protected form = new SupplierPaymentForm(this.idPrefix);
        constructor() {
            super();


        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        //protected onSaveSuccess(response) {
        //    this.showSaveSuccessMessage(response);
        //    window.location.href = "/Suppliers/Suppliers";
        //}
    }
}