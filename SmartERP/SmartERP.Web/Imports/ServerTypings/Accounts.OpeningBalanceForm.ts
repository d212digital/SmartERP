namespace SmartERP.Accounts {
    export interface OpeningBalanceForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        AccountType: Serenity.EnumEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class OpeningBalanceForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.OpeningBalance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpeningBalanceForm.init)  {
                OpeningBalanceForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(OpeningBalanceForm, [
                    'VDate', w0,
                    'CoaId', w1,
                    'AccountType', w2,
                    'Debit', w3,
                    'Narration', w4
                ]);
            }
        }
    }
}
