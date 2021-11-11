
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    export class BrandsDialog extends Serenity.EntityDialog<BrandsRow, any> {
        protected getFormKey() { return BrandsForm.formKey; }
        protected getIdProperty() { return BrandsRow.idProperty; }
        protected getLocalTextPrefix() { return BrandsRow.localTextPrefix; }
        protected getNameProperty() { return BrandsRow.nameProperty; }
        protected getService() { return BrandsService.baseUrl; }
        protected getDeletePermission() { return BrandsRow.deletePermission; }
        protected getInsertPermission() { return BrandsRow.insertPermission; }
        protected getUpdatePermission() { return BrandsRow.updatePermission; }

        protected form = new BrandsForm(this.idPrefix);

    }
}