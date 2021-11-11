namespace SmartERP.Accounts {
    export interface AccountsForm {
        HeadName: Serenity.StringEditor;
        HeadCode: Serenity.IntegerEditor;
        ParentHead: AccountsEditor;
        PHeadName: Serenity.StringEditor;
        HeadLevel: Serenity.IntegerEditor;
        HeadType: Serenity.StringEditor;
        IsTransaction: Serenity.BooleanEditor;
        IsGl: Serenity.BooleanEditor;
    }

    export class AccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Accounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountsForm.init)  {
                AccountsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = AccountsEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(AccountsForm, [
                    'HeadName', w0,
                    'HeadCode', w1,
                    'ParentHead', w2,
                    'PHeadName', w0,
                    'HeadLevel', w1,
                    'HeadType', w0,
                    'IsTransaction', w3,
                    'IsGl', w3
                ]);
            }
        }
    }
}
