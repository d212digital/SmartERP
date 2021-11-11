namespace SmartERP.Sales {
    export interface SaleDetailsForm {
        BrandId: Serenity.LookupEditor;
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SaleDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SaleDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaleDetailsForm.init)  {
                SaleDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(SaleDetailsForm, [
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
