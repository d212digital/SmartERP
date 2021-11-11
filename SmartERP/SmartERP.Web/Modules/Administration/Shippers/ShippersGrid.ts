
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ShippersGrid extends Serenity.EntityGrid<ShippersRow, any> {
        protected getColumnsKey() { return 'Administration.Shippers'; }
        protected getDialogType() { return ShippersDialog; }
        protected getIsActiveProperty() { return ShippersRow.isActiveProperty; }
        protected getIdProperty() { return ShippersRow.idProperty; }
        protected getInsertPermission() { return ShippersRow.insertPermission; }
        protected getLocalTextPrefix() { return ShippersRow.localTextPrefix; }
        protected getService() { return ShippersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}