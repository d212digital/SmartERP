namespace SmartERP.Products {
    export interface CategoriesForm {
        ParentCategoryId: CategoriesEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Products.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = CategoriesEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoriesForm, [
                    'ParentCategoryId', w0,
                    'Name', w1,
                    'Description', w1
                ]);
            }
        }
    }
}
