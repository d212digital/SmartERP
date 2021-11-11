
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class RegionsDialog extends Serenity.EntityDialog<RegionsRow, any> {
        protected getFormKey() { return RegionsForm.formKey; }
        protected getIdProperty() { return RegionsRow.idProperty; }
        protected getLocalTextPrefix() { return RegionsRow.localTextPrefix; }
        protected getNameProperty() { return RegionsRow.nameProperty; }
        protected getService() { return RegionsService.baseUrl; }
        protected getDeletePermission() { return RegionsRow.deletePermission; }
        protected getInsertPermission() { return RegionsRow.insertPermission; }
        protected getUpdatePermission() { return RegionsRow.updatePermission; }

        protected form = new RegionsForm(this.idPrefix);

    }
}