
namespace SmartERP.HumanResource.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HumanResource.Departments")]
    [BasedOnRow(typeof(Entities.DepartmentsRow), CheckNames = true)]
    public class DepartmentsForm
    {
        public String Department { get; set; }
        public String Description { get; set; }
        public Int64 ParentDepartmentId { get; set; }
    }
}