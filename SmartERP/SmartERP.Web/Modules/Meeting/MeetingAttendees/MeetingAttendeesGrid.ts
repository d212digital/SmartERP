
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingAttendeesGrid extends Serenity.EntityGrid<MeetingAttendeesRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingAttendees'; }
        protected getDialogType() { return MeetingAttendeesDialog; }
        protected getIsActiveProperty() { return MeetingAttendeesRow.isActiveProperty; }
        protected getIdProperty() { return MeetingAttendeesRow.idProperty; }
        protected getInsertPermission() { return MeetingAttendeesRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingAttendeesRow.localTextPrefix; }
        protected getService() { return MeetingAttendeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}