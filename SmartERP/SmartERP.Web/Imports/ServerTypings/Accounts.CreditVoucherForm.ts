namespace SmartERP.Accounts {
    export interface CreditVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class CreditVoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.CreditVoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CreditVoucherForm.init)  {
                CreditVoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(CreditVoucherForm, [
                    'VDate', w0,
                    'CoaId', w1,
                    'CreditAccountId', w1,
                    'Debit', w2,
                    'Remark', w3
                ]);
            }
        }
    }
}
