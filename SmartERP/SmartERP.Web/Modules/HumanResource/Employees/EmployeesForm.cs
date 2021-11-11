
namespace SmartERP.HumanResource.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HumanResource.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesForm
    {
        [HalfWidth(UntilNext =true)]
        public String FirstName { get; set; }      
        public String LastName { get; set; }
        public Int64 DesignationId { get; set; }
        public Int64 DepartmentId { get; set; }
        public Int32 RateType { get; set; }
        public String Phone { get; set; }
        public Double HoureRateSalary { get; set; }
        public String Email { get; set; }
        public Int32 BloodGroup { get; set; }
        public String Picture { get; set; }
        public Int64 CountryId { get; set; }
        public Int64 StateId { get; set; }
        public Int64 CityId { get; set; }
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public Int32 UserId { get; set; }
        public Int64 RegionId { get; set; }
        public Int64 TerritoryId { get; set; }
    }
}