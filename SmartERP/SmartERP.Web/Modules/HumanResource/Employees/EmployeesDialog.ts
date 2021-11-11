
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey() { return EmployeesForm.formKey; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getNameProperty() { return EmployeesRow.nameProperty; }
        protected getService() { return EmployeesService.baseUrl; }
        protected getDeletePermission() { return EmployeesRow.deletePermission; }
        protected getInsertPermission() { return EmployeesRow.insertPermission; }
        protected getUpdatePermission() { return EmployeesRow.updatePermission; }

        protected form = new EmployeesForm(this.idPrefix);

    }
}