namespace SmartERP.Purchases {
    export interface PurchasesForm {
        SupplierId: Serenity.LookupEditor;
        InvoiceNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: PurchaseDetailEditor;
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
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
        RowVersion: Serenity.StringEditor;
    }

    export class PurchasesForm extends Serenity.PrefixedContext {
        static formKey = 'Purchases.Purchases';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchasesForm.init)  {
                PurchasesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = PurchaseDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.EnumEditor;
                var w7 = s.TextAreaEditor;

                Q.initFormType(PurchasesForm, [
                    'SupplierId', w0,
                    'InvoiceNo', w1,
                    'Date', w2,
                    'PaymentAccount', w0,
                    'LineItems', w3,
                    'GrandTotal', w4,
                    'Discount', w4,
                    'TotalDiscount', w4,
                    'NoTax', w5,
                    'Vat', w4,
                    'VatPercentage', w4,
                    'VatType', w6,
                    'TotalTax', w4,
                    'ShippingCost', w4,
                    'NetTotal', w4,
                    'PaidAmount', w4,
                    'Due', w4,
                    'Change', w4,
                    'Details', w7,
                    'RowVersion', w1
                ]);
            }
        }
    }
}
