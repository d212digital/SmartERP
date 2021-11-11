
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class UpdateStocksDialog extends Serenity.EntityDialog<UpdateStocksRow, any> {
        protected getFormKey() { return UpdateStocksForm.formKey; }
        protected getIdProperty() { return UpdateStocksRow.idProperty; }
        protected getLocalTextPrefix() { return UpdateStocksRow.localTextPrefix; }
        protected getNameProperty() { return UpdateStocksRow.nameProperty; }
        protected getService() { return UpdateStocksService.baseUrl; }
        protected getDeletePermission() { return UpdateStocksRow.deletePermission; }
        protected getInsertPermission() { return UpdateStocksRow.insertPermission; }
        protected getUpdatePermission() { return UpdateStocksRow.updatePermission; }

        protected form = new UpdateStocksForm(this.idPrefix);

    }
}