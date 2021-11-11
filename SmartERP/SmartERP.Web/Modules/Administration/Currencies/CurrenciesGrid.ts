
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey() { return 'Administration.Currencies'; }
        protected getDialogType() { return CurrenciesDialog; }
        protected getIsActiveProperty() { return CurrenciesRow.isActiveProperty; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getInsertPermission() { return CurrenciesRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getService() { return CurrenciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}