
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaDecisionsEditDialog extends Serenity.Extensions.GridEditorDialog<AgendaDecisionsRow> {
        protected getFormKey() { return AgendaDecisionsForm.formKey; }
        protected getNameProperty() { return AgendaDecisionsRow.nameProperty; }
        protected getLocalTextPrefix() { return AgendaDecisionsRow.localTextPrefix; }

        protected form: AgendaDecisionsForm;

        constructor() {
            super();
            this.form = new AgendaDecisionsForm(this.idPrefix);
            var url = window.location.href            
            var index = url.lastIndexOf('Meetings#edit/');
            var metingId = Q.toId( url.substring(index).replace('Meetings#edit/', ''));
            //alert(this.form.ResolutionStatus.value);
            //this.form.Meeting.value=metingId;
            
        }
        //protected updateInterface() {
        //    super.updateInterface();
            
        //    var url = window.location.href
        //    var index = url.lastIndexOf('Meetings#edit/');
        //    var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
        //    //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
        //    //this.form.RelatedAgendaItem.value = metingId;
        //    this.form.Meeting.value = metingId;
        //}d    
        protected beforeLoadEntity(entity: MeetingsRow) {
            super.beforeLoadEntity(entity);
            var url = window.location.href
            var index = url.lastIndexOf('Meetings#edit/');
            
            if (index > 0) {
                var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
                //this.form.RelatedAgendaItem.value = metingId;
                
                this.form.Meeting.value = metingId;
                this.form.Meeting.element.trigger("change");
                //console.log(this.form.ResolutionStatus);
                //alert(this.form.ResolutionStatus.value);

            }
        }
        protected loadEntity(entity: MeetingsRow) {
            super.loadEntity(entity);
            //alert(this.form.ResolutionStatus.value);
            //console.log(this.form.ResolutionStatus);

            //this.form.Meeting.setState();
            //var url = window.location.href
            //alert(url);
            //var index = url.lastIndexOf('Meetings#edit/');
            //alert(index);
            //var substring = url.substring(index).replace('Meetings#edit/', '');
            //alert(substring);
            //var q = Q.parseQueryString();
            //console.log(q);
        }

    }
}