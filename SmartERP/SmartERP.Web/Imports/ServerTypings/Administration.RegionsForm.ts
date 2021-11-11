namespace SmartERP.Administration {
    export interface RegionsForm {
        Name: Serenity.StringEditor;
    }

    export class RegionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Regions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionsForm.init)  {
                RegionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegionsForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
