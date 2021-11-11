
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DebitVoucherDialog extends Serenity.EntityDialog<DebitVoucherRow, any> {
        protected getFormKey() { return DebitVoucherForm.formKey; }
        protected getIdProperty() { return DebitVoucherRow.idProperty; }
        protected getLocalTextPrefix() { return DebitVoucherRow.localTextPrefix; }
        protected getNameProperty() { return DebitVoucherRow.nameProperty; }
        protected getService() { return DebitVoucherService.baseUrl; }
        protected getDeletePermission() { return DebitVoucherRow.deletePermission; }
        protected getInsertPermission() { return DebitVoucherRow.insertPermission; }
        protected getUpdatePermission() { return DebitVoucherRow.updatePermission; }

        protected form = new DebitVoucherForm(this.idPrefix);
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