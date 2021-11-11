
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DamagedProductsGrid extends Serenity.EntityGrid<DamagedProductsRow, any> {
        protected getColumnsKey() { return 'Inventory.DamagedProducts'; }
        protected getDialogType() { return DamagedProductsDialog; }
        protected getIdProperty() { return DamagedProductsRow.idProperty; }
        protected getInsertPermission() { return DamagedProductsRow.insertPermission; }
        protected getLocalTextPrefix() { return DamagedProductsRow.localTextPrefix; }
        protected getService() { return DamagedProductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: DamagedProductsService.baseUrl + '/ListExcel',
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