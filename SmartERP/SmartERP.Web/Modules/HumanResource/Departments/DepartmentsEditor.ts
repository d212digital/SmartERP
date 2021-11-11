namespace SmartERP.HumanResource {

    @Serenity.Decorators.registerEditor()
    export class DepartmentsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DepartmentsRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return DepartmentsRow.lookupKey;
        }

        protected getItemText(item: DepartmentsRow, lookup: Q.Lookup<DepartmentsRow>) {
            var visited = {};
            var text = item.Department;
            while (item.ParentDepartmentId != null && !visited[item.ParentDepartmentId]) {
                item = lookup.itemById[item.ParentDepartmentId];
                if (!item)
                    break;
                visited[item.Id] = true;
                text = item.Department + " >> " + text;
            }

            return text;
        }
    }
}