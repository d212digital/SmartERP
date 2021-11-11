
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class NavigationListGrid extends Serenity.EntityGrid<NavigationListRow, any> {
        protected getColumnsKey() { return NavigationListColumns.columnsKey; }
        protected getDialogType() { return NavigationListDialog; }
        protected getIdProperty() { return NavigationListRow.idProperty; }
        protected getInsertPermission() { return NavigationListRow.insertPermission; }
        protected getLocalTextPrefix() { return NavigationListRow.localTextPrefix; }
        protected getService() { return NavigationListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}