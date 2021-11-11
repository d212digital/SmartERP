
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    export class TransactionsDialog extends Serenity.EntityDialog<TransactionsRow, any> {
        protected getFormKey() { return TransactionsForm.formKey; }
        protected getIdProperty() { return TransactionsRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionsRow.localTextPrefix; }
        protected getNameProperty() { return TransactionsRow.nameProperty; }
        protected getService() { return TransactionsService.baseUrl; }
        protected getDeletePermission() { return TransactionsRow.deletePermission; }
        protected getInsertPermission() { return TransactionsRow.insertPermission; }
        protected getUpdatePermission() { return TransactionsRow.updatePermission; }

        protected form = new TransactionsForm(this.idPrefix);

    }
}