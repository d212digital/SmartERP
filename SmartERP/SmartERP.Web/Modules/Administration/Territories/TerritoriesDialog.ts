
namespace SmartERP.Administration {

    @Serenity.Decorators.registerClass()
    export class TerritoriesDialog extends Serenity.EntityDialog<TerritoriesRow, any> {
        protected getFormKey() { return TerritoriesForm.formKey; }
        protected getIdProperty() { return TerritoriesRow.idProperty; }
        protected getLocalTextPrefix() { return TerritoriesRow.localTextPrefix; }
        protected getNameProperty() { return TerritoriesRow.nameProperty; }
        protected getService() { return TerritoriesService.baseUrl; }
        protected getDeletePermission() { return TerritoriesRow.deletePermission; }
        protected getInsertPermission() { return TerritoriesRow.insertPermission; }
        protected getUpdatePermission() { return TerritoriesRow.updatePermission; }

        protected form = new TerritoriesForm(this.idPrefix);

    }
}