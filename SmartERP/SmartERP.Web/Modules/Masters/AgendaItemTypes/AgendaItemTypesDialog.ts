
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AgendaItemTypesDialog extends Serenity.EntityDialog<AgendaItemTypesRow, any> {
        protected getFormKey() { return AgendaItemTypesForm.formKey; }
        protected getIdProperty() { return AgendaItemTypesRow.idProperty; }
        protected getLocalTextPrefix() { return AgendaItemTypesRow.localTextPrefix; }
        protected getNameProperty() { return AgendaItemTypesRow.nameProperty; }
        protected getService() { return AgendaItemTypesService.baseUrl; }
        protected getDeletePermission() { return AgendaItemTypesRow.deletePermission; }
        protected getInsertPermission() { return AgendaItemTypesRow.insertPermission; }
        protected getUpdatePermission() { return AgendaItemTypesRow.updatePermission; }

        protected form = new AgendaItemTypesForm(this.idPrefix);

    }
}