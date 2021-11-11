namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.VatKind")]
    public enum VatKind
    {
        [Description("Inclusive Vat")]
        Inclusive = 1,
        [Description("Exclusive Vat")]
        Exclusive = 2
    }
}
