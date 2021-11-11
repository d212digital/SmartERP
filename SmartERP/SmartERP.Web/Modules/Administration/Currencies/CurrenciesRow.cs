
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Currencies]")]
    [DisplayName("Currencies"), InstanceName("Currencies")]
    [ReadPermission(PermissionKeys.Currencies.View)]
    [InsertPermission(PermissionKeys.Currencies.Create)]
    [UpdatePermission(PermissionKeys.Currencies.Update)]
    [DeletePermission(PermissionKeys.Currencies.Delete)]


    [LookupScript("Administration.Currencies", Permission = PermissionKeys.Currencies.View)]
    public sealed class CurrenciesRow : SmartERP.LoggingRow<CurrenciesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Currency Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }

        [DisplayName("Currency Symbol"), Size(50), NotNull]
        public String CurrencySymbol
        {
            get { return Fields.CurrencySymbol[this]; }
            set { Fields.CurrencySymbol[this] = value; }
        }

        public CurrenciesRow()
        {
        }

        public CurrenciesRow(RowFields fields)
            : base(fields)
        {
        }
        

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField CurrencyName;
            public StringField CurrencySymbol;
        }
    }
}
