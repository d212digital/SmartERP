
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    export class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey() { return 'HumanResource.Departments'; }
        protected getDialogType() { return DepartmentsDialog; }
        protected getIsActiveProperty() { return DepartmentsRow.isActiveProperty; }
        protected getIdProperty() { return DepartmentsRow.idProperty; }
        protected getInsertPermission() { return DepartmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DepartmentsRow.localTextPrefix; }
        protected getService() { return DepartmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}