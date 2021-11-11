
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ContraVoucherDialog extends Serenity.EntityDialog<ContraVoucherRow, any> {
        protected getFormKey() { return ContraVoucherForm.formKey; }
        protected getIdProperty() { return ContraVoucherRow.idProperty; }
        protected getLocalTextPrefix() { return ContraVoucherRow.localTextPrefix; }
        protected getNameProperty() { return ContraVoucherRow.nameProperty; }
        protected getService() { return ContraVoucherService.baseUrl; }
        protected getDeletePermission() { return ContraVoucherRow.deletePermission; }
        protected getInsertPermission() { return ContraVoucherRow.insertPermission; }
        protected getUpdatePermission() { return ContraVoucherRow.updatePermission; }

        protected form = new ContraVoucherForm(this.idPrefix);
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
        //    window.location.href = "/Customers/Customers";
        //}
    }
}