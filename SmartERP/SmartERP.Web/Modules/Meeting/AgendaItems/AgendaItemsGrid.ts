
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaItemsGrid extends Serenity.EntityGrid<AgendaItemsRow, any> {
        protected getColumnsKey() { return 'Meeting.AgendaItems'; }
        protected getDialogType() { return AgendaItemsDialog; }
        protected getIsActiveProperty() { return AgendaItemsRow.isActiveProperty; }
        protected getIdProperty() { return AgendaItemsRow.idProperty; }
        protected getInsertPermission() { return AgendaItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return AgendaItemsRow.localTextPrefix; }
        protected getService() { return AgendaItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}