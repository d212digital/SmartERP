
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class ResolutionStatusesDialog extends Serenity.EntityDialog<ResolutionStatusesRow, any> {
        protected getFormKey() { return ResolutionStatusesForm.formKey; }
        protected getIdProperty() { return ResolutionStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return ResolutionStatusesRow.localTextPrefix; }
        protected getNameProperty() { return ResolutionStatusesRow.nameProperty; }
        protected getService() { return ResolutionStatusesService.baseUrl; }
        protected getDeletePermission() { return ResolutionStatusesRow.deletePermission; }
        protected getInsertPermission() { return ResolutionStatusesRow.insertPermission; }
        protected getUpdatePermission() { return ResolutionStatusesRow.updatePermission; }

        protected form = new ResolutionStatusesForm(this.idPrefix);

    }
}