namespace SmartERP.Quotations {
    export interface QuotationDetailsForm {
        BrandId: Serenity.LookupEditor;
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class QuotationDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.QuotationDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationDetailsForm.init)  {
                QuotationDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(QuotationDetailsForm, [
                    'BrandId', w0,
                    'ProductId', w0,
                    'UnitId', w0,
                    'Quantity', w1,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
