namespace SmartERP.Inventory {
    export interface GoodsIssueDetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class GoodsIssueDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.GoodsIssueDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsIssueDetailsForm.init)  {
                GoodsIssueDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(GoodsIssueDetailsForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'WarehouseId', w0,
                    'Description', w2
                ]);
            }
        }
    }
}
