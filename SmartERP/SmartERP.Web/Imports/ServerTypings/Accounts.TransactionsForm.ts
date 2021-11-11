namespace SmartERP.Accounts {
    export interface TransactionsForm {
        VNo: Serenity.StringEditor;
        Vtype: Serenity.StringEditor;
        VDate: Serenity.DateEditor;
        CoaId: Serenity.StringEditor;
        Coa: Serenity.StringEditor;
        Narration: Serenity.StringEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        IsPosted: Serenity.BooleanEditor;
        IsAppove: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }

    export class TransactionsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Transactions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionsForm.init)  {
                TransactionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(TransactionsForm, [
                    'VNo', w0,
                    'Vtype', w0,
                    'VDate', w1,
                    'CoaId', w0,
                    'Coa', w0,
                    'Narration', w0,
                    'Debit', w2,
                    'Credit', w2,
                    'IsPosted', w3,
                    'IsAppove', w3,
                    'InsertDate', w1,
                    'InsertUserId', w4,
                    'UpdateDate', w1,
                    'UpdateUserId', w4
                ]);
            }
        }
    }
}
