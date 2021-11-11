
namespace SmartERP.Banks.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Banks"), TableName("[dbo].[Banks]")]
    [DisplayName("Banks"), InstanceName("Banks")]
    [ReadPermission(Masters.PermissionKeys.Banks.View)]
    [InsertPermission(Masters.PermissionKeys.Banks.Create)]
    [UpdatePermission(Masters.PermissionKeys.Banks.Update)]
    [DeletePermission(Masters.PermissionKeys.Banks.Delete)]

    [LookupScript("Banks.Banks", Permission = Masters.PermissionKeys.Banks.View)]
    public sealed class BanksRow : SmartERP.LoggingRow<BanksRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bank Name"), Size(250), NotNull, QuickSearch,NameProperty]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Ac Name"), Column("ACName"), Size(250), NotNull]
        public String AcName
        {
            get { return Fields.AcName[this]; }
            set { Fields.AcName[this] = value; }
        }

        [DisplayName("Ac Number"), Column("ACNumber"), Size(250), NotNull]
        public String AcNumber
        {
            get { return Fields.AcNumber[this]; }
            set { Fields.AcNumber[this] = value; }
        }

        [DisplayName("Branch"), Size(250), NotNull]
        public String Branch
        {
            get { return Fields.Branch[this]; }
            set { Fields.Branch[this] = value; }
        }

        [DisplayName("Signature Picture"), Size(250)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String SignaturePicture
        {
            get { return Fields.SignaturePicture[this]; }
            set { Fields.SignaturePicture[this] = value; }
        }

        public BanksRow()
        {
        }

        public BanksRow(RowFields fields)
            : base(fields)
        {
        }

      

        public class RowFields : LoggingRowFields
        {
            public Int64Field Id;
            public StringField BankName;
            public StringField AcName;
            public StringField AcNumber;
            public StringField Branch;
            public StringField SignaturePicture;
        }
    }
}
