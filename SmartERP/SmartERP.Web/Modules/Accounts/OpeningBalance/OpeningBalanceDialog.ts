
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OpeningBalanceDialog extends Serenity.EntityDialog<OpeningBalanceRow, any> {
        protected getFormKey() { return OpeningBalanceForm.formKey; }
        protected getIdProperty() { return OpeningBalanceRow.idProperty; }
        protected getLocalTextPrefix() { return OpeningBalanceRow.localTextPrefix; }
        protected getNameProperty() { return OpeningBalanceRow.nameProperty; }
        protected getService() { return OpeningBalanceService.baseUrl; }
        protected getDeletePermission() { return OpeningBalanceRow.deletePermission; }
        protected getInsertPermission() { return OpeningBalanceRow.insertPermission; }
        protected getUpdatePermission() { return OpeningBalanceRow.updatePermission; }

        protected form = new OpeningBalanceForm(this.idPrefix);
        constructor() {
            super();


        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
            window.location.href = "/Customers/Customers";
        }
    }
}