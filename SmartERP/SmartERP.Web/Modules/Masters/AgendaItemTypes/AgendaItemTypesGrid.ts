
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AgendaItemTypesGrid extends Serenity.EntityGrid<AgendaItemTypesRow, any> {
        protected getColumnsKey() { return 'Masters.AgendaItemTypes'; }
        protected getDialogType() { return AgendaItemTypesDialog; }
        protected getIsActiveProperty() { return AgendaItemTypesRow.isActiveProperty; }
        protected getIdProperty() { return AgendaItemTypesRow.idProperty; }
        protected getInsertPermission() { return AgendaItemTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AgendaItemTypesRow.localTextPrefix; }
        protected getService() { return AgendaItemTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}