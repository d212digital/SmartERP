namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.StatusKind")]
    public enum StatusKind
    {
        [Description("Pending")]
        Pending = 1,
        [Description("Complete")]
        Complete = 2       
    }
}
