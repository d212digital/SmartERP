
namespace SmartERP.HumanResource.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HumanResource.Attendance")]
    [BasedOnRow(typeof(Entities.AttendanceRow), CheckNames = true)]
    public class AttendanceForm
    {
        public Int64 EmployeeId { get; set; }
        [DateTimeEditor,DefaultValue("now")]
        public DateTime CheckIn { get; set; }
        [DateTimeEditor, DefaultValue("now")]
        public DateTime CheckOut { get; set; }
        //[DateTimeEditor]
        //public DateTime Date { get; set; }
        //[EditTimeEditor]
        //public TimeSpan StayTime { get; set; }
    }
}