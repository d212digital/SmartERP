
namespace SmartERP.Services {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ServiceInvoicesDialog extends Serenity.EntityDialog<ServiceInvoicesRow, any> {
        protected getFormKey() { return ServiceInvoicesForm.formKey; }
        protected getIdProperty() { return ServiceInvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceInvoicesRow.localTextPrefix; }
        protected getNameProperty() { return ServiceInvoicesRow.nameProperty; }
        protected getService() { return ServiceInvoicesService.baseUrl; }
        protected getDeletePermission() { return ServiceInvoicesRow.deletePermission; }
        protected getInsertPermission() { return ServiceInvoicesRow.insertPermission; }
        protected getUpdatePermission() { return ServiceInvoicesRow.updatePermission; }

        protected form = new ServiceInvoicesForm(this.idPrefix);
        constructor() {
            super();


            this.form = new ServiceInvoicesForm(this.idPrefix);
            this.form.Date.change(e => {
                //this.updateExpiryDate();
            });

            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
                // Q.notifySuccess(total.toString());
            });
            this.form.Discount.change(() => {
                this.doCalculation();
            });
            this.form.Vat.change(() => {
                this.doCalculation();
            });
            this.form.ShippingCost.change(() => {
                this.doCalculation();
            });
            this.form.PaidAmount.change(() => {
                this.doCalculation();
            });
        }
        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

            //this.updateExpiryDate();
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.doCalculation();
        }
        private doCalculation() {
            var total = 0;
            for (var k of this.form.LineItems.getItems()) {
                total += k.Total || 0;
            }
            this.form.GrandTotal.value = total;


            var subDiscount = 0;
            for (var k of this.form.LineItems.getItems()) {
                subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
            }

            this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                       
            var vat = 0;
            var vatType = VatKind.Exclusive;
            if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                vat = Company.VatPercentage;
                vatType = Company.VatType;
            }
            if (vatType == VatKind.Exclusive) {
                this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
            } else {

                this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
            }

            this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
            if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                this.form.Due.value = 0;
            } else {
                this.form.Change.value = 0;
            }
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
            Q.confirm("Do you want to print this", function () {
                Serenity.Extensions.ReportHelper.execute({
                    reportKey: 'Services.ServiceReport',
                    params: {
                        OrderID: response.EntityId
                    }
                });
            });
        }
    }
}