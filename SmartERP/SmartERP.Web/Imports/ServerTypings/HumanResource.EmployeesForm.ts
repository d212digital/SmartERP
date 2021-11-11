namespace SmartERP.HumanResource {
    export interface EmployeesForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        DesignationId: DesignationsEditor;
        DepartmentId: DepartmentsEditor;
        RateType: Serenity.EnumEditor;
        Phone: Serenity.StringEditor;
        HoureRateSalary: Serenity.DecimalEditor;
        Email: Serenity.StringEditor;
        BloodGroup: Serenity.EnumEditor;
        Picture: Serenity.ImageUploadEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        UserId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        TerritoryId: Serenity.LookupEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'HumanResource.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = DesignationsEditor;
                var w2 = DepartmentsEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.ImageUploadEditor;
                var w6 = s.LookupEditor;

                Q.initFormType(EmployeesForm, [
                    'FirstName', w0,
                    'LastName', w0,
                    'DesignationId', w1,
                    'DepartmentId', w2,
                    'RateType', w3,
                    'Phone', w0,
                    'HoureRateSalary', w4,
                    'Email', w0,
                    'BloodGroup', w3,
                    'Picture', w5,
                    'CountryId', w6,
                    'StateId', w6,
                    'CityId', w6,
                    'ZipCode', w0,
                    'Address', w0,
                    'UserId', w6,
                    'RegionId', w6,
                    'TerritoryId', w6
                ]);
            }
        }
    }
}
