namespace SmartERP.Products {
    export interface ProductsForm {
        Barcode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        Sn: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.DecimalEditor;
        UnitsOnOrder: Serenity.DecimalEditor;
        ReorderLevel: Serenity.DecimalEditor;
        CategoryId: CategoriesEditor;
        UnitId: Serenity.LookupEditor;
        BrandId: Serenity.LookupEditor;
        Image: Serenity.ImageUploadEditor;
        ProductDetails: Serenity.TextAreaEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Products.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = CategoriesEditor;
                var w3 = s.LookupEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(ProductsForm, [
                    'Barcode', w0,
                    'ProductName', w0,
                    'Sn', w0,
                    'Model', w0,
                    'UnitPrice', w1,
                    'UnitsInStock', w1,
                    'UnitsOnOrder', w1,
                    'ReorderLevel', w1,
                    'CategoryId', w2,
                    'UnitId', w3,
                    'BrandId', w3,
                    'Image', w4,
                    'ProductDetails', w5
                ]);
            }
        }
    }
}
