
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    export class AttendanceGrid extends Serenity.EntityGrid<AttendanceRow, any> {
        protected getColumnsKey() { return 'HumanResource.Attendance'; }
        protected getDialogType() { return AttendanceDialog; }
        protected getIdProperty() { return AttendanceRow.idProperty; }
        protected getInsertPermission() { return AttendanceRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendanceRow.localTextPrefix; }
        protected getService() { return AttendanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}