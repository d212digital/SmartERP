namespace SmartERP.Purchases {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailEditDialog extends Serenity.Extensions.GridEditorDialog<PurchaseDetailsRow> {
        protected getFormKey() { return PurchaseDetailsForm.formKey; }
        protected getNameProperty() { return PurchaseDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return PurchaseDetailsRow.localTextPrefix; }

        protected form: PurchaseDetailsForm;

        constructor() {
            super();
            this.form = new PurchaseDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {
               
                var productID = Q.toId(this.form.ProductId.value);               
                if (productID != null) {                   
                    //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].PurchasePrice;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    this.form.UnitPrice.value = 0;
                    var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                    this.form.UnitId.value = unitId;
                }
            });
        }
        
    }
}