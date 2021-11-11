namespace SmartERP.Accounts {
    export interface JournalVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class JournalVoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.JournalVoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JournalVoucherForm.init)  {
                JournalVoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(JournalVoucherForm, [
                    'VDate', w0,
                    'CoaId', w1,
                    'Debit', w2,
                    'Credit', w2,
                    'Narration', w3
                ]);
            }
        }
    }
}
