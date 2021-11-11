
namespace SmartERP.Purchases {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PurchasesGrid extends Serenity.EntityGrid<PurchasesRow, any> {
        protected getColumnsKey() { return 'Purchases.Purchases'; }
        protected getDialogType() { return PurchasesDialog; }
        protected getIdProperty() { return PurchasesRow.idProperty; }
        protected getInsertPermission() { return PurchasesRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getService() { return PurchasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Bill',
                name: '',
                format: ctx => '<a class="inline-action print-bill" title="Download Quotation">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Bill',
                name: '',
                format: ctx => '<a class="inline-action view-bill" title="View Quotation">' +
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

                if (target.hasClass('print-bill')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Purchases.PurchaseReport',
                        params: {
                            OrderID: item.Id
                        }
                    });
                }
                if (target.hasClass('view-bill')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Purchases.PurchaseReport',
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
                service: PurchasesService.baseUrl + '/ListExcel',
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