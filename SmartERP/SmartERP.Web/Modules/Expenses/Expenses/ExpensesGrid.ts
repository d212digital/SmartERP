
namespace SmartERP.Expenses {

    @Serenity.Decorators.registerClass()
    export class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey() { return 'Expenses.Expenses'; }
        protected getDialogType() { return ExpensesDialog; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getInsertPermission() { return ExpensesRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getService() { return ExpensesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}