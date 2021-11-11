
namespace SmartERP.Purchases {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PurchasesDialog extends Serenity.EntityDialog<PurchasesRow, any> {
        protected getFormKey() { return PurchasesForm.formKey; }
        protected getIdProperty() { return PurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getNameProperty() { return PurchasesRow.nameProperty; }
        protected getService() { return PurchasesService.baseUrl; }
        protected getDeletePermission() { return PurchasesRow.deletePermission; }
        protected getInsertPermission() { return PurchasesRow.insertPermission; }
        protected getUpdatePermission() { return PurchasesRow.updatePermission; }

        protected form = new PurchasesForm(this.idPrefix);
        constructor() {
            super();


            this.form = new PurchasesForm(this.idPrefix);
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
            //this.form.Vat.change(() => {
            //    this.doCalculation();
            //});
            this.form.ShippingCost.change(() => {
                this.doCalculation();
            });
            this.form.PaidAmount.change(() => {
                this.doCalculation();
            });
            this.form.NoTax.change(() => {
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
            if (this.isNew) {
                if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                    var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                    vat = Company.VatPercentage;
                    this.form.VatPercentage.value = vat;
                    this.form.VatType.value = Company.VatType.toString();
                }

            }
            if (this.form.NoTax.value == false) {
                this.form.VatPercentage.value = vat;
            } else {
                this.form.VatPercentage.value = 0;
            }

            var vat = this.form.VatPercentage.value;


            if (this.form.VatType.value == VatKind.Exclusive.toString()) {
                this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
            } else {

                this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
            }


            this.form.TotalTax.value = this.form.Vat.value;


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
                    reportKey: 'Purchases.PurchaseReport',
                    params: {
                        OrderID: response.EntityId
                    }
                });
            });
        }
    }
}