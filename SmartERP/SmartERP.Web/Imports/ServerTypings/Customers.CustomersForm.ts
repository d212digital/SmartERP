namespace SmartERP.Customers {
    export interface CustomersForm {
        Name: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        CustomerGroupId: Serenity.LookupEditor;
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
        SalesMan: Serenity.LookupEditor;
        OrderBooker: Serenity.LookupEditor;
        Vat: Serenity.StringEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Customers.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(CustomersForm, [
                    'Name', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'CountryId', w1,
                    'StateId', w1,
                    'CityId', w1,
                    'CustomerGroupId', w1,
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
                    'SalesMan', w1,
                    'OrderBooker', w1,
                    'Vat', w0
                ]);
            }
        }
    }
}
