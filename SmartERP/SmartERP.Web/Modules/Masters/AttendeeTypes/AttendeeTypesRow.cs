
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[AttendeeTypes]")]
    [DisplayName("Attendee Types"), InstanceName("Attendee Types")]
    [ReadPermission(PermissionKeys.AttendeeTypes.View)]
    [InsertPermission(PermissionKeys.AttendeeTypes.Create)]
    [UpdatePermission(PermissionKeys.AttendeeTypes.Update)]
    [DeletePermission(PermissionKeys.AttendeeTypes.Delete)]


    [LookupScript("Masters.AttendeeTypes", Permission = PermissionKeys.AttendeeTypes.View)]
    public sealed class AttendeeTypesRow : SmartERP.LoggingRow<AttendeeTypesRow.RowFields>, IIdRow, INameRow
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

        public AttendeeTypesRow()
        {
        }

        public AttendeeTypesRow(RowFields fields)
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
