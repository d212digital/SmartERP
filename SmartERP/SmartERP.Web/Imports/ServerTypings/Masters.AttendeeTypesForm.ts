namespace SmartERP.Masters {
    export interface AttendeeTypesForm {
        Name: Serenity.StringEditor;
    }

    export class AttendeeTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.AttendeeTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendeeTypesForm.init)  {
                AttendeeTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AttendeeTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
