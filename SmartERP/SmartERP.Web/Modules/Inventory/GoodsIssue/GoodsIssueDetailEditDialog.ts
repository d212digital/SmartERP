
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsIssueDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsIssueDetailsRow> {
        protected getFormKey() { return GoodsIssueDetailsForm.formKey; }
        protected getNameProperty() { return GoodsIssueDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return GoodsIssueDetailsRow.localTextPrefix; }

        protected form: GoodsIssueDetailsForm;

        constructor() {
            super();
            this.form = new GoodsIssueDetailsForm(this.idPrefix);

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