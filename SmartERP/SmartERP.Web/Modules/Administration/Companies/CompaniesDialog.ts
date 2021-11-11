
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey() { return CompaniesForm.formKey; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getNameProperty() { return CompaniesRow.nameProperty; }
        protected getService() { return CompaniesService.baseUrl; }
        protected getDeletePermission() { return CompaniesRow.deletePermission; }
        protected getInsertPermission() { return CompaniesRow.insertPermission; }
        protected getUpdatePermission() { return CompaniesRow.updatePermission; }

        protected form = new CompaniesForm(this.idPrefix);
        constructor() {
            super();
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
        }
    }
}