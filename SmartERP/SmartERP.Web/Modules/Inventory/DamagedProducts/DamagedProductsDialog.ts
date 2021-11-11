
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DamagedProductsDialog extends Serenity.EntityDialog<DamagedProductsRow, any> {
        protected getFormKey() { return DamagedProductsForm.formKey; }
        protected getIdProperty() { return DamagedProductsRow.idProperty; }
        protected getLocalTextPrefix() { return DamagedProductsRow.localTextPrefix; }
        protected getNameProperty() { return DamagedProductsRow.nameProperty; }
        protected getService() { return DamagedProductsService.baseUrl; }
        protected getDeletePermission() { return DamagedProductsRow.deletePermission; }
        protected getInsertPermission() { return DamagedProductsRow.insertPermission; }
        protected getUpdatePermission() { return DamagedProductsRow.updatePermission; }

        protected form = new DamagedProductsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new DamagedProductsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    var item = SmartERP.Products.ProductsRow.getLookup().itemById[productID];
                    this.form.Name.value = item.ProductName;
                    this.form.Code.value = item.Barcode;
                    this.form.PurchasePrice.value = item.PurchasePrice;
                    this.form.Quantity.value = 1;
                }
            });
        }
    }
}