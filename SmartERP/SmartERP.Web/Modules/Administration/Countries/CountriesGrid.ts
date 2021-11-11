
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return 'Administration.Countries'; }
        protected getDialogType() { return CountriesDialog; }
        protected getIsActiveProperty() { return CountriesRow.isActiveProperty; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}