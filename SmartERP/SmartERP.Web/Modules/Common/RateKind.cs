namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.RateKind")]
    public enum RateKind
    {
        [Description("Hourly")]
        Hourly = 1,
        [Description("Salary")]
        Salary = 2       
    }
}
