
namespace SmartERP.Expenses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Expenses"), TableName("[dbo].[ExpenseTypes]")]
    [DisplayName("Expense Types"), InstanceName("Expense Types")]
    [ReadPermission(Masters.PermissionKeys.ExpenseTypes.View)]
    [InsertPermission(Masters.PermissionKeys.ExpenseTypes.Create)]
    [UpdatePermission(Masters.PermissionKeys.ExpenseTypes.Update)]
    [DeletePermission(Masters.PermissionKeys.ExpenseTypes.Delete)]   
    [LookupScript("Expenses.ExpenseTypes", Permission = Masters.PermissionKeys.ExpenseTypes.View)]
    public sealed class ExpenseTypesRow : SmartERP.LoggingRow<ExpenseTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type"), Size(250), NotNull, QuickSearch,NameProperty]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        public ExpenseTypesRow()
        {
        }

        public ExpenseTypesRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Type;
        }
    }
}
