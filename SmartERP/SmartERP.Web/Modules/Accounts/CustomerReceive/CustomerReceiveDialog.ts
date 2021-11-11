
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerReceiveDialog extends Serenity.EntityDialog<CustomerReceiveRow, any> {
        protected getFormKey() { return CustomerReceiveForm.formKey; }
        protected getIdProperty() { return CustomerReceiveRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerReceiveRow.localTextPrefix; }
        protected getNameProperty() { return CustomerReceiveRow.nameProperty; }
        protected getService() { return CustomerReceiveService.baseUrl; }
        protected getDeletePermission() { return CustomerReceiveRow.deletePermission; }
        protected getInsertPermission() { return CustomerReceiveRow.insertPermission; }
        protected getUpdatePermission() { return CustomerReceiveRow.updatePermission; }

        protected form = new CustomerReceiveForm(this.idPrefix);
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