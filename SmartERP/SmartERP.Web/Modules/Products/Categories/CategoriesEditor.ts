namespace SmartERP.Products {

    @Serenity.Decorators.registerEditor()
    export class CategoriesEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoriesRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return CategoriesRow.lookupKey;
        }

        protected getItemText(item: CategoriesRow, lookup: Q.Lookup<CategoriesRow>) {
            var visited = {};
            var text = item.Name;
            while (item.ParentCategoryId != null && !visited[item.ParentCategoryId]) {
                item = lookup.itemById[item.ParentCategoryId];
                if (!item)
                    break;
                visited[item.Id] = true;
                text = item.Name + " >> " + text;
            }

            return text;
        }
    }
}