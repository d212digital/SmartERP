namespace SmartERP.Inventory {
    export interface GoodsIssueForm {
        SaleId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        LineItems: GoodsIssueDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }

    export class GoodsIssueForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.GoodsIssue';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsIssueForm.init)  {
                GoodsIssueForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = GoodsIssueDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(GoodsIssueForm, [
                    'SaleId', w0,
                    'CustomerId', w0,
                    'Date', w1,
                    'EmployeenId', w0,
                    'Reference', w2,
                    'LineItems', w3,
                    'TotalQuantity', w4,
                    'Remarks', w5,
                    'JournalRemarks', w5
                ]);
            }
        }
    }
}
