
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[MeetingTypes]")]
    [DisplayName("Meeting Types"), InstanceName("Meeting Types")]
 
    [ReadPermission(PermissionKeys.MeetingTypes.View)]
    [InsertPermission(PermissionKeys.MeetingTypes.Create)]
    [UpdatePermission(PermissionKeys.MeetingTypes.Update)]
    [DeletePermission(PermissionKeys.MeetingTypes.Delete)]


    [LookupScript("Masters.MeetingTypes", Permission = PermissionKeys.MeetingTypes.View)]
    public sealed class MeetingTypesRow : SmartERP.LoggingRow<MeetingTypesRow.RowFields>, IIdRow, INameRow
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

        public MeetingTypesRow()
        {
        }

        public MeetingTypesRow(RowFields fields)
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
