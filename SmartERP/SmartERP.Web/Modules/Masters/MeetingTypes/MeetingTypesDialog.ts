
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class MeetingTypesDialog extends Serenity.EntityDialog<MeetingTypesRow, any> {
        protected getFormKey() { return MeetingTypesForm.formKey; }
        protected getIdProperty() { return MeetingTypesRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingTypesRow.localTextPrefix; }
        protected getNameProperty() { return MeetingTypesRow.nameProperty; }
        protected getService() { return MeetingTypesService.baseUrl; }
        protected getDeletePermission() { return MeetingTypesRow.deletePermission; }
        protected getInsertPermission() { return MeetingTypesRow.insertPermission; }
        protected getUpdatePermission() { return MeetingTypesRow.updatePermission; }

        protected form = new MeetingTypesForm(this.idPrefix);

    }
}