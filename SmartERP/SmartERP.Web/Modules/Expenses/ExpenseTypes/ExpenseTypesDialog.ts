
namespace SmartERP.Expenses {

    @Serenity.Decorators.registerClass()
    export class ExpenseTypesDialog extends Serenity.EntityDialog<ExpenseTypesRow, any> {
        protected getFormKey() { return ExpenseTypesForm.formKey; }
        protected getIdProperty() { return ExpenseTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpenseTypesRow.localTextPrefix; }
        protected getNameProperty() { return ExpenseTypesRow.nameProperty; }
        protected getService() { return ExpenseTypesService.baseUrl; }
        protected getDeletePermission() { return ExpenseTypesRow.deletePermission; }
        protected getInsertPermission() { return ExpenseTypesRow.insertPermission; }
        protected getUpdatePermission() { return ExpenseTypesRow.updatePermission; }

        protected form = new ExpenseTypesForm(this.idPrefix);

    }
}