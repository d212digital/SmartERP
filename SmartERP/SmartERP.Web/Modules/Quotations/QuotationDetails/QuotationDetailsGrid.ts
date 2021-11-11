
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationDetailsGrid extends Serenity.EntityGrid<QuotationDetailsRow, any> {
        protected getColumnsKey() { return 'Quotations.QuotationDetails'; }
        protected getDialogType() { return QuotationDetailsDialog; }
        protected getIdProperty() { return QuotationDetailsRow.idProperty; }
        protected getInsertPermission() { return QuotationDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationDetailsRow.localTextPrefix; }
        protected getService() { return QuotationDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}