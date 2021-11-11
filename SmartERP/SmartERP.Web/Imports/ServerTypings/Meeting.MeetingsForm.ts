namespace SmartERP.Meeting {
    export interface MeetingsForm {
        MeetingName: Serenity.StringEditor;
        MeetingType: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Department: Serenity.LookupEditor;
        Location: Serenity.LookupEditor;
        OrganizedBy: Serenity.LookupEditor;
        Reporter: Serenity.LookupEditor;
        Attendees: MeetingAttendeesEditor;
        AgendaItems: AgendaItemsEditor;
        AgendaDecisions: AgendaDecisionsEditor;
    }

    export class MeetingsForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingsForm.init)  {
                MeetingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateTimeEditor;
                var w3 = MeetingAttendeesEditor;
                var w4 = AgendaItemsEditor;
                var w5 = AgendaDecisionsEditor;

                Q.initFormType(MeetingsForm, [
                    'MeetingName', w0,
                    'MeetingType', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'Department', w1,
                    'Location', w1,
                    'OrganizedBy', w1,
                    'Reporter', w1,
                    'Attendees', w3,
                    'AgendaItems', w4,
                    'AgendaDecisions', w5
                ]);
            }
        }
    }
}
