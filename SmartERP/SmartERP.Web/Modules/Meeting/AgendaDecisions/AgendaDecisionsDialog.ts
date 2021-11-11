
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaDecisionsDialog extends Serenity.EntityDialog<AgendaDecisionsRow, any> {
        protected getFormKey() { return AgendaDecisionsForm.formKey; }
        protected getIdProperty() { return AgendaDecisionsRow.idProperty; }
        protected getLocalTextPrefix() { return AgendaDecisionsRow.localTextPrefix; }
        protected getNameProperty() { return AgendaDecisionsRow.nameProperty; }
        protected getService() { return AgendaDecisionsService.baseUrl; }
        protected getDeletePermission() { return AgendaDecisionsRow.deletePermission; }
        protected getInsertPermission() { return AgendaDecisionsRow.insertPermission; }
        protected getUpdatePermission() { return AgendaDecisionsRow.updatePermission; }

        protected form = new AgendaDecisionsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new AgendaDecisionsForm(this.idPrefix);
            var url = window.location.href
            var index = url.lastIndexOf('Meetings#edit/');
            var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
            //this.form.RelatedAgendaItem.
            //this.form.Meeting.set_value(metingId);

        }
    }
}