
namespace SmartERP.HumanResource.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HumanResource"), TableName("[dbo].[Departments]")]
    [DisplayName("Departments"), InstanceName("Departments")]
    [ReadPermission(PermissionKeys.Departments.View)]
    [InsertPermission(PermissionKeys.Departments.Create)]
    [UpdatePermission(PermissionKeys.Departments.Update)]
    [DeletePermission(PermissionKeys.Departments.Delete)]
    [LookupScript("HumanResource.Departments", Permission = PermissionKeys.Departments.View)]
    public sealed class DepartmentsRow : SmartERP.LoggingRow<DepartmentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department"), Size(250), NotNull, QuickSearch,NameProperty]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Parent Department"),PrimaryKey, ForeignKey("[dbo].[Departments]", "Id"), LeftJoin("jParentDepartment"), TextualField("ParentDepartmentDepartment")]
        [LookupInclude, DepartmentsEditor]
        public Int64? ParentDepartmentId
        {
            get { return Fields.ParentDepartmentId[this]; }
            set { Fields.ParentDepartmentId[this] = value; }
        }

        [DisplayName("Parent Department"), Expression("jParentDepartment.[Department]")]
        public String ParentDepartmentDepartment
        {
            get { return Fields.ParentDepartmentDepartment[this]; }
            set { Fields.ParentDepartmentDepartment[this] = value; }
        }

        [DisplayName("Parent Department Description"), Expression("jParentDepartment.[Description]")]
        public String ParentDepartmentDescription
        {
            get { return Fields.ParentDepartmentDescription[this]; }
            set { Fields.ParentDepartmentDescription[this] = value; }
        }

        [DisplayName("Parent Department Parent Department Id"), Expression("jParentDepartment.[ParentDepartmentId]")]
        public Int64? ParentDepartmentParentDepartmentId
        {
            get { return Fields.ParentDepartmentParentDepartmentId[this]; }
            set { Fields.ParentDepartmentParentDepartmentId[this] = value; }
        }

        public DepartmentsRow()
        {
        }

        public DepartmentsRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Department;
            public StringField Description;
            public Int64Field ParentDepartmentId;

            public StringField ParentDepartmentDepartment;
            public StringField ParentDepartmentDescription;
            public Int64Field ParentDepartmentParentDepartmentId;
        }
    }
}
