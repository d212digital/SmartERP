using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Navigations]")]
    [DisplayName("Navigation List"), InstanceName("Navigation List")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NavigationListRow : Row<NavigationListRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Title"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Url"), Size(250), NotNull]
        public String Url
        {
            get => fields.Url[this];
            set => fields.Url[this] = value;
        }

        [DisplayName("Permission"), Size(250)]
        public String Permission
        {
            get => fields.Permission[this];
            set => fields.Permission[this] = value;
        }

        [DisplayName("Icon"), Size(250)]
        public String Icon
        {
            get => fields.Icon[this];
            set => fields.Icon[this] = value;
        }

        [DisplayName("Parent Id")]
        public Int64? ParentId
        {
            get => fields.ParentId[this];
            set => fields.ParentId[this] = value;
        }

        [DisplayName("Sort"), NotNull]
        public Int32? Sort
        {
            get => fields.Sort[this];
            set => fields.Sort[this] = value;
        }

        public NavigationListRow()
            : base()
        {
        }

        public NavigationListRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Title;
            public StringField Url;
            public StringField Permission;
            public StringField Icon;
            public Int64Field ParentId;
            public Int32Field Sort;
        }
    }
}
