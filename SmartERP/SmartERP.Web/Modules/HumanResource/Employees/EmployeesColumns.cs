
namespace SmartERP.HumanResource.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HumanResource.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String FirstName { get; set; }
        public String LastName { get; set; }
        [QuickFilter]
        public String Designation { get; set; }
        [QuickFilter]
        public String Department { get; set; }
        [QuickFilter]
        public Int32 RateType { get; set; }
        public String Phone { get; set; }
        public Double HoureRateSalary { get; set; }
        public String Email { get; set; }
        [QuickFilter]
        public Int32 BloodGroup { get; set; }
        //public String Picture { get; set; }
        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public Int32 UserId { get; set; }
        [QuickFilter]
        public String RegionName { get; set; }
        [QuickFilter]
        public String TerritoryTerritoryDescription { get; set; }
    }
}