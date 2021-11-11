
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsReceiptDetailsDialog extends Serenity.EntityDialog<GoodsReceiptDetailsRow, any> {
        protected getFormKey() { return GoodsReceiptDetailsForm.formKey; }
        protected getIdProperty() { return GoodsReceiptDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsReceiptDetailsRow.localTextPrefix; }
        protected getNameProperty() { return GoodsReceiptDetailsRow.nameProperty; }
        protected getService() { return GoodsReceiptDetailsService.baseUrl; }
        protected getDeletePermission() { return GoodsReceiptDetailsRow.deletePermission; }
        protected getInsertPermission() { return GoodsReceiptDetailsRow.insertPermission; }
        protected getUpdatePermission() { return GoodsReceiptDetailsRow.updatePermission; }

        protected form = new GoodsReceiptDetailsForm(this.idPrefix);

    }
}