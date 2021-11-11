
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class UpdateStocksGrid extends Serenity.EntityGrid<UpdateStocksRow, any> {
        protected getColumnsKey() { return 'Inventory.UpdateStocks'; }
        protected getDialogType() { return UpdateStocksDialog; }
        protected getIdProperty() { return UpdateStocksRow.idProperty; }
        protected getInsertPermission() { return UpdateStocksRow.insertPermission; }
        protected getLocalTextPrefix() { return UpdateStocksRow.localTextPrefix; }
        protected getService() { return UpdateStocksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}