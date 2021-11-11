
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class SupplierGroupsDialog extends Serenity.EntityDialog<SupplierGroupsRow, any> {
        protected getFormKey() { return SupplierGroupsForm.formKey; }
        protected getIdProperty() { return SupplierGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierGroupsRow.localTextPrefix; }
        protected getNameProperty() { return SupplierGroupsRow.nameProperty; }
        protected getService() { return SupplierGroupsService.baseUrl; }
        protected getDeletePermission() { return SupplierGroupsRow.deletePermission; }
        protected getInsertPermission() { return SupplierGroupsRow.insertPermission; }
        protected getUpdatePermission() { return SupplierGroupsRow.updatePermission; }

        protected form = new SupplierGroupsForm(this.idPrefix);

    }
}