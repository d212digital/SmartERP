namespace SmartERP.Masters {
    export interface ResolutionStatusesForm {
        Name: Serenity.StringEditor;
    }

    export class ResolutionStatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.ResolutionStatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResolutionStatusesForm.init)  {
                ResolutionStatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ResolutionStatusesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
