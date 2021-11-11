
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    export class AttendanceDialog extends Serenity.EntityDialog<AttendanceRow, any> {
        protected getFormKey() { return AttendanceForm.formKey; }
        protected getIdProperty() { return AttendanceRow.idProperty; }
        protected getLocalTextPrefix() { return AttendanceRow.localTextPrefix; }
        protected getService() { return AttendanceService.baseUrl; }
        protected getDeletePermission() { return AttendanceRow.deletePermission; }
        protected getInsertPermission() { return AttendanceRow.insertPermission; }
        protected getUpdatePermission() { return AttendanceRow.updatePermission; }

        protected form = new AttendanceForm(this.idPrefix);

    }
}