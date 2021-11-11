
namespace SmartERP.Customers {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey() { return CustomersForm.formKey; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getNameProperty() { return CustomersRow.nameProperty; }
        protected getService() { return CustomersService.baseUrl; }
        protected getDeletePermission() { return CustomersRow.deletePermission; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getUpdatePermission() { return CustomersRow.updatePermission; }

        protected form = new CustomersForm(this.idPrefix);
               

    }
}