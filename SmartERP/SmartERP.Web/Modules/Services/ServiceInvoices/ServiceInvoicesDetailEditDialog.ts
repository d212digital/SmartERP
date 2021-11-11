

namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    export class ServiceInvoicesDetailEditDialog extends Serenity.Extensions.GridEditorDialog<ServiceInvoiceDetailsRow> {
        protected getFormKey() { return ServiceInvoiceDetailsForm.formKey; }
        protected getNameProperty() { return ServiceInvoiceDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return ServiceInvoiceDetailsRow.localTextPrefix; }

        protected form: ServiceInvoiceDetailsForm;

        constructor() {
            super();
            this.form = new ServiceInvoiceDetailsForm(this.idPrefix);

            this.form.ServiceId.changeSelect2(e => {

                var serviceID = Q.toId(this.form.ServiceId.value);
                if (serviceID != null) {
                    this.form.UnitPrice.value = SmartERP.Services.ServicesRow.getLookup().itemById[serviceID].Charge;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    
                }
            });
        }

    }
}