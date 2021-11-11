
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class GoodsReceiptDialog extends Serenity.EntityDialog<GoodsReceiptRow, any> {
        protected getFormKey() { return GoodsReceiptForm.formKey; }
        protected getIdProperty() { return GoodsReceiptRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsReceiptRow.localTextPrefix; }
        protected getNameProperty() { return GoodsReceiptRow.nameProperty; }
        protected getService() { return GoodsReceiptService.baseUrl; }
        protected getDeletePermission() { return GoodsReceiptRow.deletePermission; }
        protected getInsertPermission() { return GoodsReceiptRow.insertPermission; }
        protected getUpdatePermission() { return GoodsReceiptRow.updatePermission; }

        protected form = new GoodsReceiptForm(this.idPrefix);
        constructor() {
            super();


            this.form = new GoodsReceiptForm(this.idPrefix);
            this.form.PurchaseId.change(e => {
                
                var purchaseId = Q.toId(this.form.PurchaseId.value);
                if (purchaseId != null) {

                    this.form.SupplierId.value = Q.toId(SmartERP.Purchases.PurchasesRow.getLookup().itemById[purchaseId].SupplierId);                    
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