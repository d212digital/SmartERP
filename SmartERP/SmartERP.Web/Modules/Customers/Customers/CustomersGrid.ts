
namespace SmartERP.Customers {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey() { return 'Customers.Customers'; }
        protected getDialogType() { return CustomersDialog; }
        protected getIsActiveProperty() { return CustomersRow.isActiveProperty; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getService() { return CustomersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}