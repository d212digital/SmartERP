
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendanceStatusesDialog extends Serenity.EntityDialog<AttendanceStatusesRow, any> {
        protected getFormKey() { return AttendanceStatusesForm.formKey; }
        protected getIdProperty() { return AttendanceStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return AttendanceStatusesRow.localTextPrefix; }
        protected getNameProperty() { return AttendanceStatusesRow.nameProperty; }
        protected getService() { return AttendanceStatusesService.baseUrl; }
        protected getDeletePermission() { return AttendanceStatusesRow.deletePermission; }
        protected getInsertPermission() { return AttendanceStatusesRow.insertPermission; }
        protected getUpdatePermission() { return AttendanceStatusesRow.updatePermission; }

        protected form = new AttendanceStatusesForm(this.idPrefix);

    }
}