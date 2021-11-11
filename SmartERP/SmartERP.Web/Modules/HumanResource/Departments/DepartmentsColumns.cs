
namespace SmartERP.HumanResource.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HumanResource.Departments")]
    [BasedOnRow(typeof(Entities.DepartmentsRow), CheckNames = true)]
    public class DepartmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Department { get; set; }
        public String Description { get; set; }
        public String ParentDepartmentDepartment { get; set; }
    }
}