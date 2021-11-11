namespace SmartERP.Inventory {
    export interface UpdateStocksForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        StockMode: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class UpdateStocksForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.UpdateStocks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UpdateStocksForm.init)  {
                UpdateStocksForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(UpdateStocksForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'WarehouseId', w0,
                    'StockMode', w2,
                    'Status', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
