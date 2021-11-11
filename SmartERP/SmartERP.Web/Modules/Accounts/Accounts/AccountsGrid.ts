
namespace SmartERP.Accounts {

    @Serenity.Decorators.registerClass()
    export class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey() { return 'Accounts.Accounts'; }
        protected getDialogType() { return AccountsDialog; }
        protected getIsActiveProperty() { return AccountsRow.isActiveProperty; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getInsertPermission() { return AccountsRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getService() { return AccountsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            new Serenity.TreeGridMixin<AccountsRow>({
                grid: this,
                getParentId: x => x.ParentHead,
                toggleField: AccountsRow.Fields.HeadName,
                initialCollapse: () => false
            });
        }
        protected subDialogDataChange() {
            super.subDialogDataChange();

            Q.reloadLookup(AccountsRow.lookupKey);
        }
        protected usePager() {
            return false;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(Q.indexOf(columns, x => x.name == AccountsRow.Fields.HeadName) + 1, 0, {
                field: 'Add Child Unit',
                name: '',
                format: ctx => '<a class="inline-action add-child-unit" title="add child unit"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('add-child-unit')) {
                    var dlg = new AccountsDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog({
                        ParentHead: item.Id
                    });
                }
            }
        }
    }
}