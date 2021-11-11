
namespace SmartERP.HumanResource.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HumanResource"), TableName("[dbo].[Attendance]")]
    [DisplayName("Attendance"), InstanceName("Attendance")]    
    [ReadPermission(PermissionKeys.Attendance.View)]
    [InsertPermission(PermissionKeys.Attendance.Create)]
    [UpdatePermission(PermissionKeys.Attendance.Update)]
    [DeletePermission(PermissionKeys.Attendance.Delete)]
    [LookupScript("HumanResource.Attendance", Permission = PermissionKeys.Attendance.View)]
    public sealed class AttendanceRow : SmartERP.LoggingRow<AttendanceRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee"), NotNull,PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeFullName")]
        [LookupInclude, LookupEditor(typeof(HumanResource.Entities.EmployeesRow), AutoComplete = true, InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }
        [DisplayName("Employee"), Expression("(jEmployee.[FirstName] + ' ' + jEmployee.[LastName])")]
        public string EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }
        [DisplayName("Check In")]
        public DateTime? CheckIn
        {
            get { return Fields.CheckIn[this]; }
            set { Fields.CheckIn[this] = value; }
        }

        [DisplayName("Check Out")]
        public DateTime? CheckOut
        {
            get { return Fields.CheckOut[this]; }
            set { Fields.CheckOut[this] = value; }
        }

      

        [DisplayName("Stay Time"),Expression(" (CONVERT(nvarchar(50), DATEDIFF(hour, cast(t0.[CheckIn] as time), cast(t0.[CheckOut] as time)))+' hours & '+CONVERT(nvarchar(50),(DATEDIFF(minute, cast(t0.[CheckIn] as time), cast(t0.[CheckOut] as time))-(DATEDIFF(hour, cast(t0.[CheckIn] as time), cast(t0.[CheckOut] as time)) * 60)))+' minutes') ")]
        public string StayTime
        {
            get { return Fields.StayTime[this]; }
            set { Fields.StayTime[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Employee Designation Id"), Expression("jEmployee.[DesignationId]")]
        public Int64? EmployeeDesignationId
        {
            get { return Fields.EmployeeDesignationId[this]; }
            set { Fields.EmployeeDesignationId[this] = value; }
        }

        [DisplayName("Employee Department Id"), Expression("jEmployee.[DepartmentId]")]
        public Int64? EmployeeDepartmentId
        {
            get { return Fields.EmployeeDepartmentId[this]; }
            set { Fields.EmployeeDepartmentId[this] = value; }
        }

        [DisplayName("Employee Rate Type"), Expression("jEmployee.[RateType]")]
        public Int32? EmployeeRateType
        {
            get { return Fields.EmployeeRateType[this]; }
            set { Fields.EmployeeRateType[this] = value; }
        }

        [DisplayName("Employee Phone"), Expression("jEmployee.[Phone]")]
        public String EmployeePhone
        {
            get { return Fields.EmployeePhone[this]; }
            set { Fields.EmployeePhone[this] = value; }
        }

        [DisplayName("Employee Houre Rate Salary"), Expression("jEmployee.[HoureRateSalary]")]
        public Double? EmployeeHoureRateSalary
        {
            get { return Fields.EmployeeHoureRateSalary[this]; }
            set { Fields.EmployeeHoureRateSalary[this] = value; }
        }

        [DisplayName("Employee Email"), Expression("jEmployee.[Email]")]
        public String EmployeeEmail
        {
            get { return Fields.EmployeeEmail[this]; }
            set { Fields.EmployeeEmail[this] = value; }
        }

        [DisplayName("Employee Blood Group"), Expression("jEmployee.[BloodGroup]")]
        public String EmployeeBloodGroup
        {
            get { return Fields.EmployeeBloodGroup[this]; }
            set { Fields.EmployeeBloodGroup[this] = value; }
        }

        [DisplayName("Employee Picture"), Expression("jEmployee.[Picture]")]
        public String EmployeePicture
        {
            get { return Fields.EmployeePicture[this]; }
            set { Fields.EmployeePicture[this] = value; }
        }

        [DisplayName("Employee Country Id"), Expression("jEmployee.[CountryId]")]
        public Int64? EmployeeCountryId
        {
            get { return Fields.EmployeeCountryId[this]; }
            set { Fields.EmployeeCountryId[this] = value; }
        }

        [DisplayName("Employee State Id"), Expression("jEmployee.[StateId]")]
        public Int64? EmployeeStateId
        {
            get { return Fields.EmployeeStateId[this]; }
            set { Fields.EmployeeStateId[this] = value; }
        }

        [DisplayName("Employee City Id"), Expression("jEmployee.[CityId]")]
        public Int64? EmployeeCityId
        {
            get { return Fields.EmployeeCityId[this]; }
            set { Fields.EmployeeCityId[this] = value; }
        }

        [DisplayName("Employee Zip Code"), Expression("jEmployee.[ZipCode]")]
        public String EmployeeZipCode
        {
            get { return Fields.EmployeeZipCode[this]; }
            set { Fields.EmployeeZipCode[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee User Id"), Expression("jEmployee.[UserId]")]
        public Int32? EmployeeUserId
        {
            get { return Fields.EmployeeUserId[this]; }
            set { Fields.EmployeeUserId[this] = value; }
        }

        [DisplayName("Employee Region Id"), Expression("jEmployee.[RegionId]")]
        public Int64? EmployeeRegionId
        {
            get { return Fields.EmployeeRegionId[this]; }
            set { Fields.EmployeeRegionId[this] = value; }
        }

        [DisplayName("Employee Territory Id"), Expression("jEmployee.[TerritoryId]")]
        public Int64? EmployeeTerritoryId
        {
            get { return Fields.EmployeeTerritoryId[this]; }
            set { Fields.EmployeeTerritoryId[this] = value; }
        }

        [DisplayName("Employee Cnic"), Expression("jEmployee.[CNIC]")]
        public String EmployeeCnic
        {
            get { return Fields.EmployeeCnic[this]; }
            set { Fields.EmployeeCnic[this] = value; }
        }

        [DisplayName("Employee Insert Date"), Expression("jEmployee.[InsertDate]")]
        public DateTime? EmployeeInsertDate
        {
            get { return Fields.EmployeeInsertDate[this]; }
            set { Fields.EmployeeInsertDate[this] = value; }
        }

        [DisplayName("Employee Insert User Id"), Expression("jEmployee.[InsertUserId]")]
        public Int32? EmployeeInsertUserId
        {
            get { return Fields.EmployeeInsertUserId[this]; }
            set { Fields.EmployeeInsertUserId[this] = value; }
        }

        [DisplayName("Employee Update Date"), Expression("jEmployee.[UpdateDate]")]
        public DateTime? EmployeeUpdateDate
        {
            get { return Fields.EmployeeUpdateDate[this]; }
            set { Fields.EmployeeUpdateDate[this] = value; }
        }

        [DisplayName("Employee Update User Id"), Expression("jEmployee.[UpdateUserId]")]
        public Int32? EmployeeUpdateUserId
        {
            get { return Fields.EmployeeUpdateUserId[this]; }
            set { Fields.EmployeeUpdateUserId[this] = value; }
        }

        [DisplayName("Employee Delete Date"), Expression("jEmployee.[DeleteDate]")]
        public DateTime? EmployeeDeleteDate
        {
            get { return Fields.EmployeeDeleteDate[this]; }
            set { Fields.EmployeeDeleteDate[this] = value; }
        }

        [DisplayName("Employee Delete User Id"), Expression("jEmployee.[DeleteUserId]")]
        public Int32? EmployeeDeleteUserId
        {
            get { return Fields.EmployeeDeleteUserId[this]; }
            set { Fields.EmployeeDeleteUserId[this] = value; }
        }

        [DisplayName("Employee Is Active"), Expression("jEmployee.[IsActive]")]
        public Int32? EmployeeIsActive
        {
            get { return Fields.EmployeeIsActive[this]; }
            set { Fields.EmployeeIsActive[this] = value; }
        }

        public AttendanceRow()
        {
        }

        public AttendanceRow(RowFields fields)
            : base(fields)
        {
        }

      

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field EmployeeId;
            public DateTimeField CheckIn;
            public DateTimeField CheckOut;            
            public StringField StayTime;

            public StringField EmployeeFirstName;
            public StringField EmployeeLastName;
            public Int64Field EmployeeDesignationId;
            public Int64Field EmployeeDepartmentId;
            public Int32Field EmployeeRateType;
            public StringField EmployeePhone;
            public DoubleField EmployeeHoureRateSalary;
            public StringField EmployeeEmail;
            public StringField EmployeeBloodGroup;
            public StringField EmployeePicture;
            public Int64Field EmployeeCountryId;
            public Int64Field EmployeeStateId;
            public Int64Field EmployeeCityId;
            public StringField EmployeeZipCode;
            public StringField EmployeeAddress;
            public Int32Field EmployeeUserId;
            public Int64Field EmployeeRegionId;
            public Int64Field EmployeeTerritoryId;
            public StringField EmployeeCnic;
            public DateTimeField EmployeeInsertDate;
            public Int32Field EmployeeInsertUserId;
            public DateTimeField EmployeeUpdateDate;
            public Int32Field EmployeeUpdateUserId;
            public DateTimeField EmployeeDeleteDate;
            public Int32Field EmployeeDeleteUserId;
            public Int32Field EmployeeIsActive;
            public StringField EmployeeFullName;
        }
    }
}
