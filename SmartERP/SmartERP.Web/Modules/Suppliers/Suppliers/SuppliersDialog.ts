
namespace SmartERP.Suppliers {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey() { return SuppliersForm.formKey; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getNameProperty() { return SuppliersRow.nameProperty; }
        protected getService() { return SuppliersService.baseUrl; }
        protected getDeletePermission() { return SuppliersRow.deletePermission; }
        protected getInsertPermission() { return SuppliersRow.insertPermission; }
        protected getUpdatePermission() { return SuppliersRow.updatePermission; }

        protected form = new SuppliersForm(this.idPrefix);

    }
}