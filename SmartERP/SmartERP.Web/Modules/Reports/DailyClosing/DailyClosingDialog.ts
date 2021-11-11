
namespace SmartERP.Reports {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DailyClosingDialog extends Serenity.EntityDialog<DailyClosingRow, any> {
        protected getFormKey() { return DailyClosingForm.formKey; }
        protected getIdProperty() { return DailyClosingRow.idProperty; }
        protected getLocalTextPrefix() { return DailyClosingRow.localTextPrefix; }
        protected getService() { return DailyClosingService.baseUrl; }
        protected getDeletePermission() { return DailyClosingRow.deletePermission; }
        protected getInsertPermission() { return DailyClosingRow.insertPermission; }
        protected getUpdatePermission() { return DailyClosingRow.updatePermission; }

        protected form = new DailyClosingForm(this.idPrefix);
        constructor() {
            super();
            this.form = new DailyClosingForm(this.idPrefix);
           
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
            //window.location.href = "/Customers/Customers";
        }
    }
}