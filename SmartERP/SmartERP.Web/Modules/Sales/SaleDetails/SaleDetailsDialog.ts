
namespace SmartERP.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleDetailsDialog extends Serenity.EntityDialog<SaleDetailsRow, any> {
        protected getFormKey() { return SaleDetailsForm.formKey; }
        protected getIdProperty() { return SaleDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SaleDetailsRow.localTextPrefix; }
        protected getNameProperty() { return SaleDetailsRow.nameProperty; }
        protected getService() { return SaleDetailsService.baseUrl; }
        protected getDeletePermission() { return SaleDetailsRow.deletePermission; }
        protected getInsertPermission() { return SaleDetailsRow.insertPermission; }
        protected getUpdatePermission() { return SaleDetailsRow.updatePermission; }

        protected form = new SaleDetailsForm(this.idPrefix);

    }
}