namespace SmartERP {
    export enum StatusKind {
        Pending = 1,
        Complete = 2
    }
    Serenity.Decorators.registerEnumType(StatusKind, 'SmartERP.StatusKind');
}
