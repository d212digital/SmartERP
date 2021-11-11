
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey() { return 'HumanResource.Employees'; }
        protected getDialogType() { return EmployeesDialog; }
        protected getIsActiveProperty() { return EmployeesRow.isActiveProperty; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getInsertPermission() { return EmployeesRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getService() { return EmployeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}