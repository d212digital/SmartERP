
namespace SmartERP.Services.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Services"), TableName("[dbo].[ServiceInvoiceDetails]")]
    [DisplayName("Service Invoice Details"), InstanceName("Service Invoice Details")]
    [ReadPermission(PermissionKeys.ServiceInvoices.View)]
    [InsertPermission(PermissionKeys.ServiceInvoices.Create)]
    [UpdatePermission(PermissionKeys.ServiceInvoices.Update)]
    [DeletePermission(PermissionKeys.ServiceInvoices.Delete)]
    public sealed class ServiceInvoiceDetailsRow : SmartERP.LoggingRow<ServiceInvoiceDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,IdProperty, Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Service"), NotNull,PrimaryKey, ForeignKey("[dbo].[Services]", "Id"), LeftJoin("jService"), TextualField("ServiceServiceName")]
        [LookupEditor(typeof(ServicesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Services.Services")]
        public Int64? ServiceId
        {
            get { return Fields.ServiceId[this]; }
            set { Fields.ServiceId[this] = value; }
        }

        [DisplayName("Description"), Size(500), QuickSearch,NameProperty]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Service Charge"), NotNull]
        public Double? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Discount (%)"), NotNull]
        public Double? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Total"), NotNull]
        public Double? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Service Invoice"), NotNull,PrimaryKey, ForeignKey("[dbo].[ServiceInvoices]", "Id"), LeftJoin("jServiceInvoice"), TextualField("ServiceInvoiceDetails")]
        public Int64? ServiceInvoiceId
        {
            get { return Fields.ServiceInvoiceId[this]; }
            set { Fields.ServiceInvoiceId[this] = value; }
        }
        [DisplayName("ServiceName"), Size(250), QuickSearch]
        public String ServiceName
        {
            get { return Fields.ServiceName[this]; }
            set { Fields.ServiceName[this] = value; }
        }

        [DisplayName("Service Name"), Expression("jService.[ServiceName]")]
        public String ServiceServiceName
        {
            get { return Fields.ServiceServiceName[this]; }
            set { Fields.ServiceServiceName[this] = value; }
        }

        [DisplayName("Service Charge"), Expression("jService.[Charge]")]
        public Double? ServiceCharge
        {
            get { return Fields.ServiceCharge[this]; }
            set { Fields.ServiceCharge[this] = value; }
        }

        [DisplayName("Service Description"), Expression("jService.[Description]")]
        public String ServiceDescription
        {
            get { return Fields.ServiceDescription[this]; }
            set { Fields.ServiceDescription[this] = value; }
        }

        [DisplayName("Service Tax"), Expression("jService.[Tax]")]
        public Double? ServiceTax
        {
            get { return Fields.ServiceTax[this]; }
            set { Fields.ServiceTax[this] = value; }
        }

        [DisplayName("Service Invoice Customer Id"), Expression("jServiceInvoice.[CustomerId]")]
        public Int64? ServiceInvoiceCustomerId
        {
            get { return Fields.ServiceInvoiceCustomerId[this]; }
            set { Fields.ServiceInvoiceCustomerId[this] = value; }
        }

        [DisplayName("Service Invoice Date"), Expression("jServiceInvoice.[Date]")]
        public DateTime? ServiceInvoiceDate
        {
            get { return Fields.ServiceInvoiceDate[this]; }
            set { Fields.ServiceInvoiceDate[this] = value; }
        }

        [DisplayName("Service Invoice User Id"), Expression("jServiceInvoice.[UserId]")]
        public Int32? ServiceInvoiceUserId
        {
            get { return Fields.ServiceInvoiceUserId[this]; }
            set { Fields.ServiceInvoiceUserId[this] = value; }
        }

        [DisplayName("Service Invoice Discount"), Expression("jServiceInvoice.[Discount]")]
        public Double? ServiceInvoiceDiscount
        {
            get { return Fields.ServiceInvoiceDiscount[this]; }
            set { Fields.ServiceInvoiceDiscount[this] = value; }
        }

        [DisplayName("Service Invoice Total Discount"), Expression("jServiceInvoice.[TotalDiscount]")]
        public Double? ServiceInvoiceTotalDiscount
        {
            get { return Fields.ServiceInvoiceTotalDiscount[this]; }
            set { Fields.ServiceInvoiceTotalDiscount[this] = value; }
        }

        [DisplayName("Service Invoice Vat"), Expression("jServiceInvoice.[Vat]")]
        public Double? ServiceInvoiceVat
        {
            get { return Fields.ServiceInvoiceVat[this]; }
            set { Fields.ServiceInvoiceVat[this] = value; }
        }

        [DisplayName("Service Invoice Total Tax"), Expression("jServiceInvoice.[TotalTax]")]
        public Double? ServiceInvoiceTotalTax
        {
            get { return Fields.ServiceInvoiceTotalTax[this]; }
            set { Fields.ServiceInvoiceTotalTax[this] = value; }
        }

        [DisplayName("Service Invoice Shipping Cost"), Expression("jServiceInvoice.[ShippingCost]")]
        public Double? ServiceInvoiceShippingCost
        {
            get { return Fields.ServiceInvoiceShippingCost[this]; }
            set { Fields.ServiceInvoiceShippingCost[this] = value; }
        }

        [DisplayName("Service Invoice Grand Total"), Expression("jServiceInvoice.[GrandTotal]")]
        public Double? ServiceInvoiceGrandTotal
        {
            get { return Fields.ServiceInvoiceGrandTotal[this]; }
            set { Fields.ServiceInvoiceGrandTotal[this] = value; }
        }

        [DisplayName("Service Invoice Net Total"), Expression("jServiceInvoice.[NetTotal]")]
        public Double? ServiceInvoiceNetTotal
        {
            get { return Fields.ServiceInvoiceNetTotal[this]; }
            set { Fields.ServiceInvoiceNetTotal[this] = value; }
        }

        [DisplayName("Service Invoice Paid Amount"), Expression("jServiceInvoice.[PaidAmount]")]
        public Double? ServiceInvoicePaidAmount
        {
            get { return Fields.ServiceInvoicePaidAmount[this]; }
            set { Fields.ServiceInvoicePaidAmount[this] = value; }
        }

        [DisplayName("Service Invoice Due"), Expression("jServiceInvoice.[Due]")]
        public Double? ServiceInvoiceDue
        {
            get { return Fields.ServiceInvoiceDue[this]; }
            set { Fields.ServiceInvoiceDue[this] = value; }
        }

        [DisplayName("Service Invoice Change"), Expression("jServiceInvoice.[Change]")]
        public Double? ServiceInvoiceChange
        {
            get { return Fields.ServiceInvoiceChange[this]; }
            set { Fields.ServiceInvoiceChange[this] = value; }
        }

        [DisplayName("Service Invoice Details"), Expression("jServiceInvoice.[Details]")]
        public String ServiceInvoiceDetails
        {
            get { return Fields.ServiceInvoiceDetails[this]; }
            set { Fields.ServiceInvoiceDetails[this] = value; }
        }

        public ServiceInvoiceDetailsRow()
        {
        }

        public ServiceInvoiceDetailsRow(RowFields fields)
            : base(fields)
        {
        }

        

        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public Int64Field ServiceId;
            public StringField ServiceName;
            public StringField Description;
            public DoubleField Quantity;
            public DoubleField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int64Field ServiceInvoiceId; 

            public StringField ServiceServiceName;
            public DoubleField ServiceCharge;
            public StringField ServiceDescription;
            public DoubleField ServiceTax;

            public Int64Field ServiceInvoiceCustomerId;
            public DateTimeField ServiceInvoiceDate;
            public Int32Field ServiceInvoiceUserId;
            public DoubleField ServiceInvoiceDiscount;
            public DoubleField ServiceInvoiceTotalDiscount;
            public DoubleField ServiceInvoiceVat;
            public DoubleField ServiceInvoiceTotalTax;
            public DoubleField ServiceInvoiceShippingCost;
            public DoubleField ServiceInvoiceGrandTotal;
            public DoubleField ServiceInvoiceNetTotal;
            public DoubleField ServiceInvoicePaidAmount;
            public DoubleField ServiceInvoiceDue;
            public DoubleField ServiceInvoiceChange;
            public StringField ServiceInvoiceDetails;
        }
    }
}
