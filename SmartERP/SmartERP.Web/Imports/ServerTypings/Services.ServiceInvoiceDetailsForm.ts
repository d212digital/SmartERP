namespace SmartERP.Services {
    export interface ServiceInvoiceDetailsForm {
        ServiceId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class ServiceInvoiceDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Services.ServiceInvoiceDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceInvoiceDetailsForm.init)  {
                ServiceInvoiceDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(ServiceInvoiceDetailsForm, [
                    'ServiceId', w0,
                    'Quantity', w1,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
