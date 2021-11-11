
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class CustomerGroupsDialog extends Serenity.EntityDialog<CustomerGroupsRow, any> {
        protected getFormKey() { return CustomerGroupsForm.formKey; }
        protected getIdProperty() { return CustomerGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerGroupsRow.localTextPrefix; }
        protected getNameProperty() { return CustomerGroupsRow.nameProperty; }
        protected getService() { return CustomerGroupsService.baseUrl; }
        protected getDeletePermission() { return CustomerGroupsRow.deletePermission; }
        protected getInsertPermission() { return CustomerGroupsRow.insertPermission; }
        protected getUpdatePermission() { return CustomerGroupsRow.updatePermission; }

        protected form = new CustomerGroupsForm(this.idPrefix);

    }
}