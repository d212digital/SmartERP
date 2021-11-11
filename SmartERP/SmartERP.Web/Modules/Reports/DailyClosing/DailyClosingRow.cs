
namespace SmartERP.Reports.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Reports"), TableName("[dbo].[DailyClosing]")]
    [DisplayName("Daily Closing"), InstanceName("Daily Closing")]
    [ReadPermission(PermissionKeys.Reports.DailyClosingReport)]
    [ModifyPermission(PermissionKeys.Reports.DailyClosingReport)]
    public sealed class DailyClosingRow : Row<DailyClosingRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity,IdProperty]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Last Day Closing")]
        public Double? LastDayClosing
        {
            get { return Fields.LastDayClosing[this]; }
            set { Fields.LastDayClosing[this] = value; }
        }

        [DisplayName("Receive")]
        public Double? CashIn
        {
            get { return Fields.CashIn[this]; }
            set { Fields.CashIn[this] = value; }
        }

        [DisplayName("Payment")]
        public Double? CashOut
        {
            get { return Fields.CashOut[this]; }
            set { Fields.CashOut[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Balance")]
        public Double? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Adjustment")]
        public Double? Adjustment
        {
            get { return Fields.Adjustment[this]; }
            set { Fields.Adjustment[this] = value; }
        }

        [DisplayName("Status")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Last Closing Amount"), Column("LastClosingAmount"), Expression("(ISNULL((SELECT TOP 1 [Amount] FROM [dbo].[DailyClosing] WHERE [Date] = (SELECT MAX([Date]) FROM [dbo].[DailyClosing]) ORDER BY [Id] DESC),0))"),LookupInclude]
        public Double? LastClosingAmount
        {
            get { return Fields.LastClosingAmount[this]; }
            set { Fields.LastClosingAmount[this] = value; }
        }

        [DisplayName("Today Cash In"), Column("TodayCashIn"), Expression("( ISNULL((SELECT SUM(t.[Debit]) FROM [dbo].[Transactions] t where t.[COA]='1020101' and t.[VDate]=getDate()),0))"), LookupInclude]
        public Double? TodayCashIn
        {
            get { return Fields.TodayCashIn[this]; }
            set { Fields.TodayCashIn[this] = value; }
        }
        [DisplayName("Today Cash Out"),Column("TodayCashOut"), Expression("( ISNULL((SELECT SUM(t.[Credit]) FROM [dbo].[Transactions] t where t.[COA]='1020101' and t.[VDate]=getDate()),0))"), LookupInclude]
        public Double? TodayCashOut
        {
            get { return Fields.TodayCashOut[this]; }
            set { Fields.TodayCashOut[this] = value; }
        }
        [DisplayName("Last Closing Date"), Column("LastClosingDate"), Expression("(SELECT MAX([Date]) FROM [dbo].[DailyClosing])"), LookupInclude]
        public DateTime? LastClosingDate
        {
            get { return Fields.LastClosingDate[this]; }
            set { Fields.LastClosingDate[this] = value; }
        }

        public DailyClosingRow()
        {
        }

        public DailyClosingRow(RowFields fields)
            : base(fields)
        {
        }

       

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public DoubleField LastDayClosing;
            public DoubleField CashIn;
            public DoubleField CashOut;
            public DateTimeField Date;
            public DoubleField Amount;
            public DoubleField Adjustment;
            public Int32Field Status;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            
            public DoubleField LastClosingAmount;
            public DoubleField TodayCashIn;
            public DoubleField TodayCashOut;

            public DateTimeField LastClosingDate;


        }
    }
}
