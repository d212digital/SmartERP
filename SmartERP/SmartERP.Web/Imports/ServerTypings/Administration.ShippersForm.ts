namespace SmartERP.Administration {
    export interface ShippersForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }

    export class ShippersForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Shippers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ShippersForm.init)  {
                ShippersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ShippersForm, [
                    'CompanyName', w0,
                    'Phone', w0
                ]);
            }
        }
    }
}
