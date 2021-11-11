namespace SmartERP.Products {
    export interface BrandsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class BrandsForm extends Serenity.PrefixedContext {
        static formKey = 'Products.Brands';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrandsForm.init)  {
                BrandsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(BrandsForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
