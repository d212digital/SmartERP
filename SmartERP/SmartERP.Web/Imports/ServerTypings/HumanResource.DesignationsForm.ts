namespace SmartERP.HumanResource {
    export interface DesignationsForm {
        Designation: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDesignationId: DesignationsEditor;
    }

    export class DesignationsForm extends Serenity.PrefixedContext {
        static formKey = 'HumanResource.Designations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DesignationsForm.init)  {
                DesignationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = DesignationsEditor;

                Q.initFormType(DesignationsForm, [
                    'Designation', w0,
                    'Description', w0,
                    'ParentDesignationId', w1
                ]);
            }
        }
    }
}
