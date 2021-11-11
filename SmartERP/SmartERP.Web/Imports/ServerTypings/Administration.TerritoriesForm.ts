namespace SmartERP.Administration {
    export interface TerritoriesForm {
        TerritoryDescription: Serenity.StringEditor;
        RegionId: Serenity.LookupEditor;
    }

    export class TerritoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Territories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TerritoriesForm.init)  {
                TerritoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TerritoriesForm, [
                    'TerritoryDescription', w0,
                    'RegionId', w1
                ]);
            }
        }
    }
}
