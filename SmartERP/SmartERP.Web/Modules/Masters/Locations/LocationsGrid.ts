
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class LocationsGrid extends Serenity.EntityGrid<LocationsRow, any> {
        protected getColumnsKey() { return 'Masters.Locations'; }
        protected getDialogType() { return LocationsDialog; }
        protected getIsActiveProperty() { return LocationsRow.isActiveProperty; }
        protected getIdProperty() { return LocationsRow.idProperty; }
        protected getInsertPermission() { return LocationsRow.insertPermission; }
        protected getLocalTextPrefix() { return LocationsRow.localTextPrefix; }
        protected getService() { return LocationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}