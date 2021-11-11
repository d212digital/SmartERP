namespace SmartERP.Banks {
    export interface BanksForm {
        BankName: Serenity.StringEditor;
        AcName: Serenity.StringEditor;
        AcNumber: Serenity.StringEditor;
        Branch: Serenity.StringEditor;
        SignaturePicture: Serenity.ImageUploadEditor;
    }

    export class BanksForm extends Serenity.PrefixedContext {
        static formKey = 'Banks.Banks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BanksForm.init)  {
                BanksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;

                Q.initFormType(BanksForm, [
                    'BankName', w0,
                    'AcName', w0,
                    'AcNumber', w0,
                    'Branch', w0,
                    'SignaturePicture', w1
                ]);
            }
        }
    }
}
