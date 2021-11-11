namespace SmartERP.Expenses {
    export interface ExpensesForm {
        ExpenseTypeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class ExpensesForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.Expenses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensesForm.init)  {
                ExpensesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ExpensesForm, [
                    'ExpenseTypeId', w0,
                    'Date', w1,
                    'PaymentAccount', w0,
                    'Amount', w2
                ]);
            }
        }
    }
}
