
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Countries]")]
    [DisplayName("Countries"), InstanceName("Countries")]
    [ReadPermission(Masters.PermissionKeys.Countries.View)]
    [InsertPermission(Masters.PermissionKeys.Countries.Create)]
    [UpdatePermission(Masters.PermissionKeys.Countries.Update)]
    [DeletePermission(Masters.PermissionKeys.Countries.Delete)]

    [LookupScript("Administration.Countries", Permission = Masters.PermissionKeys.Countries.View)]
    public sealed class CountriesRow : SmartERP.LoggingRow<CountriesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        public CountriesRow()
        {
        }

        public CountriesRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
        }
    }
}
