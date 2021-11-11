
namespace SmartERP.Banks {

    @Serenity.Decorators.registerClass()
    export class BanksDialog extends Serenity.EntityDialog<BanksRow, any> {
        protected getFormKey() { return BanksForm.formKey; }
        protected getIdProperty() { return BanksRow.idProperty; }
        protected getLocalTextPrefix() { return BanksRow.localTextPrefix; }
        protected getNameProperty() { return BanksRow.nameProperty; }
        protected getService() { return BanksService.baseUrl; }
        protected getDeletePermission() { return BanksRow.deletePermission; }
        protected getInsertPermission() { return BanksRow.insertPermission; }
        protected getUpdatePermission() { return BanksRow.updatePermission; }

        protected form = new BanksForm(this.idPrefix);

    }
}