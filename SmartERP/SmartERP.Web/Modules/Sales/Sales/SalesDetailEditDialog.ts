
namespace SmartERP.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesDetailEditDialog extends Serenity.Extensions.GridEditorDialog<SaleDetailsRow> {
        protected getFormKey() { return SaleDetailsForm.formKey; }
        protected getNameProperty() { return SaleDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return SaleDetailsRow.localTextPrefix; }

        protected form: SaleDetailsForm;

        constructor() {
            super();
            this.form = new SaleDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                    this.form.UnitId.value = unitId;
                }
            });
        }

    }
}