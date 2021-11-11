namespace SmartERP.Accounts {

    @Serenity.Decorators.registerEditor()
    export class AccountsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, AccountsRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return AccountsRow.lookupKey;
        }
         
        protected getItemText(item: AccountsRow, lookup: Q.Lookup<AccountsRow>) {
            var visited = {};
            var text = item.HeadName;
            while (item.ParentHead != null && !visited[item.ParentHead]) {
                item = lookup.itemById[item.ParentHead];
                if (!item)
                    break;
                visited[item.Id] = true;
                text = item.HeadName + " >> " + text;
            }

            return text;
        }
    }
}