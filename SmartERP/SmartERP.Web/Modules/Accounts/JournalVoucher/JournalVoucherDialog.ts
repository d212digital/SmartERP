
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class JournalVoucherDialog extends Serenity.EntityDialog<JournalVoucherRow, any> {
        protected getFormKey() { return JournalVoucherForm.formKey; }
        protected getIdProperty() { return JournalVoucherRow.idProperty; }
        protected getLocalTextPrefix() { return JournalVoucherRow.localTextPrefix; }
        protected getNameProperty() { return JournalVoucherRow.nameProperty; }
        protected getService() { return JournalVoucherService.baseUrl; }
        protected getDeletePermission() { return JournalVoucherRow.deletePermission; }
        protected getInsertPermission() { return JournalVoucherRow.insertPermission; }
        protected getUpdatePermission() { return JournalVoucherRow.updatePermission; }

        protected form = new JournalVoucherForm(this.idPrefix);
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