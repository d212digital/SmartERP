
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class NavigationListDialog extends Serenity.EntityDialog<NavigationListRow, any> {
        protected getFormKey() { return NavigationListForm.formKey; }
        protected getIdProperty() { return NavigationListRow.idProperty; }
        protected getLocalTextPrefix() { return NavigationListRow.localTextPrefix; }
        protected getNameProperty() { return NavigationListRow.nameProperty; }
        protected getService() { return NavigationListService.baseUrl; }
        protected getDeletePermission() { return NavigationListRow.deletePermission; }
        protected getInsertPermission() { return NavigationListRow.insertPermission; }
        protected getUpdatePermission() { return NavigationListRow.updatePermission; }

        protected form = new NavigationListForm(this.idPrefix);

    }
}