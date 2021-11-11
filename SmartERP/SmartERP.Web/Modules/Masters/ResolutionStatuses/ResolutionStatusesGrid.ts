
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class ResolutionStatusesGrid extends Serenity.EntityGrid<ResolutionStatusesRow, any> {
        protected getColumnsKey() { return 'Masters.ResolutionStatuses'; }
        protected getDialogType() { return ResolutionStatusesDialog; }
        protected getIsActiveProperty() { return ResolutionStatusesRow.isActiveProperty; }
        protected getIdProperty() { return ResolutionStatusesRow.idProperty; }
        protected getInsertPermission() { return ResolutionStatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return ResolutionStatusesRow.localTextPrefix; }
        protected getService() { return ResolutionStatusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}