
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class MeetingTypesGrid extends Serenity.EntityGrid<MeetingTypesRow, any> {
        protected getColumnsKey() { return 'Masters.MeetingTypes'; }
        protected getDialogType() { return MeetingTypesDialog; }
        protected getIsActiveProperty() { return MeetingTypesRow.isActiveProperty; }
        protected getIdProperty() { return MeetingTypesRow.idProperty; }
        protected getInsertPermission() { return MeetingTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingTypesRow.localTextPrefix; }
        protected getService() { return MeetingTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}