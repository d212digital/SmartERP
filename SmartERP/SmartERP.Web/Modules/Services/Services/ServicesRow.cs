
namespace SmartERP.Services.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Services"), TableName("[dbo].[Services]")]
    [DisplayName("Services"), InstanceName("Services")]
    [ReadPermission(Masters.PermissionKeys.Services.View)]
    [InsertPermission(Masters.PermissionKeys.Services.Create)]
    [UpdatePermission(Masters.PermissionKeys.Services.Update)]
    [DeletePermission(Masters.PermissionKeys.Services.Delete)]
    [LookupScript("Services.Services", Permission = Masters.PermissionKeys.Services.View)]
    public sealed class ServicesRow : SmartERP.LoggingRow<ServicesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Service Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String ServiceName
        {
            get { return Fields.ServiceName[this]; }
            set { Fields.ServiceName[this] = value; }
        }

        [DisplayName("Charge"), NotNull,LookupInclude]
        public Double? Charge
        {
            get { return Fields.Charge[this]; }
            set { Fields.Charge[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Tax"), NotNull]
        public Double? Tax
        {
            get { return Fields.Tax[this]; }
            set { Fields.Tax[this] = value; }
        }

        public ServicesRow()
        {
        }

        public ServicesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField ServiceName;
            public DoubleField Charge;
            public StringField Description;
            public DoubleField Tax;
        }
    }
}
