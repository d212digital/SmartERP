
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class UnitsGrid extends Serenity.EntityGrid<UnitsRow, any> {
        protected getColumnsKey() { return 'Products.Units'; }
        protected getDialogType() { return UnitsDialog; }
        protected getIsActiveProperty() { return UnitsRow.isActiveProperty; }
        protected getIdProperty() { return UnitsRow.idProperty; }
        protected getInsertPermission() { return UnitsRow.insertPermission; }
        protected getLocalTextPrefix() { return UnitsRow.localTextPrefix; }
        protected getService() { return UnitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}