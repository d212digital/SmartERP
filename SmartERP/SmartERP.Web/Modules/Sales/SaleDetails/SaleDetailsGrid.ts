
namespace SmartERP.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleDetailsGrid extends Serenity.EntityGrid<SaleDetailsRow, any> {
        protected getColumnsKey() { return 'Sales.SaleDetails'; }
        protected getDialogType() { return SaleDetailsDialog; }
        protected getIdProperty() { return SaleDetailsRow.idProperty; }
        protected getInsertPermission() { return SaleDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleDetailsRow.localTextPrefix; }
        protected getService() { return SaleDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}