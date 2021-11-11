namespace SmartERP.HumanResource {
    export interface AttendanceForm {
        EmployeeId: Serenity.LookupEditor;
        CheckIn: Serenity.DateTimeEditor;
        CheckOut: Serenity.DateTimeEditor;
    }

    export class AttendanceForm extends Serenity.PrefixedContext {
        static formKey = 'HumanResource.Attendance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendanceForm.init)  {
                AttendanceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateTimeEditor;

                Q.initFormType(AttendanceForm, [
                    'EmployeeId', w0,
                    'CheckIn', w1,
                    'CheckOut', w1
                ]);
            }
        }
    }
}
