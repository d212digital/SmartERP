
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class SupplierGroupsGrid extends Serenity.EntityGrid<SupplierGroupsRow, any> {
        protected getColumnsKey() { return 'Masters.SupplierGroups'; }
        protected getDialogType() { return SupplierGroupsDialog; }
        protected getIdProperty() { return SupplierGroupsRow.idProperty; }
        protected getIsActiveProperty() { return SupplierGroupsRow.isActiveProperty; }
        protected getInsertPermission() { return SupplierGroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierGroupsRow.localTextPrefix; }
        protected getService() { return SupplierGroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}