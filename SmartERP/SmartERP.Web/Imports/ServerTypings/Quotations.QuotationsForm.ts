namespace SmartERP.Quotations {
    export interface QuotationsForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        LineItems: QuotationsDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        VatPercentage: Serenity.DecimalEditor;
        VatType: Serenity.EnumEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
        RowVersion: Serenity.StringEditor;
    }

    export class QuotationsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.Quotations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationsForm.init)  {
                QuotationsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = QuotationsDetailEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.EnumEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.StringEditor;

                Q.initFormType(QuotationsForm, [
                    'CustomerId', w0,
                    'Date', w1,
                    'ExpiryDate', w1,
                    'LineItems', w2,
                    'GrandTotal', w3,
                    'Discount', w3,
                    'TotalDiscount', w3,
                    'NoTax', w4,
                    'Vat', w3,
                    'VatPercentage', w3,
                    'VatType', w5,
                    'TotalTax', w3,
                    'ShippingCost', w3,
                    'NetTotal', w3,
                    'Details', w6,
                    'RowVersion', w7
                ]);
            }
        }
    }
}
