
namespace SmartERP.Purchases {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailsDialog extends Serenity.EntityDialog<PurchaseDetailsRow, any> {
        protected getFormKey() { return PurchaseDetailsForm.formKey; }
        protected getIdProperty() { return PurchaseDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseDetailsRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseDetailsRow.nameProperty; }
        protected getService() { return PurchaseDetailsService.baseUrl; }
        protected getDeletePermission() { return PurchaseDetailsRow.deletePermission; }
        protected getInsertPermission() { return PurchaseDetailsRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseDetailsRow.updatePermission; }

        protected form = new PurchaseDetailsForm(this.idPrefix);

    }
}