namespace SmartERP.Services {
    export interface ServicesForm {
        ServiceName: Serenity.StringEditor;
        Charge: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
        Tax: Serenity.DecimalEditor;
    }

    export class ServicesForm extends Serenity.PrefixedContext {
        static formKey = 'Services.Services';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServicesForm.init)  {
                ServicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ServicesForm, [
                    'ServiceName', w0,
                    'Charge', w1,
                    'Description', w0,
                    'Tax', w1
                ]);
            }
        }
    }
}
