namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.StockKind")]
    public enum StockKind
    {
        [Description("IN")]
        IN = 1,
        [Description("OUT")]
        OUT = 2
    }
}
