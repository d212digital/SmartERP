namespace SmartERP.Inventory {
    export interface DamagedProductsForm {
        CategoryId: Products.CategoriesEditor;
        ProductId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class DamagedProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.DamagedProducts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DamagedProductsForm.init)  {
                DamagedProductsForm.init = true;

                var s = Serenity;
                var w0 = Products.CategoriesEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(DamagedProductsForm, [
                    'CategoryId', w0,
                    'ProductId', w1,
                    'Code', w2,
                    'Name', w2,
                    'PurchasePrice', w3,
                    'Quantity', w3,
                    'Date', w4,
                    'Note', w5
                ]);
            }
        }
    }
}
