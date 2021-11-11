
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class LocationsDialog extends Serenity.EntityDialog<LocationsRow, any> {
        protected getFormKey() { return LocationsForm.formKey; }
        protected getIdProperty() { return LocationsRow.idProperty; }
        protected getLocalTextPrefix() { return LocationsRow.localTextPrefix; }
        protected getNameProperty() { return LocationsRow.nameProperty; }
        protected getService() { return LocationsService.baseUrl; }
        protected getDeletePermission() { return LocationsRow.deletePermission; }
        protected getInsertPermission() { return LocationsRow.insertPermission; }
        protected getUpdatePermission() { return LocationsRow.updatePermission; }

        protected form = new LocationsForm(this.idPrefix);

    }
}