namespace SmartERP.Accounts {
    export interface CustomerReceiveForm {
        VDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class CustomerReceiveForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.CustomerReceive';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerReceiveForm.init)  {
                CustomerReceiveForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(CustomerReceiveForm, [
                    'VDate', w0,
                    'CustomerId', w1,
                    'CoaId', w1,
                    'Debit', w2,
                    'Remark', w3
                ]);
            }
        }
    }
}
