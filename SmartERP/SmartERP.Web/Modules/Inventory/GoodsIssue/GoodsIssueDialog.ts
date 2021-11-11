
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class GoodsIssueDialog extends Serenity.EntityDialog<GoodsIssueRow, any> {
        protected getFormKey() { return GoodsIssueForm.formKey; }
        protected getIdProperty() { return GoodsIssueRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsIssueRow.localTextPrefix; }
        protected getNameProperty() { return GoodsIssueRow.nameProperty; }
        protected getService() { return GoodsIssueService.baseUrl; }
        protected getDeletePermission() { return GoodsIssueRow.deletePermission; }
        protected getInsertPermission() { return GoodsIssueRow.insertPermission; }
        protected getUpdatePermission() { return GoodsIssueRow.updatePermission; }

        protected form = new GoodsIssueForm(this.idPrefix);
        constructor() {
            super();


            this.form = new GoodsIssueForm(this.idPrefix);
            this.form.SaleId.change(e => {

                var saleId = Q.toId(this.form.SaleId.value);
                if (saleId != null) {

                    this.form.CustomerId.value = Q.toId(SmartERP.Sales.SalesRow.getLookup().itemById[saleId].CustomerId);
                }

                //this.updateExpiryDate();
            });
            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                var totalQuantity = 0;
                for (var k of this.form.LineItems.getItems()) {
                    totalQuantity += k.Quantity;
                }
                this.form.TotalQuantity.value = totalQuantity;
                // Q.notifySuccess(total.toString());
            });
        }

        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
        }
    }
}