
namespace SmartERP.Products.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Products"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission(Inventory.PermissionKeys.Categories.View)]
    [InsertPermission(Inventory.PermissionKeys.Categories.Create)]
    [UpdatePermission(Inventory.PermissionKeys.Categories.Update)]
    [DeletePermission(Inventory.PermissionKeys.Categories.Delete)]

    [LookupScript("Products.Categories", Permission = Inventory.PermissionKeys.Categories.View)]
    public sealed class CategoriesRow : SmartERP.LoggingRow<CategoriesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(4000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Parent Category"),PrimaryKey, ForeignKey("[dbo].[Categories]", "Id"), LeftJoin("jParentCategory"), TextualField("ParentCategoryName")]
        [LookupInclude, CategoriesEditor]
        public Int64? ParentCategoryId
        {
            get { return Fields.ParentCategoryId[this]; }
            set { Fields.ParentCategoryId[this] = value; }
        }

        [DisplayName("Parent Category Name"), Expression("jParentCategory.[Name]")]
        public String ParentCategoryName
        {
            get { return Fields.ParentCategoryName[this]; }
            set { Fields.ParentCategoryName[this] = value; }
        }

        [DisplayName("Parent Category Description"), Expression("jParentCategory.[Description]")]
        public String ParentCategoryDescription
        {
            get { return Fields.ParentCategoryDescription[this]; }
            set { Fields.ParentCategoryDescription[this] = value; }
        }

        [DisplayName("Parent Category Parent Category Id"), Expression("jParentCategory.[ParentCategoryId]")]
        public Int64? ParentCategoryParentCategoryId
        {
            get { return Fields.ParentCategoryParentCategoryId[this]; }
            set { Fields.ParentCategoryParentCategoryId[this] = value; }
        }

        public CategoriesRow()
        {
        }

        public CategoriesRow(RowFields fields)
            : base(fields)
        {
        }

      

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public StringField Description;
            public Int64Field ParentCategoryId;

            public StringField ParentCategoryName;
            public StringField ParentCategoryDescription;
            public Int64Field ParentCategoryParentCategoryId;
        }
    }
}
