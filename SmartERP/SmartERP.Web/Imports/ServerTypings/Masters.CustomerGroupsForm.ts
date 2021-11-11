namespace SmartERP.Masters {
    export interface CustomerGroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CustomerGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.CustomerGroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerGroupsForm.init)  {
                CustomerGroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomerGroupsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
