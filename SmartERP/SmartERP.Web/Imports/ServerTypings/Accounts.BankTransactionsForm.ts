namespace SmartERP.Accounts {
    export interface BankTransactionsForm {
        VDate: Serenity.DateEditor;
        AccountType: Serenity.EnumEditor;
        VNo: Serenity.StringEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class BankTransactionsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.BankTransactions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BankTransactionsForm.init)  {
                BankTransactionsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(BankTransactionsForm, [
                    'VDate', w0,
                    'AccountType', w1,
                    'VNo', w2,
                    'CoaId', w3,
                    'Credit', w4,
                    'Narration', w5
                ]);
            }
        }
    }
}
