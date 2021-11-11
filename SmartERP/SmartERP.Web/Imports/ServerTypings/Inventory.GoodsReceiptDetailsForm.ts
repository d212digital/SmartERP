namespace SmartERP.Inventory {
    export interface GoodsReceiptDetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class GoodsReceiptDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.GoodsReceiptDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsReceiptDetailsForm.init)  {
                GoodsReceiptDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(GoodsReceiptDetailsForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'WarehouseId', w0,
                    'Description', w2
                ]);
            }
        }
    }
}
