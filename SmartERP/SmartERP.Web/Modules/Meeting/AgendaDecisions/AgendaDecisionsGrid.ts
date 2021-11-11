
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaDecisionsGrid extends Serenity.EntityGrid<AgendaDecisionsRow, any> {
        protected getColumnsKey() { return 'Meeting.AgendaDecisions'; }
        protected getDialogType() { return AgendaDecisionsDialog; }
        protected getIsActiveProperty() { return AgendaDecisionsRow.isActiveProperty; }
        protected getIdProperty() { return AgendaDecisionsRow.idProperty; }
        protected getInsertPermission() { return AgendaDecisionsRow.insertPermission; }
        protected getLocalTextPrefix() { return AgendaDecisionsRow.localTextPrefix; }
        protected getService() { return AgendaDecisionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}