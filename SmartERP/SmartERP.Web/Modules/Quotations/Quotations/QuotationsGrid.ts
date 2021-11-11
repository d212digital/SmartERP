
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey() { return 'Quotations.Quotations'; }
        protected getDialogType() { return QuotationsDialog; }
        protected getIdProperty() { return QuotationsRow.idProperty; }
        protected getInsertPermission() { return QuotationsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationsRow.localTextPrefix; }
        protected getService() { return QuotationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Quotation',
                name: '',
                format: ctx => '<a class="inline-action print-quotation" title="Download Quotation">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Quotation',
                name: '',
                format: ctx => '<a class="inline-action view-quotation" title="View Quotation">' +
                    '<i class="fa fa-eye text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-quotation')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Quotations.QuotationReport',
                        params: {
                            OrderID: item.Id
                        }
                    });
                }
                if (target.hasClass('view-quotation')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Quotations.QuotationReport',
                        extension: 'html',
                        params: {
                            OrderID: item.Id
                        }
                    });
                }
            }
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: QuotationsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}