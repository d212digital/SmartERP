namespace SmartERP {
    export enum AccountKind {
        Debit = 1,
        Credit = 2
    }
    Serenity.Decorators.registerEnumType(AccountKind, 'SmartERP.AccountKind');
}
