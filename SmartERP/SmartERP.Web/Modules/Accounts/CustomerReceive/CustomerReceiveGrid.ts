
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CustomerReceiveGrid extends Serenity.EntityGrid<CustomerReceiveRow, any> {
        protected getColumnsKey() { return 'Accounts.CustomerReceive'; }
        protected getDialogType() { return CustomerReceiveDialog; }
        protected getIdProperty() { return CustomerReceiveRow.idProperty; }
        protected getInsertPermission() { return CustomerReceiveRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerReceiveRow.localTextPrefix; }
        protected getService() { return CustomerReceiveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}