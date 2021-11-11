namespace SmartERP.Masters {
    export interface AttendanceStatusesForm {
        Name: Serenity.StringEditor;
    }

    export class AttendanceStatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.AttendanceStatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendanceStatusesForm.init)  {
                AttendanceStatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AttendanceStatusesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
