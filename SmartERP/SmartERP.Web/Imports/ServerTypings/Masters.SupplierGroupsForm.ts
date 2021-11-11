namespace SmartERP.Masters {
    export interface SupplierGroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class SupplierGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.SupplierGroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierGroupsForm.init)  {
                SupplierGroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SupplierGroupsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
