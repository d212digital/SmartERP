
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[AttendanceStatuses]")]
    [DisplayName("Attendance Statuses"), InstanceName("Attendance Statuses")]
    [ReadPermission(PermissionKeys.AttendanceStatuses.View)]
    [InsertPermission(PermissionKeys.AttendanceStatuses.Create)]
    [UpdatePermission(PermissionKeys.AttendanceStatuses.Update)]
    [DeletePermission(PermissionKeys.AttendanceStatuses.Delete)]


    [LookupScript("Masters.AttendanceStatuses", Permission = PermissionKeys.AttendanceStatuses.View)]
    public sealed class AttendanceStatusesRow : SmartERP.LoggingRow<AttendanceStatusesRow.RowFields>, IIdRow, INameRow
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

        public AttendanceStatusesRow()
        {
        }

        public AttendanceStatusesRow(RowFields fields)
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
