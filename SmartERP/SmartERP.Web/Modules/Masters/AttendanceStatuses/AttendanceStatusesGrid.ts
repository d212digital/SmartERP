
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendanceStatusesGrid extends Serenity.EntityGrid<AttendanceStatusesRow, any> {
        protected getColumnsKey() { return 'Masters.AttendanceStatuses'; }
        protected getDialogType() { return AttendanceStatusesDialog; }
        protected getIsActiveProperty() { return AttendanceStatusesRow.isActiveProperty; }
        protected getIdProperty() { return AttendanceStatusesRow.idProperty; }
        protected getInsertPermission() { return AttendanceStatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendanceStatusesRow.localTextPrefix; }
        protected getService() { return AttendanceStatusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}