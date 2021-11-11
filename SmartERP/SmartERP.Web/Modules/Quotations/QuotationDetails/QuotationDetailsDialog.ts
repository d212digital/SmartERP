
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationDetailsDialog extends Serenity.EntityDialog<QuotationDetailsRow, any> {
        protected getFormKey() { return QuotationDetailsForm.formKey; }
        protected getIdProperty() { return QuotationDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationDetailsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationDetailsRow.nameProperty; }
        protected getService() { return QuotationDetailsService.baseUrl; }
        protected getDeletePermission() { return QuotationDetailsRow.deletePermission; }
        protected getInsertPermission() { return QuotationDetailsRow.insertPermission; }
        protected getUpdatePermission() { return QuotationDetailsRow.updatePermission; }

        protected form = new QuotationDetailsForm(this.idPrefix);

    }
}