namespace SmartERP.HumanResource {
    export interface DepartmentsForm {
        Department: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDepartmentId: DepartmentsEditor;
    }

    export class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey = 'HumanResource.Departments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartmentsForm.init)  {
                DepartmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = DepartmentsEditor;

                Q.initFormType(DepartmentsForm, [
                    'Department', w0,
                    'Description', w0,
                    'ParentDepartmentId', w1
                ]);
            }
        }
    }
}
