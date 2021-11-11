namespace SmartERP.Accounts {
    export interface DebitVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class DebitVoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.DebitVoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DebitVoucherForm.init)  {
                DebitVoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(DebitVoucherForm, [
                    'VDate', w0,
                    'CoaId', w1,
                    'DebitAccountId', w1,
                    'Credit', w2,
                    'Remark', w3
                ]);
            }
        }
    }
}
