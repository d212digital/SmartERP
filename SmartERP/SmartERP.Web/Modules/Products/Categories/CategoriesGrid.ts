
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey() { return 'Products.Categories'; }
        protected getDialogType() { return CategoriesDialog; }
        protected getIsActiveProperty() { return CategoriesRow.isActiveProperty; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getService() { return CategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.TreeGridMixin<CategoriesRow>({
                grid: this,
                getParentId: x => x.ParentCategoryId,
                toggleField: CategoriesRow.Fields.Name,
                initialCollapse: () => false
            });
        }
        protected subDialogDataChange() {
            super.subDialogDataChange();

            Q.reloadLookup(CategoriesRow.lookupKey);
        }
        protected usePager() {
            return false;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(Q.indexOf(columns, x => x.name == CategoriesRow.Fields.Name) + 1, 0, {
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
                    var dlg = new CategoriesDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog({
                        ParentCategoryId: item.Id
                    });
                }
            }
        }
    }
}