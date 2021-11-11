namespace SmartERP.Reports {
    export interface DailyClosingForm {
        Date: Serenity.DateEditor;
        LastDayClosing: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class DailyClosingForm extends Serenity.PrefixedContext {
        static formKey = 'Reports.DailyClosing';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DailyClosingForm.init)  {
                DailyClosingForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(DailyClosingForm, [
                    'Date', w0,
                    'LastDayClosing', w1,
                    'CashIn', w1,
                    'CashOut', w1,
                    'Amount', w1
                ]);
            }
        }
    }
}
