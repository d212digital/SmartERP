
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    export class UnitsDialog extends Serenity.EntityDialog<UnitsRow, any> {
        protected getFormKey() { return UnitsForm.formKey; }
        protected getIdProperty() { return UnitsRow.idProperty; }
        protected getLocalTextPrefix() { return UnitsRow.localTextPrefix; }
        protected getNameProperty() { return UnitsRow.nameProperty; }
        protected getService() { return UnitsService.baseUrl; }
        protected getDeletePermission() { return UnitsRow.deletePermission; }
        protected getInsertPermission() { return UnitsRow.insertPermission; }
        protected getUpdatePermission() { return UnitsRow.updatePermission; }

        protected form = new UnitsForm(this.idPrefix);

    }
}