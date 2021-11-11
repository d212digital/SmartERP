
namespace SmartERP.HumanResource.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HumanResource.Attendance")]
    [BasedOnRow(typeof(Entities.AttendanceRow), CheckNames = true)]
    public class AttendanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(250)]
        public String EmployeeFullName { get; set; }
        [DateFormatter(DisplayFormat = "yyyy-MM-dd HH:mm:ss")]
        [Width(150)]
        public DateTime CheckIn { get; set; }
        [DateFormatter(DisplayFormat = "yyyy-MM-dd HH:mm:ss")]
        [Width(150)]
        public DateTime CheckOut { get; set; }
        [Width(150)]
        public string StayTime { get; set; }
    }
}