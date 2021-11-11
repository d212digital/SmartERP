
namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    export class ServicesGrid extends Serenity.EntityGrid<ServicesRow, any> {
        protected getColumnsKey() { return 'Services.Services'; }
        protected getDialogType() { return ServicesDialog; }
        protected getIdProperty() { return ServicesRow.idProperty; }
        protected getInsertPermission() { return ServicesRow.insertPermission; }
        protected getLocalTextPrefix() { return ServicesRow.localTextPrefix; }
        protected getService() { return ServicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}