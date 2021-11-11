
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashAdjustmentDialog extends Serenity.EntityDialog<CashAdjustmentRow, any> {
        protected getFormKey() { return CashAdjustmentForm.formKey; }
        protected getIdProperty() { return CashAdjustmentRow.idProperty; }
        protected getLocalTextPrefix() { return CashAdjustmentRow.localTextPrefix; }
        protected getNameProperty() { return CashAdjustmentRow.nameProperty; }
        protected getService() { return CashAdjustmentService.baseUrl; }
        protected getDeletePermission() { return CashAdjustmentRow.deletePermission; }
        protected getInsertPermission() { return CashAdjustmentRow.insertPermission; }
        protected getUpdatePermission() { return CashAdjustmentRow.updatePermission; }

        protected form = new CashAdjustmentForm(this.idPrefix);
        constructor() {
            super();


        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        //protected onSaveSuccess(response) {
        //    this.showSaveSuccessMessage(response);
        //    window.location.href = "/Customers/Customers";
        //}
    }
}