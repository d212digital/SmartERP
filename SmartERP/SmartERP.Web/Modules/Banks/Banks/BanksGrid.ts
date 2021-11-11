
namespace SmartERP.Banks {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BanksGrid extends Serenity.EntityGrid<BanksRow, any> {
        protected getColumnsKey() { return 'Banks.Banks'; }
        protected getDialogType() { return BanksDialog; }
        protected getIsActiveProperty() { return BanksRow.isActiveProperty; }
        protected getIdProperty() { return BanksRow.idProperty; }
        protected getInsertPermission() { return BanksRow.insertPermission; }
        protected getLocalTextPrefix() { return BanksRow.localTextPrefix; }
        protected getService() { return BanksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}