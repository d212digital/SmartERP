namespace SmartERP.Meeting {
    export interface AgendaDecisionsForm {
        Meeting: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        DueDate: Serenity.DateEditor;
        AssignedTo: Serenity.LookupEditor;
        DecisionNumber: Serenity.IntegerEditor;
        RelatedAgendaItem: Serenity.LookupEditor;
        ResolutionStatus: Serenity.LookupEditor;
        Images: Serenity.ImageUploadEditor;
        Attachments: Serenity.ImageUploadEditor;
    }

    export class AgendaDecisionsForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.AgendaDecisions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AgendaDecisionsForm.init)  {
                AgendaDecisionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.ImageUploadEditor;

                Q.initFormType(AgendaDecisionsForm, [
                    'Meeting', w0,
                    'Description', w1,
                    'DueDate', w2,
                    'AssignedTo', w3,
                    'DecisionNumber', w4,
                    'RelatedAgendaItem', w3,
                    'ResolutionStatus', w3,
                    'Images', w5,
                    'Attachments', w5
                ]);
            }
        }
    }
}
