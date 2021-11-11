
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaItemsDialog extends Serenity.EntityDialog<AgendaItemsRow, any> {
        protected getFormKey() { return AgendaItemsForm.formKey; }
        protected getIdProperty() { return AgendaItemsRow.idProperty; }
        protected getLocalTextPrefix() { return AgendaItemsRow.localTextPrefix; }
        protected getNameProperty() { return AgendaItemsRow.nameProperty; }
        protected getService() { return AgendaItemsService.baseUrl; }
        protected getDeletePermission() { return AgendaItemsRow.deletePermission; }
        protected getInsertPermission() { return AgendaItemsRow.insertPermission; }
        protected getUpdatePermission() { return AgendaItemsRow.updatePermission; }

        protected form = new AgendaItemsForm(this.idPrefix);

    }
}