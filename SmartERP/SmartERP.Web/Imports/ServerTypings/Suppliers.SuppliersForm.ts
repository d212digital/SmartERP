namespace SmartERP.Suppliers {
    export interface SuppliersForm {
        CompanyName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        SupplierGroupId: Serenity.LookupEditor;
        Address: Serenity.TextAreaEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmailAddress: Serenity.StringEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
        CNIC: Serenity.StringEditor;
        NTN: Serenity.StringEditor;
        STRN: Serenity.StringEditor;
        OrderBooker: Serenity.LookupEditor;
        Vat: Serenity.StringEditor;
    }

    export class SuppliersForm extends Serenity.PrefixedContext {
        static formKey = 'Suppliers.Suppliers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersForm.init)  {
                SuppliersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(SuppliersForm, [
                    'CompanyName', w0,
                    'CountryId', w1,
                    'StateId', w1,
                    'CityId', w1,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'SupplierGroupId', w1,
                    'Address', w2,
                    'RegionId', w1,
                    'PostalCode', w0,
                    'Phone', w0,
                    'Website', w0,
                    'Fax', w0,
                    'Email', w0,
                    'EmailAddress', w0,
                    'PreviousCreditBalance', w3,
                    'CNIC', w0,
                    'NTN', w0,
                    'STRN', w0,
                    'OrderBooker', w1,
                    'Vat', w0
                ]);
            }
        }
    }
}
