
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class BankTransactionsDialog extends Serenity.EntityDialog<BankTransactionsRow, any> {
        protected getFormKey() { return BankTransactionsForm.formKey; }
        protected getIdProperty() { return BankTransactionsRow.idProperty; }
        protected getLocalTextPrefix() { return BankTransactionsRow.localTextPrefix; }
        protected getNameProperty() { return BankTransactionsRow.nameProperty; }
        protected getService() { return BankTransactionsService.baseUrl; }
        protected getDeletePermission() { return BankTransactionsRow.deletePermission; }
        protected getInsertPermission() { return BankTransactionsRow.insertPermission; }
        protected getUpdatePermission() { return BankTransactionsRow.updatePermission; }

        protected form = new BankTransactionsForm(this.idPrefix);

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
        //    window.location.href = "/Banks/Banks";
        //    //DialogUtils.dialogCloseRedirect("/Banks/Banks", this.element);
        //}
    }
}