namespace SmartERP {
    export enum RateKind {
        Hourly = 1,
        Salary = 2
    }
    Serenity.Decorators.registerEnumType(RateKind, 'SmartERP.RateKind');
}
