
namespace SmartERP.Suppliers {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey() { return 'Suppliers.Suppliers'; }
        protected getDialogType() { return SuppliersDialog; }
        protected getIsActiveProperty() { return SuppliersRow.isActiveProperty; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getInsertPermission() { return SuppliersRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getService() { return SuppliersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}