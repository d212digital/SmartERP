
namespace SmartERP.HumanResource.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HumanResource"), TableName("[dbo].[Designations]")]
    [DisplayName("Designations"), InstanceName("Designations")]
    [ReadPermission(PermissionKeys.Designations.View)]
    [InsertPermission(PermissionKeys.Designations.Create)]
    [UpdatePermission(PermissionKeys.Designations.Update)]
    [DeletePermission(PermissionKeys.Designations.Delete)]
    [LookupScript("HumanResource.Designations", Permission = PermissionKeys.Designations.View)]
    public sealed class DesignationsRow : SmartERP.LoggingRow<DesignationsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Designation"), Size(250), NotNull, QuickSearch,NameProperty]
        public String Designation
        {
            get { return Fields.Designation[this]; }
            set { Fields.Designation[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Parent Designation"), ForeignKey("[dbo].[Designations]", "Id"), LeftJoin("jParentDesignation"), TextualField("ParentDesignationDesignation")]
        [LookupInclude, DesignationsEditor]
        public Int64? ParentDesignationId
        {
            get { return Fields.ParentDesignationId[this]; }
            set { Fields.ParentDesignationId[this] = value; }
        }

        [DisplayName("Parent Designation"), Expression("jParentDesignation.[Designation]")]
        public String ParentDesignationDesignation
        {
            get { return Fields.ParentDesignationDesignation[this]; }
            set { Fields.ParentDesignationDesignation[this] = value; }
        }

        [DisplayName("Parent Designation Description"), Expression("jParentDesignation.[Description]")]
        public String ParentDesignationDescription
        {
            get { return Fields.ParentDesignationDescription[this]; }
            set { Fields.ParentDesignationDescription[this] = value; }
        }

        [DisplayName("Parent Designation Parent Designation Id"), Expression("jParentDesignation.[ParentDesignationId]")]
        public Int64? ParentDesignationParentDesignationId
        {
            get { return Fields.ParentDesignationParentDesignationId[this]; }
            set { Fields.ParentDesignationParentDesignationId[this] = value; }
        }

        public DesignationsRow()
        {
        }

        public DesignationsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Designation;
            public StringField Description;
            public Int64Field ParentDesignationId;

            public StringField ParentDesignationDesignation;
            public StringField ParentDesignationDescription;
            public Int64Field ParentDesignationParentDesignationId;
        }
    }
}
