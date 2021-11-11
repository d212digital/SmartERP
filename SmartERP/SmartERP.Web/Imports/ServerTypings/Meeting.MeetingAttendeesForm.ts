namespace SmartERP.Meeting {
    export interface MeetingAttendeesForm {
        Attendee: Serenity.LookupEditor;
        AttendeeType: Serenity.LookupEditor;
        AttendanceStatus: Serenity.LookupEditor;
    }

    export class MeetingAttendeesForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingAttendees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingAttendeesForm.init)  {
                MeetingAttendeesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(MeetingAttendeesForm, [
                    'Attendee', w0,
                    'AttendeeType', w0,
                    'AttendanceStatus', w0
                ]);
            }
        }
    }
}
