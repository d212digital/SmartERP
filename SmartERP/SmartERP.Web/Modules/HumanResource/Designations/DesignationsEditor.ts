namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerEditor()
    export class DesignationsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DesignationsRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return DesignationsRow.lookupKey;
        }

        protected getItemText(item: DesignationsRow, lookup: Q.Lookup<DesignationsRow>) {
            var visited = {};
            var text = item.Designation;
            while (item.ParentDesignationId != null && !visited[item.ParentDesignationId]) {
                item = lookup.itemById[item.ParentDesignationId];
                if (!item)
                    break;
                visited[item.Id] = true;
                text = item.Designation + " >> " + text;
            }

            return text;
        }
    }
}