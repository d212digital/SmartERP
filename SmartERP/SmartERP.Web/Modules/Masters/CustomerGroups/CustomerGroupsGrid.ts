
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class CustomerGroupsGrid extends Serenity.EntityGrid<CustomerGroupsRow, any> {
        protected getColumnsKey() { return 'Masters.CustomerGroups'; }
        protected getDialogType() { return CustomerGroupsDialog; }
        protected getIdProperty() { return CustomerGroupsRow.idProperty; }
        protected getIsActiveProperty() { return CustomerGroupsRow.isActiveProperty; }
        protected getInsertPermission() { return CustomerGroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerGroupsRow.localTextPrefix; }
        protected getService() { return CustomerGroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}