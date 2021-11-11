
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TerritoriesGrid extends Serenity.EntityGrid<TerritoriesRow, any> {
        protected getColumnsKey() { return 'Administration.Territories'; }
        protected getDialogType() { return TerritoriesDialog; }
        protected getIsActiveProperty() { return TerritoriesRow.isActiveProperty; }
        protected getIdProperty() { return TerritoriesRow.idProperty; }
        protected getInsertPermission() { return TerritoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return TerritoriesRow.localTextPrefix; }
        protected getService() { return TerritoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}