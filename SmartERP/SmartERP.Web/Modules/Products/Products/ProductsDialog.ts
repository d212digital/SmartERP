
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }
        protected getDeletePermission() { return ProductsRow.deletePermission; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getUpdatePermission() { return ProductsRow.updatePermission; }

        protected form = new ProductsForm(this.idPrefix);
        constructor() {
            super();

            this.form.ProductName.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.Sn.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'P').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SmartERP.Products.ProductsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 7 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.Sn.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.Sn.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}