
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    export class OpeningBalanceGrid extends Serenity.EntityGrid<OpeningBalanceRow, any> {
        protected getColumnsKey() { return 'Accounts.OpeningBalance'; }
        protected getDialogType() { return OpeningBalanceDialog; }
        protected getIdProperty() { return OpeningBalanceRow.idProperty; }
        protected getInsertPermission() { return OpeningBalanceRow.insertPermission; }
        protected getLocalTextPrefix() { return OpeningBalanceRow.localTextPrefix; }
        protected getService() { return OpeningBalanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}