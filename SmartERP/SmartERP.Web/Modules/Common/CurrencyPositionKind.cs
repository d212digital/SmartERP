namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.CurrencyPositionKind")]
    public enum CurrencyPositionKind
    {
        [Description("Left")]
        Left = 1,
        [Description("Right")]
        Right = 2       
    }
}
