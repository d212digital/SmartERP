
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey() { return AccountsForm.formKey; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getNameProperty() { return AccountsRow.nameProperty; }
        protected getService() { return AccountsService.baseUrl; }
        protected getDeletePermission() { return AccountsRow.deletePermission; }
        protected getInsertPermission() { return AccountsRow.insertPermission; }
        protected getUpdatePermission() { return AccountsRow.updatePermission; }

        protected form = new AccountsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new AccountsForm(this.idPrefix);


            this.form.HeadName.element.attr("tabindex", 1);
            this.setTabIndexSelect2(this.form.ParentHead.element, 2);
            this.form.IsGl.element.attr("tabindex", 3);
            this.form.IsTransaction.element.attr("tabindex", 4);
            //https://github.com/volkanceylan/Serenity/issues/3935
            this.form.ParentHead.changeSelect2(e => {

                this.UpdateAccountfields();
            });

            this.form.HeadName.change(e => {
               
                this.UpdateAccountfields();

            });
        }
        private UpdateAccountfields() {
            if (this.isNew) {
                var parentHead = Q.toId(this.form.ParentHead.value);
                this.form.HeadType.value='A'
                var accountsRows = SmartERP.Accounts.AccountsRow.getLookup().items;
                if (parentHead != null) {
                    //alert(JSON.stringify(SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead]));
                    var parentRow = SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead];

                    this.form.HeadLevel.value = parentRow.HeadLevel + 1;
                    var headCode = parentRow.HeadCode * 100;
                    this.form.PHeadName.value = parentRow.HeadName;

                    for (var i = 0; i < accountsRows.length; i++) {
                        if (accountsRows[i].HeadLevel == parentRow.HeadLevel+1) {
                            if (accountsRows[i].HeadCode > headCode) {
                                headCode = accountsRows[i].HeadCode;
                            }
                        }
                    }
                    headCode++;
                    this.form.HeadCode.value = headCode
                }
                else {
                    this.form.HeadLevel.value = 1;
                    //this.form.HeadCode.value = '1';
                    var headCode = 0;
                    this.form.PHeadName.value = 'COA';
                    for (var i = 0; i < accountsRows.length; i++) {
                        if (accountsRows[i].HeadLevel == 1) {
                            if (accountsRows[i].HeadCode > headCode) {
                                headCode = accountsRows[i].HeadCode;
                            }
                        }
                    }
                    headCode++;
                    this.form.HeadCode.value = headCode

                }
            }
            
            
        }
        private setTabIndexSelect2(element: JQuery, tabIndex: number) {
            element.prev("div.select2-container").find("input").attr("tabindex", tabIndex);
        }
        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

            this.form.HeadName.element.focus();
        }
    }
}