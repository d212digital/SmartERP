namespace SmartERP.Purchases {
    export interface PurchaseDetailsForm {
        BrandId: Serenity.LookupEditor;
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class PurchaseDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Purchases.PurchaseDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseDetailsForm.init)  {
                PurchaseDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(PurchaseDetailsForm, [
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
