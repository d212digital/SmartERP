
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class StatesDialog extends Serenity.EntityDialog<StatesRow, any> {
        protected getFormKey() { return StatesForm.formKey; }
        protected getIdProperty() { return StatesRow.idProperty; }
        protected getLocalTextPrefix() { return StatesRow.localTextPrefix; }
        protected getNameProperty() { return StatesRow.nameProperty; }
        protected getService() { return StatesService.baseUrl; }
        protected getDeletePermission() { return StatesRow.deletePermission; }
        protected getInsertPermission() { return StatesRow.insertPermission; }
        protected getUpdatePermission() { return StatesRow.updatePermission; }

        protected form = new StatesForm(this.idPrefix);

    }
}