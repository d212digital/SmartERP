
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class StatesGrid extends Serenity.EntityGrid<StatesRow, any> {
        protected getColumnsKey() { return 'Administration.States'; }
        protected getDialogType() { return StatesDialog; }
        protected getIsActiveProperty() { return StatesRow.isActiveProperty; }
        protected getIdProperty() { return StatesRow.idProperty; }
        protected getInsertPermission() { return StatesRow.insertPermission; }
        protected getLocalTextPrefix() { return StatesRow.localTextPrefix; }
        protected getService() { return StatesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}