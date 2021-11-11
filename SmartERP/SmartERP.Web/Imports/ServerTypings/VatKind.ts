namespace SmartERP {
    export enum VatKind {
        Inclusive = 1,
        Exclusive = 2
    }
    Serenity.Decorators.registerEnumType(VatKind, 'SmartERP.VatKind');
}
