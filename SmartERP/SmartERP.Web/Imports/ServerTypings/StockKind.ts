namespace SmartERP {
    export enum StockKind {
        IN = 1,
        OUT = 2
    }
    Serenity.Decorators.registerEnumType(StockKind, 'SmartERP.StockKind');
}
