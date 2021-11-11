
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class MeetingsGrid extends Serenity.EntityGrid<MeetingsRow, any> {
        protected getColumnsKey() { return 'Meeting.Meetings'; }
        protected getDialogType() { return MeetingsDialog; }
        protected getIsActiveProperty() { return MeetingsRow.isActiveProperty; }
        protected getIdProperty() { return MeetingsRow.idProperty; }
        protected getInsertPermission() { return MeetingsRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingsRow.localTextPrefix; }
        protected getService() { return MeetingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}