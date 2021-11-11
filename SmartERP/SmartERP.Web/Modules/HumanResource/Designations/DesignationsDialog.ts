
namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerClass()
    export class DesignationsDialog extends Serenity.EntityDialog<DesignationsRow, any> {
        protected getFormKey() { return DesignationsForm.formKey; }
        protected getIdProperty() { return DesignationsRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationsRow.localTextPrefix; }
        protected getNameProperty() { return DesignationsRow.nameProperty; }
        protected getService() { return DesignationsService.baseUrl; }
        protected getDeletePermission() { return DesignationsRow.deletePermission; }
        protected getInsertPermission() { return DesignationsRow.insertPermission; }
        protected getUpdatePermission() { return DesignationsRow.updatePermission; }

        protected form = new DesignationsForm(this.idPrefix);

    }
}