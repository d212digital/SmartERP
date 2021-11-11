
namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    export class ServicesDialog extends Serenity.EntityDialog<ServicesRow, any> {
        protected getFormKey() { return ServicesForm.formKey; }
        protected getIdProperty() { return ServicesRow.idProperty; }
        protected getLocalTextPrefix() { return ServicesRow.localTextPrefix; }
        protected getNameProperty() { return ServicesRow.nameProperty; }
        protected getService() { return ServicesService.baseUrl; }
        protected getDeletePermission() { return ServicesRow.deletePermission; }
        protected getInsertPermission() { return ServicesRow.insertPermission; }
        protected getUpdatePermission() { return ServicesRow.updatePermission; }

        protected form = new ServicesForm(this.idPrefix);

    }
}