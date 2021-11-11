
namespace SmartERP.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Shippers]")]
    [DisplayName("Shippers"), InstanceName("Shippers")]
    [ReadPermission(Masters.PermissionKeys.Shippers.View)]
    [InsertPermission(Masters.PermissionKeys.Shippers.Create)]
    [UpdatePermission(Masters.PermissionKeys.Shippers.Update)]
    [DeletePermission(Masters.PermissionKeys.Shippers.Delete)]

    [LookupScript("Administration.Shippers", Permission = Masters.PermissionKeys.Shippers.View)]
    public sealed class ShippersRow : SmartERP.LoggingRow<ShippersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Phone"), Size(250)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        public ShippersRow()
        {
        }

        public ShippersRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField CompanyName;
            public StringField Phone;
        }
    }
}
