namespace SmartERP.Accounts {
    export interface CashAdjustmentForm {
        VDate: Serenity.DateEditor;
        Coa: Serenity.StringEditor;
        AccountType: Serenity.EnumEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class CashAdjustmentForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.CashAdjustment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashAdjustmentForm.init)  {
                CashAdjustmentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(CashAdjustmentForm, [
                    'VDate', w0,
                    'Coa', w1,
                    'AccountType', w2,
                    'Credit', w3,
                    'Narration', w4
                ]);
            }
        }
    }
}
