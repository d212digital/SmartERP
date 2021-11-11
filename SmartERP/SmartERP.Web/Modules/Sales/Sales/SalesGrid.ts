
namespace SmartERP.Sales {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey() { return 'Sales.Sales'; }
        protected getDialogType() { return SalesDialog; }
        protected getIdProperty() { return SalesRow.idProperty; }
        protected getInsertPermission() { return SalesRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getService() { return SalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Download Invoice">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Invoice',
                name: '',
                format: ctx => '<a class="inline-action view-invoice" title="View Invoice">' +
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

                if (target.hasClass('print-invoice')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Sales.SalesReport',
                        params: {
                            OrderID: item.Id
                        }
                    });
                }
                if (target.hasClass('view-invoice')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Sales.SalesReport',
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
                service: SalesService.baseUrl + '/ListExcel',
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