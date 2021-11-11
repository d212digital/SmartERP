
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BrandsGrid extends Serenity.EntityGrid<BrandsRow, any> {
        protected getColumnsKey() { return 'Products.Brands'; }
        protected getDialogType() { return BrandsDialog; }
        protected getIsActiveProperty() { return BrandsRow.isActiveProperty; }
        protected getIdProperty() { return BrandsRow.idProperty; }
        protected getInsertPermission() { return BrandsRow.insertPermission; }
        protected getLocalTextPrefix() { return BrandsRow.localTextPrefix; }
        protected getService() { return BrandsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}