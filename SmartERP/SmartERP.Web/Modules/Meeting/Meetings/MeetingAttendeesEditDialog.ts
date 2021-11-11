
namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingAttendeesEditDialog extends Serenity.Extensions.GridEditorDialog<MeetingAttendeesRow> {
        protected getFormKey() { return MeetingAttendeesForm.formKey; }
        //protected getNameProperty() { return MeetingAttendeesRow.nameProperty; }
        protected getLocalTextPrefix() { return MeetingAttendeesRow.localTextPrefix; }

        protected form: MeetingAttendeesForm;

        constructor() {
            super();
            this.form = new MeetingAttendeesForm(this.idPrefix);

            //this.form.ProductId.changeSelect2(e => {

            //    var productID = Q.toId(this.form.ProductId.value);
            //    if (productID != null) {
            //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
            //        this.form.Quantity.value = 1;
            //        this.form.Discount.value = 0;
            //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
            //        this.form.UnitId.value = unitId;
            //    }
            //});
        }

    }
}