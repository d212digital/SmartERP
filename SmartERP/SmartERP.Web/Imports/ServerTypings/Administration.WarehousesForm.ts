namespace SmartERP.Administration {
    export interface WarehousesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class WarehousesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Warehouses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WarehousesForm.init)  {
                WarehousesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(WarehousesForm, [
                    'Name', w0,
                    'CountryId', w1,
                    'StateId', w1,
                    'CityId', w1,
                    'Phone', w0,
                    'Address', w2,
                    'Description', w2
                ]);
            }
        }
    }
}
