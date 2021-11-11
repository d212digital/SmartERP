namespace SmartERP.Meeting {
    export interface AgendaItemsForm {
        Meeting: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ItemType: Serenity.LookupEditor;
        RequestedBy: Serenity.LookupEditor;
        SequenceNo: Serenity.IntegerEditor;
        Images: Serenity.ImageUploadEditor;
        Attachments: Serenity.ImageUploadEditor;
    }

    export class AgendaItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.AgendaItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AgendaItemsForm.init)  {
                AgendaItemsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.ImageUploadEditor;

                Q.initFormType(AgendaItemsForm, [
                    'Meeting', w0,
                    'Title', w0,
                    'Description', w1,
                    'ItemType', w2,
                    'RequestedBy', w2,
                    'SequenceNo', w3,
                    'Images', w4,
                    'Attachments', w4
                ]);
            }
        }
    }
}
