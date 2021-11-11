
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class WarehousesDialog extends Serenity.EntityDialog<WarehousesRow, any> {
        protected getFormKey() { return WarehousesForm.formKey; }
        protected getIdProperty() { return WarehousesRow.idProperty; }
        protected getLocalTextPrefix() { return WarehousesRow.localTextPrefix; }
        protected getNameProperty() { return WarehousesRow.nameProperty; }
        protected getService() { return WarehousesService.baseUrl; }
        protected getDeletePermission() { return WarehousesRow.deletePermission; }
        protected getInsertPermission() { return WarehousesRow.insertPermission; }
        protected getUpdatePermission() { return WarehousesRow.updatePermission; }

        protected form = new WarehousesForm(this.idPrefix);

    }
}