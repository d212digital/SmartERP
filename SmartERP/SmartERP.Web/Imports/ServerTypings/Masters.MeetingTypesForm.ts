namespace SmartERP.Masters {
    export interface MeetingTypesForm {
        Name: Serenity.StringEditor;
    }

    export class MeetingTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.MeetingTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingTypesForm.init)  {
                MeetingTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeetingTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
