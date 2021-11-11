namespace SmartERP.Accounts {
    export interface SupplierPaymentForm {
        VDate: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class SupplierPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.SupplierPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierPaymentForm.init)  {
                SupplierPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(SupplierPaymentForm, [
                    'VDate', w0,
                    'SupplierId', w1,
                    'CoaId', w1,
                    'Credit', w2,
                    'Remark', w3
                ]);
            }
        }
    }
}
