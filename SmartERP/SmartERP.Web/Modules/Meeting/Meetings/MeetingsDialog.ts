
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MeetingsDialog extends Serenity.EntityDialog<MeetingsRow, any> {
        protected getFormKey() { return MeetingsForm.formKey; }
        protected getIdProperty() { return MeetingsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingsRow.nameProperty; }
        protected getService() { return MeetingsService.baseUrl; }
        protected getDeletePermission() { return MeetingsRow.deletePermission; }
        protected getInsertPermission() { return MeetingsRow.insertPermission; }
        protected getUpdatePermission() { return MeetingsRow.updatePermission; }

        protected form = new MeetingsForm(this.idPrefix);
        constructor() {
            super();           
            //var q = Q.parseQueryString();
           //var url = window.location.href
           // alert(url);
           // var index = url.indexOf('#');
           // alert(url.substring(index,2));
        }

        protected loadEntity(entity: MeetingsRow) {
            super.loadEntity(entity);
            //var q = Q.parseQueryString();
            //alert(q["Id"]);
            if (this.isNewOrDeleted() == true) {
                var $tabs = $('.property-tabs');
                $tabs.children().each(function (index, tab) {
                    if (index > 0) {
                        $(tab).addClass('ui-state-disabled');
                        $(tab).on('click', function () { return false; });
                    }
                });
            }

        }
    }
}