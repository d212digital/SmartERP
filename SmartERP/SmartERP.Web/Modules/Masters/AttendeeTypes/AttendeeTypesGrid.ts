
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendeeTypesGrid extends Serenity.EntityGrid<AttendeeTypesRow, any> {
        protected getColumnsKey() { return 'Masters.AttendeeTypes'; }
        protected getDialogType() { return AttendeeTypesDialog; }
        protected getIsActiveProperty() { return AttendeeTypesRow.isActiveProperty; }
        protected getIdProperty() { return AttendeeTypesRow.idProperty; }
        protected getInsertPermission() { return AttendeeTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendeeTypesRow.localTextPrefix; }
        protected getService() { return AttendeeTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}