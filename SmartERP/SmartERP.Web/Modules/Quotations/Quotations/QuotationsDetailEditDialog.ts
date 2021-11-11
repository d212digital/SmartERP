
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationsDetailEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationDetailsRow> {
        protected getFormKey() { return QuotationDetailsForm.formKey; }
        protected getNameProperty() { return QuotationDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return QuotationDetailsRow.localTextPrefix; }

        protected form: QuotationDetailsForm;

        constructor() {
            super();
            this.form = new QuotationDetailsForm(this.idPrefix);

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