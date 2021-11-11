
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey() { return 'Administration.Cities'; }
        protected getDialogType() { return CitiesDialog; }
        protected getIsActiveProperty() { return CitiesRow.isActiveProperty; }
        protected getIdProperty() { return CitiesRow.idProperty; }
        protected getInsertPermission() { return CitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return CitiesRow.localTextPrefix; }
        protected getService() { return CitiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}