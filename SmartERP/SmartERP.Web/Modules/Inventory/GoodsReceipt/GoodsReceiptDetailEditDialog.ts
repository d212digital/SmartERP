namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsReceiptDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsReceiptDetailsRow> {
        protected getFormKey() { return GoodsReceiptDetailsForm.formKey; }
        protected getNameProperty() { return GoodsReceiptDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return GoodsReceiptDetailsRow.localTextPrefix; }

        protected form: GoodsReceiptDetailsForm;

        constructor() {
            super();
            this.form = new GoodsReceiptDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                     this.form.Quantity.value = 1;
                    //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                    //this.form.Quantity.value = 1;
                    //this.form.Discount.value = 0;
                    //var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                    //this.form.UnitId.value = unitId;
                }
            });
        }

    }
}