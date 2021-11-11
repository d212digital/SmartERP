
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    export class DesignationsGrid extends Serenity.EntityGrid<DesignationsRow, any> {
        protected getColumnsKey() { return 'HumanResource.Designations'; }
        protected getDialogType() { return DesignationsDialog; }
        protected getIsActiveProperty() { return DesignationsRow.isActiveProperty; }
        protected getIdProperty() { return DesignationsRow.idProperty; }
        protected getInsertPermission() { return DesignationsRow.insertPermission; }
        protected getLocalTextPrefix() { return DesignationsRow.localTextPrefix; }
        protected getService() { return DesignationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}