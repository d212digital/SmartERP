
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BankTransactionsGrid extends Serenity.EntityGrid<BankTransactionsRow, any> {
        protected getColumnsKey() { return 'Accounts.BankTransactions'; }
        protected getDialogType() { return BankTransactionsDialog; }
        protected getIdProperty() { return BankTransactionsRow.idProperty; }
        protected getInsertPermission() { return BankTransactionsRow.insertPermission; }
        protected getLocalTextPrefix() { return BankTransactionsRow.localTextPrefix; }
        protected getService() { return BankTransactionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}