
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendeeTypesDialog extends Serenity.EntityDialog<AttendeeTypesRow, any> {
        protected getFormKey() { return AttendeeTypesForm.formKey; }
        protected getIdProperty() { return AttendeeTypesRow.idProperty; }
        protected getLocalTextPrefix() { return AttendeeTypesRow.localTextPrefix; }
        protected getNameProperty() { return AttendeeTypesRow.nameProperty; }
        protected getService() { return AttendeeTypesService.baseUrl; }
        protected getDeletePermission() { return AttendeeTypesRow.deletePermission; }
        protected getInsertPermission() { return AttendeeTypesRow.insertPermission; }
        protected getUpdatePermission() { return AttendeeTypesRow.updatePermission; }

        protected form = new AttendeeTypesForm(this.idPrefix);

    }
}