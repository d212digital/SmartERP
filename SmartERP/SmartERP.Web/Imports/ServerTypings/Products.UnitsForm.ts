namespace SmartERP.Products {
    export interface UnitsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class UnitsForm extends Serenity.PrefixedContext {
        static formKey = 'Products.Units';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitsForm.init)  {
                UnitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(UnitsForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
