
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey() { return CurrenciesForm.formKey; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getNameProperty() { return CurrenciesRow.nameProperty; }
        protected getService() { return CurrenciesService.baseUrl; }
        protected getDeletePermission() { return CurrenciesRow.deletePermission; }
        protected getInsertPermission() { return CurrenciesRow.insertPermission; }
        protected getUpdatePermission() { return CurrenciesRow.updatePermission; }

        protected form = new CurrenciesForm(this.idPrefix);

    }
}