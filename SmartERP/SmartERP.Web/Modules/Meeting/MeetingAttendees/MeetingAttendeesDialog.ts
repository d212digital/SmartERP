
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingAttendeesDialog extends Serenity.EntityDialog<MeetingAttendeesRow, any> {
        protected getFormKey() { return MeetingAttendeesForm.formKey; }
        protected getIdProperty() { return MeetingAttendeesRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAttendeesRow.localTextPrefix; }
        protected getService() { return MeetingAttendeesService.baseUrl; }
        protected getDeletePermission() { return MeetingAttendeesRow.deletePermission; }
        protected getInsertPermission() { return MeetingAttendeesRow.insertPermission; }
        protected getUpdatePermission() { return MeetingAttendeesRow.updatePermission; }

        protected form = new MeetingAttendeesForm(this.idPrefix);

    }
}