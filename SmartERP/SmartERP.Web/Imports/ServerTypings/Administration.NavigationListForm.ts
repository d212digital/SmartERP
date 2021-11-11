namespace SmartERP.Administration {
    export interface NavigationListForm {
        Title: Serenity.StringEditor;
        Url: Serenity.StringEditor;
        Permission: Serenity.StringEditor;
        Icon: Serenity.StringEditor;
        ParentId: Serenity.StringEditor;
        Sort: Serenity.IntegerEditor;
    }

    export class NavigationListForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.NavigationList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NavigationListForm.init)  {
                NavigationListForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(NavigationListForm, [
                    'Title', w0,
                    'Url', w0,
                    'Permission', w0,
                    'Icon', w0,
                    'ParentId', w0,
                    'Sort', w1
                ]);
            }
        }
    }
}
