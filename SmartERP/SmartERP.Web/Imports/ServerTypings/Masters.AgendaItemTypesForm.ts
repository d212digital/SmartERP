namespace SmartERP.Masters {
    export interface AgendaItemTypesForm {
        Name: Serenity.StringEditor;
    }

    export class AgendaItemTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.AgendaItemTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AgendaItemTypesForm.init)  {
                AgendaItemTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AgendaItemTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
