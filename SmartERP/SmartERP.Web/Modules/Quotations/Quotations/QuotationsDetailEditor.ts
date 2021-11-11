

namespace SmartERP.Quotations {
    @Serenity.Decorators.registerEditor()
    export class QuotationsDetailEditor extends Serenity.Extensions.GridEditorBase<QuotationDetailsRow> {
        protected getColumnsKey() { return "Quotations.QuotationDetails"; }
        protected getLocalTextPrefix() { return QuotationDetailsRow.localTextPrefix; }
        protected getDialogType() { return QuotationsDetailEditDialog; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }
        
        protected validateEntity(row: QuotationDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;
            // alert('test');
            //if (row.Quntity!>0) {
            //    return false;
            //}
            //if (row.UnitPrice! > 0) {
            //    return false;
            //}
            row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                .itemById[row.ProductId].ProductName;
            row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);

            row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                .itemById[row.UnitId].Name;
            //row.PurchasePrice = SmartERP.Products.ProductsRow.getLookup()
            //    .itemById[row.ProductId].PurchasePrice;
            //console.log('product');
            //console.log(XInventory.Products.ProductsRow.getLookup()
            //    .itemById[row.ProductId]);
            return true;
        }
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            // here is several methods to remove add button
            // only one is enabled, others are commented

            // METHOD 1
            // we would be able to simply return an empty button list,
            // but this would also remove all other buttons
            // return [];

            // METHOD 2
            // remove by splicing (something like delete by index)
            // here we hard code add button index (not nice!)
            // buttons.splice(0, 1);

            // METHOD 3 - recommended
            // remove by splicing, but this time find button index
            // by its css class. it is the best and safer method

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}   