namespace SmartERP.Services {
    export interface ServiceInvoicesForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        LineItems: ServiceInvoicesDetailEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        GrandTotal: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class ServiceInvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'Services.ServiceInvoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceInvoicesForm.init)  {
                ServiceInvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = ServiceInvoicesDetailEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(ServiceInvoicesForm, [
                    'CustomerId', w0,
                    'Date', w1,
                    'PaymentAccount', w0,
                    'EmployeeId', w0,
                    'LineItems', w2,
                    'Discount', w3,
                    'TotalDiscount', w3,
                    'Vat', w3,
                    'TotalTax', w3,
                    'ShippingCost', w3,
                    'GrandTotal', w3,
                    'NetTotal', w3,
                    'PaidAmount', w3,
                    'Due', w3,
                    'Change', w3,
                    'Details', w4
                ]);
            }
        }
    }
}
