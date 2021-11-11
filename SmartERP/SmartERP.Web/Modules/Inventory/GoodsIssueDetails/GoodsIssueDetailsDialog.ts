
namespace SmartERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsIssueDetailsDialog extends Serenity.EntityDialog<GoodsIssueDetailsRow, any> {
        protected getFormKey() { return GoodsIssueDetailsForm.formKey; }
        protected getIdProperty() { return GoodsIssueDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsIssueDetailsRow.localTextPrefix; }
        protected getNameProperty() { return GoodsIssueDetailsRow.nameProperty; }
        protected getService() { return GoodsIssueDetailsService.baseUrl; }
        protected getDeletePermission() { return GoodsIssueDetailsRow.deletePermission; }
        protected getInsertPermission() { return GoodsIssueDetailsRow.insertPermission; }
        protected getUpdatePermission() { return GoodsIssueDetailsRow.updatePermission; }

        protected form = new GoodsIssueDetailsForm(this.idPrefix);

    }
}