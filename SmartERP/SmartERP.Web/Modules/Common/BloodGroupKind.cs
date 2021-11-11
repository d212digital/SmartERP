namespace SmartERP
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("SmartERP.BloodGroupKind")]
    public enum BloodGroupKind
    {
        [Description("A-positive (A+)")]
        APositive = 1,
        [Description("A-negative (A-)")]
        ANegative = 2,
        [Description("B-positive (B+)")]
        BPositive = 3,
        [Description("B-negative (B-)")]
        BNegative = 4,
        [Description("AB-positive (AB+)")]
        ABPsitive = 5,
        [Description("AB-negative (AB-)")]
        ABNegative = 6,
        [Description("O-positive (O+)")]
        OPositive = 7,
        [Description("O-negative (O-)")]
        ONegative = 8
    }
}
