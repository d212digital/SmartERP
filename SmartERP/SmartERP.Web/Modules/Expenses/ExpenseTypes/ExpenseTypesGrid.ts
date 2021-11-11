
namespace SmartERP.Expenses {

    @Serenity.Decorators.registerClass()
    export class ExpenseTypesGrid extends Serenity.EntityGrid<ExpenseTypesRow, any> {
        protected getColumnsKey() { return 'Expenses.ExpenseTypes'; }
        protected getDialogType() { return ExpenseTypesDialog; }
        protected getIdProperty() { return ExpenseTypesRow.idProperty; }
        protected getInsertPermission() { return ExpenseTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpenseTypesRow.localTextPrefix; }
        protected getService() { return ExpenseTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}