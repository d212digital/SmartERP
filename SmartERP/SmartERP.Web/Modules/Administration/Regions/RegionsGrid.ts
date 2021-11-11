
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class RegionsGrid extends Serenity.EntityGrid<RegionsRow, any> {
        protected getColumnsKey() { return 'Administration.Regions'; }
        protected getDialogType() { return RegionsDialog; }
        protected getIsActiveProperty() { return RegionsRow.isActiveProperty; }
        protected getIdProperty() { return RegionsRow.idProperty; }
        protected getInsertPermission() { return RegionsRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionsRow.localTextPrefix; }
        protected getService() { return RegionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}