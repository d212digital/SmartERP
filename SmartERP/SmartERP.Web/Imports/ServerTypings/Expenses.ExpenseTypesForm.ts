namespace SmartERP.Expenses {
    export interface ExpenseTypesForm {
        Type: Serenity.StringEditor;
    }

    export class ExpenseTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.ExpenseTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpenseTypesForm.init)  {
                ExpenseTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ExpenseTypesForm, [
                    'Type', w0
                ]);
            }
        }
    }
}
