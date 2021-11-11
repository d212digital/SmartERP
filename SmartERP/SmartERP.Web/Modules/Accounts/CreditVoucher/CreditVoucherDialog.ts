
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CreditVoucherDialog extends Serenity.EntityDialog<CreditVoucherRow, any> {
        protected getFormKey() { return CreditVoucherForm.formKey; }
        protected getIdProperty() { return CreditVoucherRow.idProperty; }
        protected getLocalTextPrefix() { return CreditVoucherRow.localTextPrefix; }
        protected getNameProperty() { return CreditVoucherRow.nameProperty; }
        protected getService() { return CreditVoucherService.baseUrl; }
        protected getDeletePermission() { return CreditVoucherRow.deletePermission; }
        protected getInsertPermission() { return CreditVoucherRow.insertPermission; }
        protected getUpdatePermission() { return CreditVoucherRow.updatePermission; }

        protected form = new CreditVoucherForm(this.idPrefix);
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