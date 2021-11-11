

namespace SmartERP.Reports {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CustomerReceivableReportGrid extends Serenity.EntityGrid<SmartERP.Customers.CustomersRow, any> {
        protected getColumnsKey() { return 'Reports.CustomerReceivableReport'; }
        protected getDialogType() { return SmartERP.Customers.CustomersDialog; }
        protected getIsActiveProperty() { return SmartERP.Customers.CustomersRow.isActiveProperty; }
        protected getIdProperty() { return SmartERP.Customers.CustomersRow.idProperty; }
        protected getInsertPermission() { return SmartERP.Customers.CustomersRow.insertPermission; }
        protected getLocalTextPrefix() { return SmartERP.Customers.CustomersRow.localTextPrefix; }
        protected getService() { return SmartERP.Customers.CustomersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            //request.Criteria = Serenity.Criteria.and(request.Criteria,
            //    [['InStock'], '>', 0])
            //    ;

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '<', 10] (which means string 'A' is less than 10

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
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}