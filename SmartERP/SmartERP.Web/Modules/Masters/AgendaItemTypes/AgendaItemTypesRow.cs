
namespace SmartERP.Masters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[AgendaItemTypes]")]
    [DisplayName("Agenda Item Types"), InstanceName("Agenda Item Types")]
 
    [ReadPermission(PermissionKeys.AgendaItemTypes.View)]
    [InsertPermission(PermissionKeys.AgendaItemTypes.Create)]
    [UpdatePermission(PermissionKeys.AgendaItemTypes.Update)]
    [DeletePermission(PermissionKeys.AgendaItemTypes.Delete)]


    [LookupScript("Masters.AgendaItemTypes", Permission = PermissionKeys.AgendaItemTypes.View)]
    public sealed class AgendaItemTypesRow : SmartERP.LoggingRow<AgendaItemTypesRow.RowFields>, IIdRow, INameRow
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

        public AgendaItemTypesRow()
        {
        }

        public AgendaItemTypesRow(RowFields fields)
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
