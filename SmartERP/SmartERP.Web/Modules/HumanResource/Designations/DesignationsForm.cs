
namespace SmartERP.HumanResource.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HumanResource.Designations")]
    [BasedOnRow(typeof(Entities.DesignationsRow), CheckNames = true)]
    public class DesignationsForm
    {
        public String Designation { get; set; }
        public String Description { get; set; }
        public Int64 ParentDesignationId { get; set; }
    }
}