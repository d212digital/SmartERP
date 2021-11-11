
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[ResolutionStatuses]")]
    [DisplayName("Resolution Statuses"), InstanceName("Resolution Statuses")]
    [ReadPermission(PermissionKeys.ResolutionStatuses.View)]
    [InsertPermission(PermissionKeys.ResolutionStatuses.Create)]
    [UpdatePermission(PermissionKeys.ResolutionStatuses.Update)]
    [DeletePermission(PermissionKeys.ResolutionStatuses.Delete)]


    [LookupScript("Masters.ResolutionStatuses", Permission = PermissionKeys.ResolutionStatuses.View)]
    public sealed class ResolutionStatusesRow : SmartERP.LoggingRow<ResolutionStatusesRow.RowFields>, IIdRow, INameRow
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

        public ResolutionStatusesRow()
        {
        }

        public ResolutionStatusesRow(RowFields fields)
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
