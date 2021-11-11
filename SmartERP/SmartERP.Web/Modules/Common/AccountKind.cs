namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.AccountKind")]
    public enum AccountKind
    {
        [Description("Debit (+)")]
        Debit = 1,
        [Description("Credit (-)")]
        Credit = 2       
    }
}
