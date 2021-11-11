/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.extensions" />
declare namespace SmartERP {
    enum AccountKind {
        Debit = 1,
        Credit = 2
    }
}
declare namespace SmartERP.Accounts {
    class AccountsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface AccountsForm {
        HeadName: Serenity.StringEditor;
        HeadCode: Serenity.IntegerEditor;
        ParentHead: AccountsEditor;
        PHeadName: Serenity.StringEditor;
        HeadLevel: Serenity.IntegerEditor;
        HeadType: Serenity.StringEditor;
        IsTransaction: Serenity.BooleanEditor;
        IsGl: Serenity.BooleanEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface AccountsRow {
        Id?: number;
        HeadCode?: number;
        HeadName?: string;
        ParentHead?: number;
        PHeadName?: string;
        HeadLevel?: number;
        HeadType?: string;
        IsTransaction?: boolean;
        IsGl?: boolean;
        IsBudget?: boolean;
        IsDepreciation?: boolean;
        CustomerId?: number;
        SupplierId?: number;
        DepreciationRate?: number;
        OpeningBalance?: number;
        Balance?: number;
        HeadCodeName?: string;
        ParentHeadHeadCode?: number;
        ParentHeadHeadName?: string;
        ParentHead1?: number;
        ParentHeadPHeadName?: string;
        ParentHeadHeadLevel?: number;
        ParentHeadHeadType?: string;
        ParentHeadIsTransaction?: boolean;
        ParentHeadIsGl?: boolean;
        ParentHeadIsBudget?: boolean;
        ParentHeadIsDepreciation?: boolean;
        ParentHeadCustomerId?: number;
        ParentHeadSupplierId?: number;
        ParentHeadDepreciationRate?: number;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierInsertDate?: string;
        SupplierInsertUserId?: number;
        SupplierUpdateDate?: string;
        SupplierUpdateUserId?: number;
        SupplierDeleteDate?: string;
        SupplierDeleteUserId?: number;
        SupplierIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AccountsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "HeadCode";
        const localTextPrefix = "Accounts.Accounts";
        const lookupKey = "Accounts.Accounts";
        function getLookup(): Q.Lookup<AccountsRow>;
        const deletePermission = "Financial:Chart Of Accounts:Delete";
        const insertPermission = "Financial:Chart Of Accounts:Create";
        const readPermission = "Financial:Chart Of Accounts:View";
        const updatePermission = "Financial:Chart Of Accounts:Update";
        const enum Fields {
            Id = "Id",
            HeadCode = "HeadCode",
            HeadName = "HeadName",
            ParentHead = "ParentHead",
            PHeadName = "PHeadName",
            HeadLevel = "HeadLevel",
            HeadType = "HeadType",
            IsTransaction = "IsTransaction",
            IsGl = "IsGl",
            IsBudget = "IsBudget",
            IsDepreciation = "IsDepreciation",
            CustomerId = "CustomerId",
            SupplierId = "SupplierId",
            DepreciationRate = "DepreciationRate",
            OpeningBalance = "OpeningBalance",
            Balance = "Balance",
            HeadCodeName = "HeadCodeName",
            ParentHeadHeadCode = "ParentHeadHeadCode",
            ParentHeadHeadName = "ParentHeadHeadName",
            ParentHead1 = "ParentHead1",
            ParentHeadPHeadName = "ParentHeadPHeadName",
            ParentHeadHeadLevel = "ParentHeadHeadLevel",
            ParentHeadHeadType = "ParentHeadHeadType",
            ParentHeadIsTransaction = "ParentHeadIsTransaction",
            ParentHeadIsGl = "ParentHeadIsGl",
            ParentHeadIsBudget = "ParentHeadIsBudget",
            ParentHeadIsDepreciation = "ParentHeadIsDepreciation",
            ParentHeadCustomerId = "ParentHeadCustomerId",
            ParentHeadSupplierId = "ParentHeadSupplierId",
            ParentHeadDepreciationRate = "ParentHeadDepreciationRate",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierInsertDate = "SupplierInsertDate",
            SupplierInsertUserId = "SupplierInsertUserId",
            SupplierUpdateDate = "SupplierUpdateDate",
            SupplierUpdateUserId = "SupplierUpdateUserId",
            SupplierDeleteDate = "SupplierDeleteDate",
            SupplierDeleteUserId = "SupplierDeleteUserId",
            SupplierIsActive = "SupplierIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace AccountsService {
        const baseUrl = "Accounts/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Accounts/Create",
            Update = "Accounts/Accounts/Update",
            Delete = "Accounts/Accounts/Delete",
            Retrieve = "Accounts/Accounts/Retrieve",
            List = "Accounts/Accounts/List",
            Undelete = "Accounts/Accounts/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class BankTransactionsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface BankTransactionsForm {
        VDate: Serenity.DateEditor;
        AccountType: Serenity.EnumEditor;
        VNo: Serenity.StringEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class BankTransactionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface BankTransactionsRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        AccountType?: AccountKind;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace BankTransactionsRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.BankTransactions";
        const deletePermission = "Cash/Bank:Bank Transactions";
        const insertPermission = "Cash/Bank:Bank Transactions";
        const readPermission = "Cash/Bank:Bank Transactions";
        const updatePermission = "Cash/Bank:Bank Transactions";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            AccountType = "AccountType",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace BankTransactionsService {
        const baseUrl = "Accounts/BankTransactions";
        function Create(request: Serenity.SaveRequest<BankTransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankTransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankTransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankTransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/BankTransactions/Create",
            Update = "Accounts/BankTransactions/Update",
            Delete = "Accounts/BankTransactions/Delete",
            Retrieve = "Accounts/BankTransactions/Retrieve",
            List = "Accounts/BankTransactions/List",
            Undelete = "Accounts/BankTransactions/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class CashAdjustmentColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface CashAdjustmentForm {
        VDate: Serenity.DateEditor;
        Coa: Serenity.StringEditor;
        AccountType: Serenity.EnumEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class CashAdjustmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface CashAdjustmentRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        AccountType?: AccountKind;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace CashAdjustmentRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.CashAdjustment";
        const deletePermission = "Cash/Bank:Cash Adjustment";
        const insertPermission = "Cash/Bank:Cash Adjustment";
        const readPermission = "Cash/Bank:Cash Adjustment";
        const updatePermission = "Cash/Bank:Cash Adjustment";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            AccountType = "AccountType",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace CashAdjustmentService {
        const baseUrl = "Accounts/CashAdjustment";
        function Create(request: Serenity.SaveRequest<CashAdjustmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashAdjustmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashAdjustmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashAdjustmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CashAdjustment/Create",
            Update = "Accounts/CashAdjustment/Update",
            Delete = "Accounts/CashAdjustment/Delete",
            Retrieve = "Accounts/CashAdjustment/Retrieve",
            List = "Accounts/CashAdjustment/List",
            Undelete = "Accounts/CashAdjustment/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class ContraVoucherColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface ContraVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class ContraVoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface ContraVoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace ContraVoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.ContraVoucher";
        const deletePermission = "Financial:Contra Voucher";
        const insertPermission = "Financial:Contra Voucher";
        const readPermission = "Financial:Contra Voucher";
        const updatePermission = "Financial:Contra Voucher";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace ContraVoucherService {
        const baseUrl = "Accounts/ContraVoucher";
        function Create(request: Serenity.SaveRequest<ContraVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContraVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContraVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContraVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/ContraVoucher/Create",
            Update = "Accounts/ContraVoucher/Update",
            Delete = "Accounts/ContraVoucher/Delete",
            Retrieve = "Accounts/ContraVoucher/Retrieve",
            List = "Accounts/ContraVoucher/List",
            Undelete = "Accounts/ContraVoucher/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class CreditVoucherColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface CreditVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class CreditVoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface CreditVoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        CreditAccountId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace CreditVoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.CreditVoucher";
        const deletePermission = "Financial:Credit Voucher";
        const insertPermission = "Financial:Credit Voucher";
        const readPermission = "Financial:Credit Voucher";
        const updatePermission = "Financial:Credit Voucher";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            CreditAccountId = "CreditAccountId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace CreditVoucherService {
        const baseUrl = "Accounts/CreditVoucher";
        function Create(request: Serenity.SaveRequest<CreditVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CreditVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CreditVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CreditVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CreditVoucher/Create",
            Update = "Accounts/CreditVoucher/Update",
            Delete = "Accounts/CreditVoucher/Delete",
            Retrieve = "Accounts/CreditVoucher/Retrieve",
            List = "Accounts/CreditVoucher/List",
            Undelete = "Accounts/CreditVoucher/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class CustomerReceiveColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface CustomerReceiveForm {
        VDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class CustomerReceiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface CustomerReceiveRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        CustomerId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CustomerName?: string;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace CustomerReceiveRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.CustomerReceive";
        const deletePermission = "Cash/Bank:Customer Receive";
        const insertPermission = "Cash/Bank:Customer Receive";
        const readPermission = "Cash/Bank:Customer Receive";
        const updatePermission = "Cash/Bank:Customer Receive";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            CustomerId = "CustomerId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CustomerName = "CustomerName",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace CustomerReceiveService {
        const baseUrl = "Accounts/CustomerReceive";
        function Create(request: Serenity.SaveRequest<CustomerReceiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerReceiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerReceiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerReceiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CustomerReceive/Create",
            Update = "Accounts/CustomerReceive/Update",
            Delete = "Accounts/CustomerReceive/Delete",
            Retrieve = "Accounts/CustomerReceive/Retrieve",
            List = "Accounts/CustomerReceive/List",
            Undelete = "Accounts/CustomerReceive/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class DebitVoucherColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface DebitVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class DebitVoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface DebitVoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        DebitAccountId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace DebitVoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.DebitVoucher";
        const deletePermission = "Financial:Debit Voucher";
        const insertPermission = "Financial:Debit Voucher";
        const readPermission = "Financial:Debit Voucher";
        const updatePermission = "Financial:Debit Voucher";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            DebitAccountId = "DebitAccountId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace DebitVoucherService {
        const baseUrl = "Accounts/DebitVoucher";
        function Create(request: Serenity.SaveRequest<DebitVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DebitVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DebitVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DebitVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/DebitVoucher/Create",
            Update = "Accounts/DebitVoucher/Update",
            Delete = "Accounts/DebitVoucher/Delete",
            Retrieve = "Accounts/DebitVoucher/Retrieve",
            List = "Accounts/DebitVoucher/List",
            Undelete = "Accounts/DebitVoucher/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class JournalVoucherColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface JournalVoucherForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class JournalVoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface JournalVoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace JournalVoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.JournalVoucher";
        const deletePermission = "Financial:Journal Voucher";
        const insertPermission = "Financial:Journal Voucher";
        const readPermission = "Financial:Journal Voucher";
        const updatePermission = "Financial:Journal Voucher";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace JournalVoucherService {
        const baseUrl = "Accounts/JournalVoucher";
        function Create(request: Serenity.SaveRequest<JournalVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JournalVoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JournalVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JournalVoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/JournalVoucher/Create",
            Update = "Accounts/JournalVoucher/Update",
            Delete = "Accounts/JournalVoucher/Delete",
            Retrieve = "Accounts/JournalVoucher/Retrieve",
            List = "Accounts/JournalVoucher/List",
            Undelete = "Accounts/JournalVoucher/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class OpeningBalanceColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface OpeningBalanceForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        AccountType: Serenity.EnumEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class OpeningBalanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface OpeningBalanceRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        AccountType?: AccountKind;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        IsOpening?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace OpeningBalanceRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.OpeningBalance";
        const deletePermission = "Financial:Opening Balance";
        const insertPermission = "Financial:Opening Balance";
        const readPermission = "Financial:Opening Balance";
        const updatePermission = "Financial:Opening Balance";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            AccountType = "AccountType",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            IsOpening = "IsOpening",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace OpeningBalanceService {
        const baseUrl = "Accounts/OpeningBalance";
        function Create(request: Serenity.SaveRequest<OpeningBalanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpeningBalanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpeningBalanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpeningBalanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/OpeningBalance/Create",
            Update = "Accounts/OpeningBalance/Update",
            Delete = "Accounts/OpeningBalance/Delete",
            Retrieve = "Accounts/OpeningBalance/Retrieve",
            List = "Accounts/OpeningBalance/List",
            Undelete = "Accounts/OpeningBalance/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class SupplierPaymentColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface SupplierPaymentForm {
        VDate: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class SupplierPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface SupplierPaymentRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        SupplierId?: number;
        Remark?: string;
        SupplierCompanyName?: string;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace SupplierPaymentRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.SupplierPayment";
        const deletePermission = "Cash/Bank:Supplier Payment";
        const insertPermission = "Cash/Bank:Supplier Payment";
        const readPermission = "Cash/Bank:Supplier Payment";
        const updatePermission = "Cash/Bank:Supplier Payment";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            SupplierId = "SupplierId",
            Remark = "Remark",
            SupplierCompanyName = "SupplierCompanyName",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace SupplierPaymentService {
        const baseUrl = "Accounts/SupplierPayment";
        function Create(request: Serenity.SaveRequest<SupplierPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/SupplierPayment/Create",
            Update = "Accounts/SupplierPayment/Update",
            Delete = "Accounts/SupplierPayment/Delete",
            Retrieve = "Accounts/SupplierPayment/Retrieve",
            List = "Accounts/SupplierPayment/List",
            Undelete = "Accounts/SupplierPayment/Undelete"
        }
    }
}
declare namespace SmartERP.Accounts {
    class TransactionsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Accounts {
    interface TransactionsForm {
        VNo: Serenity.StringEditor;
        Vtype: Serenity.StringEditor;
        VDate: Serenity.DateEditor;
        CoaId: Serenity.StringEditor;
        Coa: Serenity.StringEditor;
        Narration: Serenity.StringEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        IsPosted: Serenity.BooleanEditor;
        IsAppove: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }
    class TransactionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Accounts {
    interface TransactionsRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
        CoaEmployeeId?: number;
        CoaExpenseTypeId?: number;
        CoaBankId?: number;
    }
    namespace TransactionsRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Accounts.Transactions";
        const deletePermission = "Financial:Transactions";
        const insertPermission = "Financial:Transactions";
        const readPermission = "Financial:Transactions";
        const updatePermission = "Financial:Transactions";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive",
            CoaEmployeeId = "CoaEmployeeId",
            CoaExpenseTypeId = "CoaExpenseTypeId",
            CoaBankId = "CoaBankId"
        }
    }
}
declare namespace SmartERP.Accounts {
    namespace TransactionsService {
        const baseUrl = "Accounts/Transactions";
        function Create(request: Serenity.SaveRequest<TransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Transactions/Create",
            Update = "Accounts/Transactions/Update",
            Delete = "Accounts/Transactions/Delete",
            Retrieve = "Accounts/Transactions/Retrieve",
            List = "Accounts/Transactions/List",
            Undelete = "Accounts/Transactions/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class CitiesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface CitiesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface CitiesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CitiesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Cities";
        const lookupKey = "Administration.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Masters:City:Delete";
        const insertPermission = "Masters:City:Create";
        const readPermission = "Masters:City:View";
        const updatePermission = "Masters:City:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace CitiesService {
        const baseUrl = "Administration/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Cities/Create",
            Update = "Administration/Cities/Update",
            Delete = "Administration/Cities/Delete",
            Retrieve = "Administration/Cities/Retrieve",
            List = "Administration/Cities/List",
            Undelete = "Administration/Cities/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class CompaniesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface CompaniesForm {
        CompanyName: Serenity.StringEditor;
        CompanyEmail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
        VatPercentage: Serenity.DecimalEditor;
        Logo: Serenity.ImageUploadEditor;
        SaleLogo: Serenity.ImageUploadEditor;
        Favicon: Serenity.ImageUploadEditor;
        CurrencyPosition: Serenity.EnumEditor;
        FooterText: Serenity.TextAreaEditor;
    }
    class CompaniesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface CompaniesRow {
        Id?: number;
        CompanyName?: string;
        CompanyEmail?: string;
        Address?: string;
        Phone?: string;
        CurrencyId?: number;
        VatPercentage?: number;
        Logo?: string;
        SaleLogo?: string;
        Favicon?: string;
        CurrencyPosition?: CurrencyPositionKind;
        FooterText?: string;
        CurrencyCurrencyName?: string;
        CurrencyCurrencySymbol?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CompaniesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Administration.Companies";
        const lookupKey = "Administration.Companies";
        function getLookup(): Q.Lookup<CompaniesRow>;
        const deletePermission = "Administration:Settings";
        const insertPermission = "Administration:Settings";
        const readPermission = "Administration:Settings";
        const updatePermission = "Administration:Settings";
        const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CompanyEmail = "CompanyEmail",
            Address = "Address",
            Phone = "Phone",
            CurrencyId = "CurrencyId",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            SaleLogo = "SaleLogo",
            Favicon = "Favicon",
            CurrencyPosition = "CurrencyPosition",
            FooterText = "FooterText",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyCurrencySymbol = "CurrencyCurrencySymbol",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace CompaniesService {
        const baseUrl = "Administration/Companies";
        function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Companies/Create",
            Update = "Administration/Companies/Update",
            Delete = "Administration/Companies/Delete",
            Retrieve = "Administration/Companies/Retrieve",
            List = "Administration/Companies/List",
            Undelete = "Administration/Companies/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class CountriesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface CountriesForm {
        Name: Serenity.StringEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface CountriesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CountriesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Countries";
        const lookupKey = "Administration.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const deletePermission = "Masters:Country:Delete";
        const insertPermission = "Masters:Country:Create";
        const readPermission = "Masters:Country:View";
        const updatePermission = "Masters:Country:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace CountriesService {
        const baseUrl = "Administration/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Countries/Create",
            Update = "Administration/Countries/Update",
            Delete = "Administration/Countries/Delete",
            Retrieve = "Administration/Countries/Retrieve",
            List = "Administration/Countries/List",
            Undelete = "Administration/Countries/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class CurrenciesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface CurrenciesForm {
        CurrencyName: Serenity.StringEditor;
        CurrencySymbol: Serenity.StringEditor;
    }
    class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface CurrenciesRow {
        Id?: number;
        CurrencyName?: string;
        CurrencySymbol?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CurrenciesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CurrencyName";
        const localTextPrefix = "Administration.Currencies";
        const lookupKey = "Administration.Currencies";
        function getLookup(): Q.Lookup<CurrenciesRow>;
        const deletePermission = "Administration:Currency:Delete";
        const insertPermission = "Administration:Currency:Create";
        const readPermission = "Administration:Currency:View";
        const updatePermission = "Administration:Currency:Update";
        const enum Fields {
            Id = "Id",
            CurrencyName = "CurrencyName",
            CurrencySymbol = "CurrencySymbol",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace CurrenciesService {
        const baseUrl = "Administration/Currencies";
        function Create(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Currencies/Create",
            Update = "Administration/Currencies/Update",
            Delete = "Administration/Currencies/Delete",
            Retrieve = "Administration/Currencies/Retrieve",
            List = "Administration/Currencies/List",
            Undelete = "Administration/Currencies/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SmartERP.Administration {
}
declare namespace SmartERP.Administration {
    class RegionsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface RegionsForm {
        Name: Serenity.StringEditor;
    }
    class RegionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface RegionsRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace RegionsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Regions";
        const lookupKey = "Administration.Regions";
        function getLookup(): Q.Lookup<RegionsRow>;
        const deletePermission = "Masters:Region:Delete";
        const insertPermission = "Masters:Region:Create";
        const readPermission = "Masters:Region:View";
        const updatePermission = "Masters:Region:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace RegionsService {
        const baseUrl = "Administration/Regions";
        function Create(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Regions/Create",
            Update = "Administration/Regions/Update",
            Delete = "Administration/Regions/Delete",
            Retrieve = "Administration/Regions/Retrieve",
            List = "Administration/Regions/List",
            Undelete = "Administration/Regions/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SmartERP.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SmartERP.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SmartERP.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SmartERP.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SmartERP.Administration {
    class ShippersColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface ShippersForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }
    class ShippersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface ShippersRow {
        Id?: number;
        CompanyName?: string;
        Phone?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ShippersRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Administration.Shippers";
        const lookupKey = "Administration.Shippers";
        function getLookup(): Q.Lookup<ShippersRow>;
        const deletePermission = "Masters:Shipper:Delete";
        const insertPermission = "Masters:Shipper:Create";
        const readPermission = "Masters:Shipper:View";
        const updatePermission = "Masters:Shipper:Update";
        const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            Phone = "Phone",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace ShippersService {
        const baseUrl = "Administration/Shippers";
        function Create(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Shippers/Create",
            Update = "Administration/Shippers/Update",
            Delete = "Administration/Shippers/Delete",
            Retrieve = "Administration/Shippers/Retrieve",
            List = "Administration/Shippers/List",
            Undelete = "Administration/Shippers/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class StatesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface StatesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class StatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface StatesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        CountryName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace StatesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.States";
        const lookupKey = "Administration.States";
        function getLookup(): Q.Lookup<StatesRow>;
        const deletePermission = "Masters:State:Delete";
        const insertPermission = "Masters:State:Create";
        const readPermission = "Masters:State:View";
        const updatePermission = "Masters:State:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            CountryName = "CountryName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace StatesService {
        const baseUrl = "Administration/States";
        function Create(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/States/Create",
            Update = "Administration/States/Update",
            Delete = "Administration/States/Delete",
            Retrieve = "Administration/States/Retrieve",
            List = "Administration/States/List",
            Undelete = "Administration/States/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    class TerritoriesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface TerritoriesForm {
        TerritoryDescription: Serenity.StringEditor;
        RegionId: Serenity.LookupEditor;
    }
    class TerritoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface TerritoriesRow {
        Id?: number;
        TerritoryDescription?: string;
        RegionId?: number;
        RegionName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace TerritoriesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "TerritoryDescription";
        const localTextPrefix = "Administration.Territories";
        const lookupKey = "Administration.Territories";
        function getLookup(): Q.Lookup<TerritoriesRow>;
        const deletePermission = "Masters:Territory:Delete";
        const insertPermission = "Masters:Territory:Create";
        const readPermission = "Masters:Territory:View";
        const updatePermission = "Masters:Territory:Update";
        const enum Fields {
            Id = "Id",
            TerritoryDescription = "TerritoryDescription",
            RegionId = "RegionId",
            RegionName = "RegionName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace TerritoriesService {
        const baseUrl = "Administration/Territories";
        function Create(request: Serenity.SaveRequest<TerritoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Territories/Create",
            Update = "Administration/Territories/Update",
            Delete = "Administration/Territories/Delete",
            Retrieve = "Administration/Territories/Retrieve",
            List = "Administration/Territories/List",
            Undelete = "Administration/Territories/Undelete"
        }
    }
}
declare namespace SmartERP.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SmartERP.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SmartERP.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SmartERP.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SmartERP.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SmartERP.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SmartERP.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SmartERP.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SmartERP.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SmartERP.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SmartERP.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SmartERP.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SmartERP.Administration {
    class WarehousesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Administration {
    interface WarehousesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
    }
    class WarehousesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Administration {
    interface WarehousesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Phone?: string;
        Address?: string;
        CountryName?: string;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryDeleteDate?: string;
        CountryDeleteUserId?: number;
        CountryIsActive?: number;
        StateName?: string;
        StateCountryId?: number;
        StateInsertDate?: string;
        StateInsertUserId?: number;
        StateUpdateDate?: string;
        StateUpdateUserId?: number;
        StateDeleteDate?: string;
        StateDeleteUserId?: number;
        StateIsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityDeleteDate?: string;
        CityDeleteUserId?: number;
        CityIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace WarehousesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Warehouses";
        const lookupKey = "Administration.Warehouses";
        function getLookup(): Q.Lookup<WarehousesRow>;
        const deletePermission = "Masters:Warehouse:Delete";
        const insertPermission = "Masters:Warehouse:Create";
        const readPermission = "Masters:Warehouse:View";
        const updatePermission = "Masters:Warehouse:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Phone = "Phone",
            Address = "Address",
            CountryName = "CountryName",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryDeleteDate = "CountryDeleteDate",
            CountryDeleteUserId = "CountryDeleteUserId",
            CountryIsActive = "CountryIsActive",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            StateInsertDate = "StateInsertDate",
            StateInsertUserId = "StateInsertUserId",
            StateUpdateDate = "StateUpdateDate",
            StateUpdateUserId = "StateUpdateUserId",
            StateDeleteDate = "StateDeleteDate",
            StateDeleteUserId = "StateDeleteUserId",
            StateIsActive = "StateIsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            CityInsertDate = "CityInsertDate",
            CityInsertUserId = "CityInsertUserId",
            CityUpdateDate = "CityUpdateDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityDeleteDate = "CityDeleteDate",
            CityDeleteUserId = "CityDeleteUserId",
            CityIsActive = "CityIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Administration {
    namespace WarehousesService {
        const baseUrl = "Administration/Warehouses";
        function Create(request: Serenity.SaveRequest<WarehousesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WarehousesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarehousesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarehousesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Warehouses/Create",
            Update = "Administration/Warehouses/Update",
            Delete = "Administration/Warehouses/Delete",
            Retrieve = "Administration/Warehouses/Retrieve",
            List = "Administration/Warehouses/List",
            Undelete = "Administration/Warehouses/Undelete"
        }
    }
}
declare namespace SmartERP.Banks {
    class BanksColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Banks {
    interface BanksForm {
        BankName: Serenity.StringEditor;
        AcName: Serenity.StringEditor;
        AcNumber: Serenity.StringEditor;
        Branch: Serenity.StringEditor;
        SignaturePicture: Serenity.ImageUploadEditor;
    }
    class BanksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Banks {
    interface BanksRow {
        Id?: number;
        BankName?: string;
        AcName?: string;
        AcNumber?: string;
        Branch?: string;
        SignaturePicture?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace BanksRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "BankName";
        const localTextPrefix = "Banks.Banks";
        const lookupKey = "Banks.Banks";
        function getLookup(): Q.Lookup<BanksRow>;
        const deletePermission = "Masters:Bank:Delete";
        const insertPermission = "Masters:Bank:Create";
        const readPermission = "Masters:Bank:View";
        const updatePermission = "Masters:Bank:Update";
        const enum Fields {
            Id = "Id",
            BankName = "BankName",
            AcName = "AcName",
            AcNumber = "AcNumber",
            Branch = "Branch",
            SignaturePicture = "SignaturePicture",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Banks {
    namespace BanksService {
        const baseUrl = "Banks/Banks";
        function Create(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banks/Banks/Create",
            Update = "Banks/Banks/Update",
            Delete = "Banks/Banks/Delete",
            Retrieve = "Banks/Banks/Retrieve",
            List = "Banks/Banks/List",
            Undelete = "Banks/Banks/Undelete"
        }
    }
}
declare namespace SmartERP {
    enum BloodGroupKind {
        APositive = 1,
        ANegative = 2,
        BPositive = 3,
        BNegative = 4,
        ABPsitive = 5,
        ABNegative = 6,
        OPositive = 7,
        ONegative = 8
    }
}
declare namespace SmartERP.BusinessPartners {
}
declare namespace SmartERP.CashBank {
}
declare namespace SmartERP {
    enum CurrencyPositionKind {
        Left = 1,
        Right = 2
    }
}
declare namespace SmartERP.Customers {
    class CustomersColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Customers {
    interface CustomersForm {
        Name: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        CustomerGroupId: Serenity.LookupEditor;
        Address: Serenity.TextAreaEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmailAddress: Serenity.StringEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Customers {
    interface CustomersRow {
        Id?: number;
        Name?: string;
        ContactName?: string;
        ContactTitle?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        CustomerReceivable?: number;
        CustomerReceived?: number;
        CustomerBalance?: number;
        CustomerGroupId?: number;
        CustomerGroupName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CustomersRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Customers.Customers";
        const lookupKey = "Customers.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Business Partners:Customer:Delete";
        const insertPermission = "Business Partners:Customer:Create";
        const readPermission = "Business Partners:Customer:View";
        const updatePermission = "Business Partners:Customer:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            CustomerReceivable = "CustomerReceivable",
            CustomerReceived = "CustomerReceived",
            CustomerBalance = "CustomerBalance",
            CustomerGroupId = "CustomerGroupId",
            CustomerGroupName = "CustomerGroupName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Customers {
    namespace CustomersService {
        const baseUrl = "Customers/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function HeartBeat(request: Serenity.ServiceRequest, onSuccess?: (response: any) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Customers/Customers/Create",
            Update = "Customers/Customers/Update",
            Delete = "Customers/Customers/Delete",
            HeartBeat = "Customers/Customers/HeartBeat",
            Retrieve = "Customers/Customers/Retrieve",
            List = "Customers/Customers/List",
            Undelete = "Customers/Customers/Undelete"
        }
    }
}
declare namespace SmartERP.Expenses {
    class ExpenseTypesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Expenses {
    interface ExpenseTypesForm {
        Type: Serenity.StringEditor;
    }
    class ExpenseTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Expenses {
    interface ExpenseTypesRow {
        Id?: number;
        Type?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ExpenseTypesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Type";
        const localTextPrefix = "Expenses.ExpenseTypes";
        const lookupKey = "Expenses.ExpenseTypes";
        function getLookup(): Q.Lookup<ExpenseTypesRow>;
        const deletePermission = "Masters:Expense Type:Delete";
        const insertPermission = "Masters:Expense Type:Create";
        const readPermission = "Masters:Expense Type:View";
        const updatePermission = "Masters:Expense Type:Update";
        const enum Fields {
            Id = "Id",
            Type = "Type",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Expenses {
    namespace ExpenseTypesService {
        const baseUrl = "Expenses/ExpenseTypes";
        function Create(request: Serenity.SaveRequest<ExpenseTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpenseTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpenseTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpenseTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/ExpenseTypes/Create",
            Update = "Expenses/ExpenseTypes/Update",
            Delete = "Expenses/ExpenseTypes/Delete",
            Retrieve = "Expenses/ExpenseTypes/Retrieve",
            List = "Expenses/ExpenseTypes/List",
            Undelete = "Expenses/ExpenseTypes/Undelete"
        }
    }
}
declare namespace SmartERP.Expenses {
    class ExpensesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Expenses {
    interface ExpensesForm {
        ExpenseTypeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }
    class ExpensesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Expenses {
    interface ExpensesRow {
        Id?: number;
        ExpenseTypeId?: number;
        VNo?: number;
        Date?: string;
        PaymentAccount?: number;
        Amount?: number;
        ExpenseTypeType?: string;
        HeadCodeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ExpensesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Expenses.Expenses";
        const lookupKey = "Expenses.Expenses";
        function getLookup(): Q.Lookup<ExpensesRow>;
        const deletePermission = "Cash/Bank:Expense:Delete";
        const insertPermission = "Cash/Bank:Expense:Create";
        const readPermission = "Cash/Bank:Expense:View";
        const updatePermission = "Cash/Bank:Expense:Update";
        const enum Fields {
            Id = "Id",
            ExpenseTypeId = "ExpenseTypeId",
            VNo = "VNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Amount = "Amount",
            ExpenseTypeType = "ExpenseTypeType",
            HeadCodeName = "HeadCodeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Expenses {
    namespace ExpensesService {
        const baseUrl = "Expenses/Expenses";
        function Create(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/Expenses/Create",
            Update = "Expenses/Expenses/Update",
            Delete = "Expenses/Expenses/Delete",
            Retrieve = "Expenses/Expenses/Retrieve",
            List = "Expenses/Expenses/List",
            Undelete = "Expenses/Expenses/Undelete"
        }
    }
}
declare namespace SmartERP.Expenses {
}
declare namespace SmartERP.Financial {
}
declare namespace SmartERP.HumanResource {
    class AttendanceColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.HumanResource {
    interface AttendanceForm {
        EmployeeId: Serenity.LookupEditor;
        CheckIn: Serenity.DateTimeEditor;
        CheckOut: Serenity.DateTimeEditor;
    }
    class AttendanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.HumanResource {
    interface AttendanceRow {
        Id?: number;
        EmployeeId?: number;
        CheckIn?: string;
        CheckOut?: string;
        StayTime?: string;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmployeeDesignationId?: number;
        EmployeeDepartmentId?: number;
        EmployeeRateType?: number;
        EmployeePhone?: string;
        EmployeeHoureRateSalary?: number;
        EmployeeEmail?: string;
        EmployeeBloodGroup?: string;
        EmployeePicture?: string;
        EmployeeCountryId?: number;
        EmployeeStateId?: number;
        EmployeeCityId?: number;
        EmployeeZipCode?: string;
        EmployeeAddress?: string;
        EmployeeUserId?: number;
        EmployeeRegionId?: number;
        EmployeeTerritoryId?: number;
        EmployeeCnic?: string;
        EmployeeInsertDate?: string;
        EmployeeInsertUserId?: number;
        EmployeeUpdateDate?: string;
        EmployeeUpdateUserId?: number;
        EmployeeDeleteDate?: string;
        EmployeeDeleteUserId?: number;
        EmployeeIsActive?: number;
        EmployeeFullName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AttendanceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "HumanResource.Attendance";
        const lookupKey = "HumanResource.Attendance";
        function getLookup(): Q.Lookup<AttendanceRow>;
        const deletePermission = "Human Resource:Attendance:Delete";
        const insertPermission = "Human Resource:Attendance:Create";
        const readPermission = "Human Resource:Attendance:View";
        const updatePermission = "Human Resource:Attendance:Update";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            CheckIn = "CheckIn",
            CheckOut = "CheckOut",
            StayTime = "StayTime",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeLastName = "EmployeeLastName",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeDepartmentId = "EmployeeDepartmentId",
            EmployeeRateType = "EmployeeRateType",
            EmployeePhone = "EmployeePhone",
            EmployeeHoureRateSalary = "EmployeeHoureRateSalary",
            EmployeeEmail = "EmployeeEmail",
            EmployeeBloodGroup = "EmployeeBloodGroup",
            EmployeePicture = "EmployeePicture",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeStateId = "EmployeeStateId",
            EmployeeCityId = "EmployeeCityId",
            EmployeeZipCode = "EmployeeZipCode",
            EmployeeAddress = "EmployeeAddress",
            EmployeeUserId = "EmployeeUserId",
            EmployeeRegionId = "EmployeeRegionId",
            EmployeeTerritoryId = "EmployeeTerritoryId",
            EmployeeCnic = "EmployeeCnic",
            EmployeeInsertDate = "EmployeeInsertDate",
            EmployeeInsertUserId = "EmployeeInsertUserId",
            EmployeeUpdateDate = "EmployeeUpdateDate",
            EmployeeUpdateUserId = "EmployeeUpdateUserId",
            EmployeeDeleteDate = "EmployeeDeleteDate",
            EmployeeDeleteUserId = "EmployeeDeleteUserId",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeFullName = "EmployeeFullName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.HumanResource {
    namespace AttendanceService {
        const baseUrl = "HumanResource/Attendance";
        function Create(request: Serenity.SaveRequest<AttendanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Attendance/Create",
            Update = "HumanResource/Attendance/Update",
            Delete = "HumanResource/Attendance/Delete",
            Retrieve = "HumanResource/Attendance/Retrieve",
            List = "HumanResource/Attendance/List",
            Undelete = "HumanResource/Attendance/Undelete"
        }
    }
}
declare namespace SmartERP.HumanResource {
    class DepartmentsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.HumanResource {
    interface DepartmentsForm {
        Department: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDepartmentId: DepartmentsEditor;
    }
    class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.HumanResource {
    interface DepartmentsRow {
        Id?: number;
        Department?: string;
        Description?: string;
        ParentDepartmentId?: number;
        ParentDepartmentDepartment?: string;
        ParentDepartmentDescription?: string;
        ParentDepartmentParentDepartmentId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace DepartmentsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Department";
        const localTextPrefix = "HumanResource.Departments";
        const lookupKey = "HumanResource.Departments";
        function getLookup(): Q.Lookup<DepartmentsRow>;
        const deletePermission = "Human Resource:Department:Delete";
        const insertPermission = "Human Resource:Department:Create";
        const readPermission = "Human Resource:Department:View";
        const updatePermission = "Human Resource:Department:Update";
        const enum Fields {
            Id = "Id",
            Department = "Department",
            Description = "Description",
            ParentDepartmentId = "ParentDepartmentId",
            ParentDepartmentDepartment = "ParentDepartmentDepartment",
            ParentDepartmentDescription = "ParentDepartmentDescription",
            ParentDepartmentParentDepartmentId = "ParentDepartmentParentDepartmentId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.HumanResource {
    namespace DepartmentsService {
        const baseUrl = "HumanResource/Departments";
        function Create(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Departments/Create",
            Update = "HumanResource/Departments/Update",
            Delete = "HumanResource/Departments/Delete",
            Retrieve = "HumanResource/Departments/Retrieve",
            List = "HumanResource/Departments/List",
            Undelete = "HumanResource/Departments/Undelete"
        }
    }
}
declare namespace SmartERP.HumanResource {
    class DesignationsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.HumanResource {
    interface DesignationsForm {
        Designation: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDesignationId: DesignationsEditor;
    }
    class DesignationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.HumanResource {
    interface DesignationsRow {
        Id?: number;
        Designation?: string;
        Description?: string;
        ParentDesignationId?: number;
        ParentDesignationDesignation?: string;
        ParentDesignationDescription?: string;
        ParentDesignationParentDesignationId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace DesignationsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Designation";
        const localTextPrefix = "HumanResource.Designations";
        const lookupKey = "HumanResource.Designations";
        function getLookup(): Q.Lookup<DesignationsRow>;
        const deletePermission = "Human Resource:Designation:Delete";
        const insertPermission = "Human Resource:Designation:Create";
        const readPermission = "Human Resource:Designation:View";
        const updatePermission = "Human Resource:Designation:Update";
        const enum Fields {
            Id = "Id",
            Designation = "Designation",
            Description = "Description",
            ParentDesignationId = "ParentDesignationId",
            ParentDesignationDesignation = "ParentDesignationDesignation",
            ParentDesignationDescription = "ParentDesignationDescription",
            ParentDesignationParentDesignationId = "ParentDesignationParentDesignationId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.HumanResource {
    namespace DesignationsService {
        const baseUrl = "HumanResource/Designations";
        function Create(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Designations/Create",
            Update = "HumanResource/Designations/Update",
            Delete = "HumanResource/Designations/Delete",
            Retrieve = "HumanResource/Designations/Retrieve",
            List = "HumanResource/Designations/List",
            Undelete = "HumanResource/Designations/Undelete"
        }
    }
}
declare namespace SmartERP.HumanResource {
    class EmployeesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.HumanResource {
    interface EmployeesForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        DesignationId: DesignationsEditor;
        DepartmentId: DepartmentsEditor;
        RateType: Serenity.EnumEditor;
        Phone: Serenity.StringEditor;
        HoureRateSalary: Serenity.DecimalEditor;
        Email: Serenity.StringEditor;
        BloodGroup: Serenity.EnumEditor;
        Picture: Serenity.ImageUploadEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        UserId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        TerritoryId: Serenity.LookupEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.HumanResource {
    interface EmployeesRow {
        Id?: number;
        FirstName?: string;
        LastName?: string;
        EmployeeFullName?: string;
        DesignationId?: number;
        DepartmentId?: number;
        RateType?: RateKind;
        Phone?: string;
        HoureRateSalary?: number;
        Email?: string;
        BloodGroup?: BloodGroupKind;
        Picture?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ZipCode?: string;
        Address?: string;
        UserId?: number;
        RegionId?: number;
        TerritoryId?: number;
        Designation?: string;
        DesignationDescription?: string;
        DesignationParentDesignationId?: number;
        Department?: string;
        DepartmentDescription?: string;
        DepartmentParentDepartmentId?: number;
        CountryName?: string;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryDeleteDate?: string;
        CountryDeleteUserId?: number;
        CountryIsActive?: number;
        StateName?: string;
        StateCountryId?: number;
        StateInsertDate?: string;
        StateInsertUserId?: number;
        StateUpdateDate?: string;
        StateUpdateUserId?: number;
        StateDeleteDate?: string;
        StateDeleteUserId?: number;
        StateIsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityDeleteDate?: string;
        CityDeleteUserId?: number;
        CityIsActive?: number;
        RegionName?: string;
        RegionInsertDate?: string;
        RegionInsertUserId?: number;
        RegionUpdateDate?: string;
        RegionUpdateUserId?: number;
        RegionDeleteDate?: string;
        RegionDeleteUserId?: number;
        RegionIsActive?: number;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionId?: number;
        TerritoryInsertDate?: string;
        TerritoryInsertUserId?: number;
        TerritoryUpdateDate?: string;
        TerritoryUpdateUserId?: number;
        TerritoryDeleteDate?: string;
        TerritoryDeleteUserId?: number;
        TerritoryIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace EmployeesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "EmployeeFullName";
        const localTextPrefix = "HumanResource.Employees";
        const lookupKey = "HumanResource.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        const deletePermission = "Human Resource:Employee:Delete";
        const insertPermission = "Human Resource:Employee:Create";
        const readPermission = "Human Resource:Employee:View";
        const updatePermission = "Human Resource:Employee:Update";
        const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            EmployeeFullName = "EmployeeFullName",
            DesignationId = "DesignationId",
            DepartmentId = "DepartmentId",
            RateType = "RateType",
            Phone = "Phone",
            HoureRateSalary = "HoureRateSalary",
            Email = "Email",
            BloodGroup = "BloodGroup",
            Picture = "Picture",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ZipCode = "ZipCode",
            Address = "Address",
            UserId = "UserId",
            RegionId = "RegionId",
            TerritoryId = "TerritoryId",
            Designation = "Designation",
            DesignationDescription = "DesignationDescription",
            DesignationParentDesignationId = "DesignationParentDesignationId",
            Department = "Department",
            DepartmentDescription = "DepartmentDescription",
            DepartmentParentDepartmentId = "DepartmentParentDepartmentId",
            CountryName = "CountryName",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryDeleteDate = "CountryDeleteDate",
            CountryDeleteUserId = "CountryDeleteUserId",
            CountryIsActive = "CountryIsActive",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            StateInsertDate = "StateInsertDate",
            StateInsertUserId = "StateInsertUserId",
            StateUpdateDate = "StateUpdateDate",
            StateUpdateUserId = "StateUpdateUserId",
            StateDeleteDate = "StateDeleteDate",
            StateDeleteUserId = "StateDeleteUserId",
            StateIsActive = "StateIsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            CityInsertDate = "CityInsertDate",
            CityInsertUserId = "CityInsertUserId",
            CityUpdateDate = "CityUpdateDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityDeleteDate = "CityDeleteDate",
            CityDeleteUserId = "CityDeleteUserId",
            CityIsActive = "CityIsActive",
            RegionName = "RegionName",
            RegionInsertDate = "RegionInsertDate",
            RegionInsertUserId = "RegionInsertUserId",
            RegionUpdateDate = "RegionUpdateDate",
            RegionUpdateUserId = "RegionUpdateUserId",
            RegionDeleteDate = "RegionDeleteDate",
            RegionDeleteUserId = "RegionDeleteUserId",
            RegionIsActive = "RegionIsActive",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionId = "TerritoryRegionId",
            TerritoryInsertDate = "TerritoryInsertDate",
            TerritoryInsertUserId = "TerritoryInsertUserId",
            TerritoryUpdateDate = "TerritoryUpdateDate",
            TerritoryUpdateUserId = "TerritoryUpdateUserId",
            TerritoryDeleteDate = "TerritoryDeleteDate",
            TerritoryDeleteUserId = "TerritoryDeleteUserId",
            TerritoryIsActive = "TerritoryIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.HumanResource {
    namespace EmployeesService {
        const baseUrl = "HumanResource/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Employees/Create",
            Update = "HumanResource/Employees/Update",
            Delete = "HumanResource/Employees/Delete",
            Retrieve = "HumanResource/Employees/Retrieve",
            List = "HumanResource/Employees/List",
            Undelete = "HumanResource/Employees/Undelete"
        }
    }
}
declare namespace SmartERP.HumanResource {
}
declare namespace SmartERP.Inventory {
    class DamagedProductsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Inventory {
    interface DamagedProductsForm {
        CategoryId: Products.CategoriesEditor;
        ProductId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }
    class DamagedProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Inventory {
    interface DamagedProductsRow {
        Id?: number;
        Code?: string;
        Name?: string;
        CategoryId?: number;
        PurchasePrice?: number;
        Quantity?: number;
        Date?: string;
        Note?: string;
        ProductId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
        CategoryInsertDate?: string;
        CategoryInsertUserId?: number;
        CategoryUpdateDate?: string;
        CategoryUpdateUserId?: number;
        CategoryDeleteDate?: string;
        CategoryDeleteUserId?: number;
        CategoryIsActive?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace DamagedProductsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Code";
        const localTextPrefix = "Inventory.DamagedProducts";
        const lookupKey = "Inventory.DamagedProducts";
        function getLookup(): Q.Lookup<DamagedProductsRow>;
        const deletePermission = "Inventory:Damaged Product:Delete";
        const insertPermission = "Inventory:Damaged Product:Create";
        const readPermission = "Inventory:Damaged Product:View";
        const updatePermission = "Inventory:Damaged Product:Update";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            CategoryId = "CategoryId",
            PurchasePrice = "PurchasePrice",
            Quantity = "Quantity",
            Date = "Date",
            Note = "Note",
            ProductId = "ProductId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
            CategoryInsertDate = "CategoryInsertDate",
            CategoryInsertUserId = "CategoryInsertUserId",
            CategoryUpdateDate = "CategoryUpdateDate",
            CategoryUpdateUserId = "CategoryUpdateUserId",
            CategoryDeleteDate = "CategoryDeleteDate",
            CategoryDeleteUserId = "CategoryDeleteUserId",
            CategoryIsActive = "CategoryIsActive",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Inventory {
    namespace DamagedProductsService {
        const baseUrl = "Inventory/DamagedProducts";
        function Create(request: Serenity.SaveRequest<DamagedProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DamagedProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DamagedProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DamagedProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/DamagedProducts/Create",
            Update = "Inventory/DamagedProducts/Update",
            Delete = "Inventory/DamagedProducts/Delete",
            Retrieve = "Inventory/DamagedProducts/Retrieve",
            List = "Inventory/DamagedProducts/List",
            Undelete = "Inventory/DamagedProducts/Undelete"
        }
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsIssueDetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }
    class GoodsIssueDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsIssueDetailsRow {
        Id?: number;
        GoodsIssueId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        WarehouseWarehouseName?: string;
        GoodsIssueCustomerId?: number;
        GoodsIssueSaleId?: number;
        GoodsIssueDate?: string;
        GoodsIssueTotalQuantity?: number;
        GoodsIssueEmployeenId?: number;
        GoodsIssueRemarks?: string;
        GoodsIssueJournalRemarks?: string;
        GoodsIssueReference?: string;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace GoodsIssueDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Inventory.GoodsIssueDetails";
        const deletePermission = "Inventory:Goods Issue:Delete";
        const insertPermission = "Inventory:Goods Issue:Create";
        const readPermission = "Inventory:Goods Issue:View";
        const updatePermission = "Inventory:Goods Issue:Update";
        const enum Fields {
            Id = "Id",
            GoodsIssueId = "GoodsIssueId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            WarehouseWarehouseName = "WarehouseWarehouseName",
            GoodsIssueCustomerId = "GoodsIssueCustomerId",
            GoodsIssueSaleId = "GoodsIssueSaleId",
            GoodsIssueDate = "GoodsIssueDate",
            GoodsIssueTotalQuantity = "GoodsIssueTotalQuantity",
            GoodsIssueEmployeenId = "GoodsIssueEmployeenId",
            GoodsIssueRemarks = "GoodsIssueRemarks",
            GoodsIssueJournalRemarks = "GoodsIssueJournalRemarks",
            GoodsIssueReference = "GoodsIssueReference",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Inventory {
    namespace GoodsIssueDetailsService {
        const baseUrl = "Inventory/GoodsIssueDetails";
        function Create(request: Serenity.SaveRequest<GoodsIssueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsIssueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsIssueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsIssueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/GoodsIssueDetails/Create",
            Update = "Inventory/GoodsIssueDetails/Update",
            Delete = "Inventory/GoodsIssueDetails/Delete",
            Retrieve = "Inventory/GoodsIssueDetails/Retrieve",
            List = "Inventory/GoodsIssueDetails/List",
            Undelete = "Inventory/GoodsIssueDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsIssueForm {
        SaleId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        LineItems: GoodsIssueDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }
    class GoodsIssueForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsIssueRow {
        Id?: number;
        CustomerId?: number;
        SaleId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        LineItems?: GoodsIssueDetailsRow[];
        SaleInvoice?: string;
        EmployeeFullName?: string;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        SaleCustomerId?: number;
        SaleDate?: string;
        SaleDiscount?: number;
        SaleTotalDiscount?: number;
        SaleVat?: number;
        SaleTotalTax?: number;
        SaleShippingCost?: number;
        SaleGrandTotal?: number;
        SaleNetTotal?: number;
        SalePaidAmount?: number;
        SaleDue?: number;
        SaleChange?: number;
        SaleDetails?: string;
        SalePaymentAccount?: number;
        SaleVNo?: number;
        EmployeenFirstName?: string;
        EmployeenLastName?: string;
        EmployeenDesignationId?: number;
        EmployeenDepartmentId?: number;
        EmployeenRateType?: number;
        EmployeenPhone?: string;
        EmployeenHoureRateSalary?: number;
        EmployeenEmail?: string;
        EmployeenBloodGroup?: number;
        EmployeenPicture?: string;
        EmployeenCountryId?: number;
        EmployeenStateId?: number;
        EmployeenCityId?: number;
        EmployeenZipCode?: string;
        EmployeenAddress?: string;
        EmployeenUserId?: number;
        EmployeenRegionId?: number;
        EmployeenTerritoryId?: number;
        EmployeenCnic?: string;
        EmployeenInsertDate?: string;
        EmployeenInsertUserId?: number;
        EmployeenUpdateDate?: string;
        EmployeenUpdateUserId?: number;
        EmployeenDeleteDate?: string;
        EmployeenDeleteUserId?: number;
        EmployeenIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace GoodsIssueRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Date";
        const localTextPrefix = "Inventory.GoodsIssue";
        const deletePermission = "Inventory:Goods Issue:Delete";
        const insertPermission = "Inventory:Goods Issue:Create";
        const readPermission = "Inventory:Goods Issue:View";
        const updatePermission = "Inventory:Goods Issue:Update";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            SaleId = "SaleId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            LineItems = "LineItems",
            SaleInvoice = "SaleInvoice",
            EmployeeFullName = "EmployeeFullName",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
            SaleDiscount = "SaleDiscount",
            SaleTotalDiscount = "SaleTotalDiscount",
            SaleVat = "SaleVat",
            SaleTotalTax = "SaleTotalTax",
            SaleShippingCost = "SaleShippingCost",
            SaleGrandTotal = "SaleGrandTotal",
            SaleNetTotal = "SaleNetTotal",
            SalePaidAmount = "SalePaidAmount",
            SaleDue = "SaleDue",
            SaleChange = "SaleChange",
            SaleDetails = "SaleDetails",
            SalePaymentAccount = "SalePaymentAccount",
            SaleVNo = "SaleVNo",
            EmployeenFirstName = "EmployeenFirstName",
            EmployeenLastName = "EmployeenLastName",
            EmployeenDesignationId = "EmployeenDesignationId",
            EmployeenDepartmentId = "EmployeenDepartmentId",
            EmployeenRateType = "EmployeenRateType",
            EmployeenPhone = "EmployeenPhone",
            EmployeenHoureRateSalary = "EmployeenHoureRateSalary",
            EmployeenEmail = "EmployeenEmail",
            EmployeenBloodGroup = "EmployeenBloodGroup",
            EmployeenPicture = "EmployeenPicture",
            EmployeenCountryId = "EmployeenCountryId",
            EmployeenStateId = "EmployeenStateId",
            EmployeenCityId = "EmployeenCityId",
            EmployeenZipCode = "EmployeenZipCode",
            EmployeenAddress = "EmployeenAddress",
            EmployeenUserId = "EmployeenUserId",
            EmployeenRegionId = "EmployeenRegionId",
            EmployeenTerritoryId = "EmployeenTerritoryId",
            EmployeenCnic = "EmployeenCnic",
            EmployeenInsertDate = "EmployeenInsertDate",
            EmployeenInsertUserId = "EmployeenInsertUserId",
            EmployeenUpdateDate = "EmployeenUpdateDate",
            EmployeenUpdateUserId = "EmployeenUpdateUserId",
            EmployeenDeleteDate = "EmployeenDeleteDate",
            EmployeenDeleteUserId = "EmployeenDeleteUserId",
            EmployeenIsActive = "EmployeenIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Inventory {
    namespace GoodsIssueService {
        const baseUrl = "Inventory/GoodsIssue";
        function Create(request: Serenity.SaveRequest<GoodsIssueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsIssueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsIssueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsIssueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/GoodsIssue/Create",
            Update = "Inventory/GoodsIssue/Update",
            Delete = "Inventory/GoodsIssue/Delete",
            Retrieve = "Inventory/GoodsIssue/Retrieve",
            List = "Inventory/GoodsIssue/List",
            Undelete = "Inventory/GoodsIssue/Undelete"
        }
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsReceiptDetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }
    class GoodsReceiptDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsReceiptDetailsRow {
        Id?: number;
        GoodsReceiptId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        WarehouseWarehouseName?: string;
        GoodsReceiptSupplierId?: number;
        GoodsReceiptPurchaseId?: number;
        GoodsReceiptDate?: string;
        GoodsReceiptTotalQuantity?: number;
        GoodsReceiptEmployeenId?: number;
        GoodsReceiptRemarks?: string;
        GoodsReceiptJournalRemarks?: string;
        GoodsReceiptReference?: string;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace GoodsReceiptDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Inventory.GoodsReceiptDetails";
        const deletePermission = "Inventory:Goods Receipt:Delete";
        const insertPermission = "Inventory:Goods Receipt:Create";
        const readPermission = "Inventory:Goods Receipt:View";
        const updatePermission = "Inventory:Goods Receipt:Update";
        const enum Fields {
            Id = "Id",
            GoodsReceiptId = "GoodsReceiptId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            WarehouseWarehouseName = "WarehouseWarehouseName",
            GoodsReceiptSupplierId = "GoodsReceiptSupplierId",
            GoodsReceiptPurchaseId = "GoodsReceiptPurchaseId",
            GoodsReceiptDate = "GoodsReceiptDate",
            GoodsReceiptTotalQuantity = "GoodsReceiptTotalQuantity",
            GoodsReceiptEmployeenId = "GoodsReceiptEmployeenId",
            GoodsReceiptRemarks = "GoodsReceiptRemarks",
            GoodsReceiptJournalRemarks = "GoodsReceiptJournalRemarks",
            GoodsReceiptReference = "GoodsReceiptReference",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Inventory {
    namespace GoodsReceiptDetailsService {
        const baseUrl = "Inventory/GoodsReceiptDetails";
        function Create(request: Serenity.SaveRequest<GoodsReceiptDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsReceiptDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsReceiptDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsReceiptDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/GoodsReceiptDetails/Create",
            Update = "Inventory/GoodsReceiptDetails/Update",
            Delete = "Inventory/GoodsReceiptDetails/Delete",
            Retrieve = "Inventory/GoodsReceiptDetails/Retrieve",
            List = "Inventory/GoodsReceiptDetails/List",
            Undelete = "Inventory/GoodsReceiptDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsReceiptForm {
        PurchaseId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        LineItems: GoodsReceiptDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }
    class GoodsReceiptForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Inventory {
    interface GoodsReceiptRow {
        Id?: number;
        SupplierId?: number;
        PurchaseId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        LineItems?: GoodsReceiptDetailsRow[];
        PurchaseBill?: string;
        EmployeeFullName?: string;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierInsertDate?: string;
        SupplierInsertUserId?: number;
        SupplierUpdateDate?: string;
        SupplierUpdateUserId?: number;
        SupplierDeleteDate?: string;
        SupplierDeleteUserId?: number;
        SupplierIsActive?: number;
        PurchaseSupplierId?: number;
        PurchaseInvoiceNo?: string;
        PurchaseDate?: string;
        PurchaseDiscount?: number;
        PurchaseTotalDiscount?: number;
        PurchaseShippingCost?: number;
        PurchaseGrandTotal?: number;
        PurchaseNetTotal?: number;
        PurchasePaidAmount?: number;
        PurchaseDue?: number;
        PurchaseChange?: number;
        PurchaseDetails?: string;
        PurchasePaymentAccount?: number;
        PurchaseEmployeeId?: number;
        PurchaseVNo?: number;
        EmployeenFirstName?: string;
        EmployeenLastName?: string;
        EmployeenDesignationId?: number;
        EmployeenDepartmentId?: number;
        EmployeenRateType?: number;
        EmployeenPhone?: string;
        EmployeenHoureRateSalary?: number;
        EmployeenEmail?: string;
        EmployeenBloodGroup?: number;
        EmployeenPicture?: string;
        EmployeenCountryId?: number;
        EmployeenStateId?: number;
        EmployeenCityId?: number;
        EmployeenZipCode?: string;
        EmployeenAddress?: string;
        EmployeenUserId?: number;
        EmployeenRegionId?: number;
        EmployeenTerritoryId?: number;
        EmployeenCnic?: string;
        EmployeenInsertDate?: string;
        EmployeenInsertUserId?: number;
        EmployeenUpdateDate?: string;
        EmployeenUpdateUserId?: number;
        EmployeenDeleteDate?: string;
        EmployeenDeleteUserId?: number;
        EmployeenIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace GoodsReceiptRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Date";
        const localTextPrefix = "Inventory.GoodsReceipt";
        const deletePermission = "Inventory:Goods Receipt:Delete";
        const insertPermission = "Inventory:Goods Receipt:Create";
        const readPermission = "Inventory:Goods Receipt:View";
        const updatePermission = "Inventory:Goods Receipt:Update";
        const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            PurchaseId = "PurchaseId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            LineItems = "LineItems",
            PurchaseBill = "PurchaseBill",
            EmployeeFullName = "EmployeeFullName",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierInsertDate = "SupplierInsertDate",
            SupplierInsertUserId = "SupplierInsertUserId",
            SupplierUpdateDate = "SupplierUpdateDate",
            SupplierUpdateUserId = "SupplierUpdateUserId",
            SupplierDeleteDate = "SupplierDeleteDate",
            SupplierDeleteUserId = "SupplierDeleteUserId",
            SupplierIsActive = "SupplierIsActive",
            PurchaseSupplierId = "PurchaseSupplierId",
            PurchaseInvoiceNo = "PurchaseInvoiceNo",
            PurchaseDate = "PurchaseDate",
            PurchaseDiscount = "PurchaseDiscount",
            PurchaseTotalDiscount = "PurchaseTotalDiscount",
            PurchaseShippingCost = "PurchaseShippingCost",
            PurchaseGrandTotal = "PurchaseGrandTotal",
            PurchaseNetTotal = "PurchaseNetTotal",
            PurchasePaidAmount = "PurchasePaidAmount",
            PurchaseDue = "PurchaseDue",
            PurchaseChange = "PurchaseChange",
            PurchaseDetails = "PurchaseDetails",
            PurchasePaymentAccount = "PurchasePaymentAccount",
            PurchaseEmployeeId = "PurchaseEmployeeId",
            PurchaseVNo = "PurchaseVNo",
            EmployeenFirstName = "EmployeenFirstName",
            EmployeenLastName = "EmployeenLastName",
            EmployeenDesignationId = "EmployeenDesignationId",
            EmployeenDepartmentId = "EmployeenDepartmentId",
            EmployeenRateType = "EmployeenRateType",
            EmployeenPhone = "EmployeenPhone",
            EmployeenHoureRateSalary = "EmployeenHoureRateSalary",
            EmployeenEmail = "EmployeenEmail",
            EmployeenBloodGroup = "EmployeenBloodGroup",
            EmployeenPicture = "EmployeenPicture",
            EmployeenCountryId = "EmployeenCountryId",
            EmployeenStateId = "EmployeenStateId",
            EmployeenCityId = "EmployeenCityId",
            EmployeenZipCode = "EmployeenZipCode",
            EmployeenAddress = "EmployeenAddress",
            EmployeenUserId = "EmployeenUserId",
            EmployeenRegionId = "EmployeenRegionId",
            EmployeenTerritoryId = "EmployeenTerritoryId",
            EmployeenCnic = "EmployeenCnic",
            EmployeenInsertDate = "EmployeenInsertDate",
            EmployeenInsertUserId = "EmployeenInsertUserId",
            EmployeenUpdateDate = "EmployeenUpdateDate",
            EmployeenUpdateUserId = "EmployeenUpdateUserId",
            EmployeenDeleteDate = "EmployeenDeleteDate",
            EmployeenDeleteUserId = "EmployeenDeleteUserId",
            EmployeenIsActive = "EmployeenIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Inventory {
    namespace GoodsReceiptService {
        const baseUrl = "Inventory/GoodsReceipt";
        function Create(request: Serenity.SaveRequest<GoodsReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/GoodsReceipt/Create",
            Update = "Inventory/GoodsReceipt/Update",
            Delete = "Inventory/GoodsReceipt/Delete",
            Retrieve = "Inventory/GoodsReceipt/Retrieve",
            List = "Inventory/GoodsReceipt/List",
            Undelete = "Inventory/GoodsReceipt/Undelete"
        }
    }
}
declare namespace SmartERP.Inventory {
}
declare namespace SmartERP.Masters {
    class AgendaItemTypesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface AgendaItemTypesForm {
        Name: Serenity.StringEditor;
    }
    class AgendaItemTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface AgendaItemTypesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AgendaItemTypesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.AgendaItemTypes";
        const lookupKey = "Masters.AgendaItemTypes";
        function getLookup(): Q.Lookup<AgendaItemTypesRow>;
        const deletePermission = "Masters:Agenda Item Types:Delete";
        const insertPermission = "Masters:Agenda Item Types:Create";
        const readPermission = "Masters:Agenda Item Types:View";
        const updatePermission = "Masters:Agenda Item Types:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace AgendaItemTypesService {
        const baseUrl = "Masters/AgendaItemTypes";
        function Create(request: Serenity.SaveRequest<AgendaItemTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendaItemTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendaItemTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendaItemTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/AgendaItemTypes/Create",
            Update = "Masters/AgendaItemTypes/Update",
            Delete = "Masters/AgendaItemTypes/Delete",
            Retrieve = "Masters/AgendaItemTypes/Retrieve",
            List = "Masters/AgendaItemTypes/List",
            Undelete = "Masters/AgendaItemTypes/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class AttendanceStatusesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface AttendanceStatusesForm {
        Name: Serenity.StringEditor;
    }
    class AttendanceStatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface AttendanceStatusesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AttendanceStatusesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.AttendanceStatuses";
        const lookupKey = "Masters.AttendanceStatuses";
        function getLookup(): Q.Lookup<AttendanceStatusesRow>;
        const deletePermission = "Masters:Attendance Statuses:Delete";
        const insertPermission = "Masters:Attendance Statuses:Create";
        const readPermission = "Masters:Attendance Statusess:View";
        const updatePermission = "Masters:Attendance Statuses:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace AttendanceStatusesService {
        const baseUrl = "Masters/AttendanceStatuses";
        function Create(request: Serenity.SaveRequest<AttendanceStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendanceStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendanceStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendanceStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/AttendanceStatuses/Create",
            Update = "Masters/AttendanceStatuses/Update",
            Delete = "Masters/AttendanceStatuses/Delete",
            Retrieve = "Masters/AttendanceStatuses/Retrieve",
            List = "Masters/AttendanceStatuses/List",
            Undelete = "Masters/AttendanceStatuses/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class AttendeeTypesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface AttendeeTypesForm {
        Name: Serenity.StringEditor;
    }
    class AttendeeTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface AttendeeTypesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AttendeeTypesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.AttendeeTypes";
        const lookupKey = "Masters.AttendeeTypes";
        function getLookup(): Q.Lookup<AttendeeTypesRow>;
        const deletePermission = "Masters:Attendee Types:Delete";
        const insertPermission = "Masters:Attendee Types:Create";
        const readPermission = "Masters:Attendee Types:View";
        const updatePermission = "Masters:Attendee Types:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace AttendeeTypesService {
        const baseUrl = "Masters/AttendeeTypes";
        function Create(request: Serenity.SaveRequest<AttendeeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendeeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendeeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendeeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/AttendeeTypes/Create",
            Update = "Masters/AttendeeTypes/Update",
            Delete = "Masters/AttendeeTypes/Delete",
            Retrieve = "Masters/AttendeeTypes/Retrieve",
            List = "Masters/AttendeeTypes/List",
            Undelete = "Masters/AttendeeTypes/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class CustomerGroupsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface CustomerGroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CustomerGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface CustomerGroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CustomerGroupsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.CustomerGroups";
        const lookupKey = "Masters.CustomerGroups";
        function getLookup(): Q.Lookup<CustomerGroupsRow>;
        const deletePermission = "Masters:Customer Groups:Delete";
        const insertPermission = "Masters:Customer Groups:Create";
        const readPermission = "Masters:Customer Groups:View";
        const updatePermission = "Masters:Customer Groups:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace CustomerGroupsService {
        const baseUrl = "Masters/CustomerGroups";
        function Create(request: Serenity.SaveRequest<CustomerGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/CustomerGroups/Create",
            Update = "Masters/CustomerGroups/Update",
            Delete = "Masters/CustomerGroups/Delete",
            Retrieve = "Masters/CustomerGroups/Retrieve",
            List = "Masters/CustomerGroups/List",
            Undelete = "Masters/CustomerGroups/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class LocationsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface LocationsForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }
    class LocationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface LocationsRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        Latitude?: string;
        Longitude?: string;
        CountryName?: string;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryDeleteDate?: string;
        CountryDeleteUserId?: number;
        CountryIsActive?: number;
        StateName?: string;
        StateCountryId?: number;
        StateInsertDate?: string;
        StateInsertUserId?: number;
        StateUpdateDate?: string;
        StateUpdateUserId?: number;
        StateDeleteDate?: string;
        StateDeleteUserId?: number;
        StateIsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityDeleteDate?: string;
        CityDeleteUserId?: number;
        CityIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace LocationsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Locations";
        const lookupKey = "Masters.Locations";
        function getLookup(): Q.Lookup<LocationsRow>;
        const deletePermission = "Masters:Locations:Delete";
        const insertPermission = "Masters:Locations:Create";
        const readPermission = "Masters:Locations:View";
        const updatePermission = "Masters:Locations:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude",
            CountryName = "CountryName",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryDeleteDate = "CountryDeleteDate",
            CountryDeleteUserId = "CountryDeleteUserId",
            CountryIsActive = "CountryIsActive",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            StateInsertDate = "StateInsertDate",
            StateInsertUserId = "StateInsertUserId",
            StateUpdateDate = "StateUpdateDate",
            StateUpdateUserId = "StateUpdateUserId",
            StateDeleteDate = "StateDeleteDate",
            StateDeleteUserId = "StateDeleteUserId",
            StateIsActive = "StateIsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            CityInsertDate = "CityInsertDate",
            CityInsertUserId = "CityInsertUserId",
            CityUpdateDate = "CityUpdateDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityDeleteDate = "CityDeleteDate",
            CityDeleteUserId = "CityDeleteUserId",
            CityIsActive = "CityIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace LocationsService {
        const baseUrl = "Masters/Locations";
        function Create(request: Serenity.SaveRequest<LocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Locations/Create",
            Update = "Masters/Locations/Update",
            Delete = "Masters/Locations/Delete",
            Retrieve = "Masters/Locations/Retrieve",
            List = "Masters/Locations/List",
            Undelete = "Masters/Locations/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class MeetingTypesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface MeetingTypesForm {
        Name: Serenity.StringEditor;
    }
    class MeetingTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface MeetingTypesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace MeetingTypesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.MeetingTypes";
        const lookupKey = "Masters.MeetingTypes";
        function getLookup(): Q.Lookup<MeetingTypesRow>;
        const deletePermission = "Masters:Meeting Types:Delete";
        const insertPermission = "Masters:Meeting Types:Create";
        const readPermission = "Masters:Meeting Types:View";
        const updatePermission = "Masters:Meeting Types:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace MeetingTypesService {
        const baseUrl = "Masters/MeetingTypes";
        function Create(request: Serenity.SaveRequest<MeetingTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/MeetingTypes/Create",
            Update = "Masters/MeetingTypes/Update",
            Delete = "Masters/MeetingTypes/Delete",
            Retrieve = "Masters/MeetingTypes/Retrieve",
            List = "Masters/MeetingTypes/List",
            Undelete = "Masters/MeetingTypes/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
}
declare namespace SmartERP.Masters {
    class ResolutionStatusesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface ResolutionStatusesForm {
        Name: Serenity.StringEditor;
    }
    class ResolutionStatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface ResolutionStatusesRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ResolutionStatusesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.ResolutionStatuses";
        const lookupKey = "Masters.ResolutionStatuses";
        function getLookup(): Q.Lookup<ResolutionStatusesRow>;
        const deletePermission = "Masters:Resolution Statuses:Delete";
        const insertPermission = "Masters:Resolution Statuses:Create";
        const readPermission = "Masters:Resolution Statuses:View";
        const updatePermission = "Masters:Resolution Statuses:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace ResolutionStatusesService {
        const baseUrl = "Masters/ResolutionStatuses";
        function Create(request: Serenity.SaveRequest<ResolutionStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ResolutionStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ResolutionStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ResolutionStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/ResolutionStatuses/Create",
            Update = "Masters/ResolutionStatuses/Update",
            Delete = "Masters/ResolutionStatuses/Delete",
            Retrieve = "Masters/ResolutionStatuses/Retrieve",
            List = "Masters/ResolutionStatuses/List",
            Undelete = "Masters/ResolutionStatuses/Undelete"
        }
    }
}
declare namespace SmartERP.Masters {
    class SupplierGroupsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Masters {
    interface SupplierGroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class SupplierGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Masters {
    interface SupplierGroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace SupplierGroupsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.SupplierGroups";
        const lookupKey = "Masters.SupplierGroups";
        function getLookup(): Q.Lookup<SupplierGroupsRow>;
        const deletePermission = "Masters:Supplier Groups:Delete";
        const insertPermission = "Masters:Supplier Groups:Create";
        const readPermission = "Masters:Supplier Groups:View";
        const updatePermission = "Masters:Supplier Groups:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Masters {
    namespace SupplierGroupsService {
        const baseUrl = "Masters/SupplierGroups";
        function Create(request: Serenity.SaveRequest<SupplierGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/SupplierGroups/Create",
            Update = "Masters/SupplierGroups/Update",
            Delete = "Masters/SupplierGroups/Delete",
            Retrieve = "Masters/SupplierGroups/Retrieve",
            List = "Masters/SupplierGroups/List",
            Undelete = "Masters/SupplierGroups/Undelete"
        }
    }
}
declare namespace SmartERP.Meeting {
    class AgendaDecisionsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Meeting {
    interface AgendaDecisionsForm {
        Meeting: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        DueDate: Serenity.DateEditor;
        AssignedTo: Serenity.LookupEditor;
        DecisionNumber: Serenity.IntegerEditor;
        RelatedAgendaItem: Serenity.LookupEditor;
        ResolutionStatus: Serenity.LookupEditor;
        Images: Serenity.ImageUploadEditor;
        Attachments: Serenity.ImageUploadEditor;
    }
    class AgendaDecisionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Meeting {
    interface AgendaDecisionsRow {
        Id?: number;
        Description?: string;
        DueDate?: string;
        AssignedTo?: number;
        DecisionNumber?: number;
        RelatedAgendaItem?: number;
        ResolutionStatus?: number;
        ResolutionStatusName?: string;
        Images?: string;
        Attachments?: string;
        Meeting?: number;
        AssignedToFirstName?: string;
        AssignedToLastName?: string;
        AssignedToFullName?: string;
        AssignedToDesignationId?: number;
        AssignedToDepartmentId?: number;
        AssignedToRateType?: number;
        AssignedToPhone?: string;
        AssignedToHoureRateSalary?: number;
        AssignedToEmail?: string;
        AssignedToBloodGroup?: number;
        AssignedToPicture?: string;
        AssignedToCountryId?: number;
        AssignedToStateId?: number;
        AssignedToCityId?: number;
        AssignedToZipCode?: string;
        AssignedToAddress?: string;
        AssignedToUserId?: number;
        AssignedToRegionId?: number;
        AssignedToTerritoryId?: number;
        AssignedToCnic?: string;
        AssignedToInsertDate?: string;
        AssignedToInsertUserId?: number;
        AssignedToUpdateDate?: string;
        AssignedToUpdateUserId?: number;
        AssignedToDeleteDate?: string;
        AssignedToDeleteUserId?: number;
        AssignedToIsActive?: number;
        RelatedAgendaItemTitle?: string;
        RelatedAgendaItemDescription?: string;
        RelatedAgendaItemItemType?: number;
        RelatedAgendaItemRequestedBy?: number;
        RelatedAgendaItemSequenceNo?: number;
        RelatedAgendaItemImages?: string;
        RelatedAgendaItemAttachments?: string;
        RelatedAgendaItemMeeting?: number;
        MeetingMeetingName?: string;
        MeetingMeetingType?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingDepartment?: number;
        MeetingLocation?: number;
        MeetingOrganizedBy?: number;
        MeetingReporter?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AgendaDecisionsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Meeting.AgendaDecisions";
        const lookupKey = "Meetings.AgendaDecisions";
        function getLookup(): Q.Lookup<AgendaDecisionsRow>;
        const deletePermission = "Masters:Meeting:Delete";
        const insertPermission = "Masters:Meeting:Create";
        const readPermission = "Masters:Meeting:View";
        const updatePermission = "Masters:Meeting:Update";
        const enum Fields {
            Id = "Id",
            Description = "Description",
            DueDate = "DueDate",
            AssignedTo = "AssignedTo",
            DecisionNumber = "DecisionNumber",
            RelatedAgendaItem = "RelatedAgendaItem",
            ResolutionStatus = "ResolutionStatus",
            ResolutionStatusName = "ResolutionStatusName",
            Images = "Images",
            Attachments = "Attachments",
            Meeting = "Meeting",
            AssignedToFirstName = "AssignedToFirstName",
            AssignedToLastName = "AssignedToLastName",
            AssignedToFullName = "AssignedToFullName",
            AssignedToDesignationId = "AssignedToDesignationId",
            AssignedToDepartmentId = "AssignedToDepartmentId",
            AssignedToRateType = "AssignedToRateType",
            AssignedToPhone = "AssignedToPhone",
            AssignedToHoureRateSalary = "AssignedToHoureRateSalary",
            AssignedToEmail = "AssignedToEmail",
            AssignedToBloodGroup = "AssignedToBloodGroup",
            AssignedToPicture = "AssignedToPicture",
            AssignedToCountryId = "AssignedToCountryId",
            AssignedToStateId = "AssignedToStateId",
            AssignedToCityId = "AssignedToCityId",
            AssignedToZipCode = "AssignedToZipCode",
            AssignedToAddress = "AssignedToAddress",
            AssignedToUserId = "AssignedToUserId",
            AssignedToRegionId = "AssignedToRegionId",
            AssignedToTerritoryId = "AssignedToTerritoryId",
            AssignedToCnic = "AssignedToCnic",
            AssignedToInsertDate = "AssignedToInsertDate",
            AssignedToInsertUserId = "AssignedToInsertUserId",
            AssignedToUpdateDate = "AssignedToUpdateDate",
            AssignedToUpdateUserId = "AssignedToUpdateUserId",
            AssignedToDeleteDate = "AssignedToDeleteDate",
            AssignedToDeleteUserId = "AssignedToDeleteUserId",
            AssignedToIsActive = "AssignedToIsActive",
            RelatedAgendaItemTitle = "RelatedAgendaItemTitle",
            RelatedAgendaItemDescription = "RelatedAgendaItemDescription",
            RelatedAgendaItemItemType = "RelatedAgendaItemItemType",
            RelatedAgendaItemRequestedBy = "RelatedAgendaItemRequestedBy",
            RelatedAgendaItemSequenceNo = "RelatedAgendaItemSequenceNo",
            RelatedAgendaItemImages = "RelatedAgendaItemImages",
            RelatedAgendaItemAttachments = "RelatedAgendaItemAttachments",
            RelatedAgendaItemMeeting = "RelatedAgendaItemMeeting",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingType = "MeetingMeetingType",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingDepartment = "MeetingDepartment",
            MeetingLocation = "MeetingLocation",
            MeetingOrganizedBy = "MeetingOrganizedBy",
            MeetingReporter = "MeetingReporter",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Meeting {
    namespace AgendaDecisionsService {
        const baseUrl = "Meeting/AgendaDecisions";
        function Create(request: Serenity.SaveRequest<AgendaDecisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendaDecisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendaDecisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendaDecisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/AgendaDecisions/Create",
            Update = "Meeting/AgendaDecisions/Update",
            Delete = "Meeting/AgendaDecisions/Delete",
            Retrieve = "Meeting/AgendaDecisions/Retrieve",
            List = "Meeting/AgendaDecisions/List",
            Undelete = "Meeting/AgendaDecisions/Undelete"
        }
    }
}
declare namespace SmartERP.Meeting {
    class AgendaItemsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Meeting {
    interface AgendaItemsForm {
        Meeting: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ItemType: Serenity.LookupEditor;
        RequestedBy: Serenity.LookupEditor;
        SequenceNo: Serenity.IntegerEditor;
        Images: Serenity.ImageUploadEditor;
        Attachments: Serenity.ImageUploadEditor;
    }
    class AgendaItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Meeting {
    interface AgendaItemsRow {
        Id?: number;
        Title?: string;
        Description?: string;
        ItemType?: number;
        RequestedBy?: number;
        SequenceNo?: number;
        Images?: string;
        Attachments?: string;
        Meeting?: number;
        ItemTypeName?: string;
        RequestedByFirstName?: string;
        RequestedByLastName?: string;
        RequestedByFullName?: string;
        RequestedByDesignationId?: number;
        RequestedByDepartmentId?: number;
        RequestedByRateType?: number;
        RequestedByPhone?: string;
        RequestedByHoureRateSalary?: number;
        RequestedByEmail?: string;
        RequestedByBloodGroup?: number;
        RequestedByPicture?: string;
        RequestedByCountryId?: number;
        RequestedByStateId?: number;
        RequestedByCityId?: number;
        RequestedByZipCode?: string;
        RequestedByAddress?: string;
        RequestedByUserId?: number;
        RequestedByRegionId?: number;
        RequestedByTerritoryId?: number;
        RequestedByCnic?: string;
        RequestedByInsertDate?: string;
        RequestedByInsertUserId?: number;
        RequestedByUpdateDate?: string;
        RequestedByUpdateUserId?: number;
        RequestedByDeleteDate?: string;
        RequestedByDeleteUserId?: number;
        RequestedByIsActive?: number;
        MeetingMeetingName?: string;
        MeetingMeetingType?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingDepartment?: number;
        MeetingLocation?: number;
        MeetingOrganizedBy?: number;
        MeetingReporter?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace AgendaItemsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Title";
        const localTextPrefix = "Meeting.AgendaItems";
        const lookupKey = "Meetings.AgendaItems";
        function getLookup(): Q.Lookup<AgendaItemsRow>;
        const deletePermission = "Masters:Meeting:Delete";
        const insertPermission = "Masters:Meeting:Create";
        const readPermission = "Masters:Meeting:View";
        const updatePermission = "Masters:Meeting:Update";
        const enum Fields {
            Id = "Id",
            Title = "Title",
            Description = "Description",
            ItemType = "ItemType",
            RequestedBy = "RequestedBy",
            SequenceNo = "SequenceNo",
            Images = "Images",
            Attachments = "Attachments",
            Meeting = "Meeting",
            ItemTypeName = "ItemTypeName",
            RequestedByFirstName = "RequestedByFirstName",
            RequestedByLastName = "RequestedByLastName",
            RequestedByFullName = "RequestedByFullName",
            RequestedByDesignationId = "RequestedByDesignationId",
            RequestedByDepartmentId = "RequestedByDepartmentId",
            RequestedByRateType = "RequestedByRateType",
            RequestedByPhone = "RequestedByPhone",
            RequestedByHoureRateSalary = "RequestedByHoureRateSalary",
            RequestedByEmail = "RequestedByEmail",
            RequestedByBloodGroup = "RequestedByBloodGroup",
            RequestedByPicture = "RequestedByPicture",
            RequestedByCountryId = "RequestedByCountryId",
            RequestedByStateId = "RequestedByStateId",
            RequestedByCityId = "RequestedByCityId",
            RequestedByZipCode = "RequestedByZipCode",
            RequestedByAddress = "RequestedByAddress",
            RequestedByUserId = "RequestedByUserId",
            RequestedByRegionId = "RequestedByRegionId",
            RequestedByTerritoryId = "RequestedByTerritoryId",
            RequestedByCnic = "RequestedByCnic",
            RequestedByInsertDate = "RequestedByInsertDate",
            RequestedByInsertUserId = "RequestedByInsertUserId",
            RequestedByUpdateDate = "RequestedByUpdateDate",
            RequestedByUpdateUserId = "RequestedByUpdateUserId",
            RequestedByDeleteDate = "RequestedByDeleteDate",
            RequestedByDeleteUserId = "RequestedByDeleteUserId",
            RequestedByIsActive = "RequestedByIsActive",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingType = "MeetingMeetingType",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingDepartment = "MeetingDepartment",
            MeetingLocation = "MeetingLocation",
            MeetingOrganizedBy = "MeetingOrganizedBy",
            MeetingReporter = "MeetingReporter",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Meeting {
    namespace AgendaItemsService {
        const baseUrl = "Meeting/AgendaItems";
        function Create(request: Serenity.SaveRequest<AgendaItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendaItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendaItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendaItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/AgendaItems/Create",
            Update = "Meeting/AgendaItems/Update",
            Delete = "Meeting/AgendaItems/Delete",
            Retrieve = "Meeting/AgendaItems/Retrieve",
            List = "Meeting/AgendaItems/List",
            Undelete = "Meeting/AgendaItems/Undelete"
        }
    }
}
declare namespace SmartERP.Meeting {
    class MeetingAttendeesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Meeting {
    interface MeetingAttendeesForm {
        Attendee: Serenity.LookupEditor;
        AttendeeType: Serenity.LookupEditor;
        AttendanceStatus: Serenity.LookupEditor;
    }
    class MeetingAttendeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Meeting {
    interface MeetingAttendeesRow {
        Id?: number;
        AttendeeType?: number;
        AttendeeTypeName?: string;
        AttendanceStatus?: number;
        AttendanceStatusName?: string;
        Attendee?: number;
        Meeting?: number;
        AttendeeFirstName?: string;
        AttendeeLastName?: string;
        AttendeeFullName?: string;
        AttendeeDesignationId?: number;
        AttendeeDepartmentId?: number;
        AttendeeRateType?: number;
        AttendeePhone?: string;
        AttendeeHoureRateSalary?: number;
        AttendeeEmail?: string;
        AttendeeBloodGroup?: number;
        AttendeePicture?: string;
        AttendeeCountryId?: number;
        AttendeeStateId?: number;
        AttendeeCityId?: number;
        AttendeeZipCode?: string;
        AttendeeAddress?: string;
        AttendeeUserId?: number;
        AttendeeRegionId?: number;
        AttendeeTerritoryId?: number;
        AttendeeCnic?: string;
        AttendeeInsertDate?: string;
        AttendeeInsertUserId?: number;
        AttendeeUpdateDate?: string;
        AttendeeUpdateUserId?: number;
        AttendeeDeleteDate?: string;
        AttendeeDeleteUserId?: number;
        AttendeeIsActive?: number;
        MeetingMeetingName?: string;
        MeetingMeetingType?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingDepartment?: number;
        MeetingLocation?: number;
        MeetingOrganizedBy?: number;
        MeetingReporter?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace MeetingAttendeesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Meeting.MeetingAttendees";
        const lookupKey = "Meetings.MeetingAttendees";
        function getLookup(): Q.Lookup<MeetingAttendeesRow>;
        const deletePermission = "Masters:Meeting:Delete";
        const insertPermission = "Masters:Meeting:Create";
        const readPermission = "Masters:Meeting:View";
        const updatePermission = "Masters:Meeting:Update";
        const enum Fields {
            Id = "Id",
            AttendeeType = "AttendeeType",
            AttendeeTypeName = "AttendeeTypeName",
            AttendanceStatus = "AttendanceStatus",
            AttendanceStatusName = "AttendanceStatusName",
            Attendee = "Attendee",
            Meeting = "Meeting",
            AttendeeFirstName = "AttendeeFirstName",
            AttendeeLastName = "AttendeeLastName",
            AttendeeFullName = "AttendeeFullName",
            AttendeeDesignationId = "AttendeeDesignationId",
            AttendeeDepartmentId = "AttendeeDepartmentId",
            AttendeeRateType = "AttendeeRateType",
            AttendeePhone = "AttendeePhone",
            AttendeeHoureRateSalary = "AttendeeHoureRateSalary",
            AttendeeEmail = "AttendeeEmail",
            AttendeeBloodGroup = "AttendeeBloodGroup",
            AttendeePicture = "AttendeePicture",
            AttendeeCountryId = "AttendeeCountryId",
            AttendeeStateId = "AttendeeStateId",
            AttendeeCityId = "AttendeeCityId",
            AttendeeZipCode = "AttendeeZipCode",
            AttendeeAddress = "AttendeeAddress",
            AttendeeUserId = "AttendeeUserId",
            AttendeeRegionId = "AttendeeRegionId",
            AttendeeTerritoryId = "AttendeeTerritoryId",
            AttendeeCnic = "AttendeeCnic",
            AttendeeInsertDate = "AttendeeInsertDate",
            AttendeeInsertUserId = "AttendeeInsertUserId",
            AttendeeUpdateDate = "AttendeeUpdateDate",
            AttendeeUpdateUserId = "AttendeeUpdateUserId",
            AttendeeDeleteDate = "AttendeeDeleteDate",
            AttendeeDeleteUserId = "AttendeeDeleteUserId",
            AttendeeIsActive = "AttendeeIsActive",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingType = "MeetingMeetingType",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingDepartment = "MeetingDepartment",
            MeetingLocation = "MeetingLocation",
            MeetingOrganizedBy = "MeetingOrganizedBy",
            MeetingReporter = "MeetingReporter",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Meeting {
    namespace MeetingAttendeesService {
        const baseUrl = "Meeting/MeetingAttendees";
        function Create(request: Serenity.SaveRequest<MeetingAttendeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingAttendeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingAttendeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingAttendeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/MeetingAttendees/Create",
            Update = "Meeting/MeetingAttendees/Update",
            Delete = "Meeting/MeetingAttendees/Delete",
            Retrieve = "Meeting/MeetingAttendees/Retrieve",
            List = "Meeting/MeetingAttendees/List",
            Undelete = "Meeting/MeetingAttendees/Undelete"
        }
    }
}
declare namespace SmartERP.Meeting {
    class MeetingsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Meeting {
    interface MeetingsForm {
        MeetingName: Serenity.StringEditor;
        MeetingType: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Department: Serenity.LookupEditor;
        Location: Serenity.LookupEditor;
        OrganizedBy: Serenity.LookupEditor;
        Reporter: Serenity.LookupEditor;
        Attendees: MeetingAttendeesEditor;
        AgendaItems: AgendaItemsEditor;
        AgendaDecisions: AgendaDecisionsEditor;
    }
    class MeetingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Meeting {
    interface MeetingsRow {
        Id?: number;
        MeetingName?: string;
        MeetingType?: number;
        StartDate?: string;
        EndDate?: string;
        Department?: number;
        Location?: number;
        OrganizedBy?: number;
        Reporter?: number;
        MeetingTypeName?: string;
        Department1?: string;
        DepartmentDescription?: string;
        DepartmentParentDepartmentId?: number;
        DepartmentInsertDate?: string;
        DepartmentInsertUserId?: number;
        DepartmentUpdateDate?: string;
        DepartmentUpdateUserId?: number;
        DepartmentDeleteDate?: string;
        DepartmentDeleteUserId?: number;
        DepartmentIsActive?: number;
        LocationName?: string;
        LocationCountryId?: number;
        LocationStateId?: number;
        LocationCityId?: number;
        LocationAddress?: string;
        LocationLatitude?: string;
        LocationLongitude?: string;
        OrganizedByFirstName?: string;
        OrganizedByLastName?: string;
        OrganizedByFullName?: string;
        OrganizedByDesignationId?: number;
        OrganizedByDepartmentId?: number;
        OrganizedByRateType?: number;
        OrganizedByPhone?: string;
        OrganizedByHoureRateSalary?: number;
        OrganizedByEmail?: string;
        OrganizedByBloodGroup?: number;
        OrganizedByPicture?: string;
        OrganizedByCountryId?: number;
        OrganizedByStateId?: number;
        OrganizedByCityId?: number;
        OrganizedByZipCode?: string;
        OrganizedByAddress?: string;
        OrganizedByUserId?: number;
        OrganizedByRegionId?: number;
        OrganizedByTerritoryId?: number;
        OrganizedByCnic?: string;
        OrganizedByInsertDate?: string;
        OrganizedByInsertUserId?: number;
        OrganizedByUpdateDate?: string;
        OrganizedByUpdateUserId?: number;
        OrganizedByDeleteDate?: string;
        OrganizedByDeleteUserId?: number;
        OrganizedByIsActive?: number;
        ReporterFirstName?: string;
        ReporterLastName?: string;
        ReporterFullName?: string;
        ReporterDesignationId?: number;
        ReporterDepartmentId?: number;
        ReporterRateType?: number;
        ReporterPhone?: string;
        ReporterHoureRateSalary?: number;
        ReporterEmail?: string;
        ReporterBloodGroup?: number;
        ReporterPicture?: string;
        ReporterCountryId?: number;
        ReporterStateId?: number;
        ReporterCityId?: number;
        ReporterZipCode?: string;
        ReporterAddress?: string;
        ReporterUserId?: number;
        ReporterRegionId?: number;
        ReporterTerritoryId?: number;
        ReporterCnic?: string;
        ReporterInsertDate?: string;
        ReporterInsertUserId?: number;
        ReporterUpdateDate?: string;
        ReporterUpdateUserId?: number;
        ReporterDeleteDate?: string;
        ReporterDeleteUserId?: number;
        ReporterIsActive?: number;
        Attendees?: MeetingAttendeesRow[];
        AgendaItems?: AgendaItemsRow[];
        AgendaDecisions?: AgendaDecisionsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace MeetingsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "MeetingName";
        const localTextPrefix = "Meeting.Meetings";
        const lookupKey = "Meetings.Meetings";
        function getLookup(): Q.Lookup<MeetingsRow>;
        const deletePermission = "Masters:Meeting:Delete";
        const insertPermission = "Masters:Meeting:Create";
        const readPermission = "Masters:Meeting:View";
        const updatePermission = "Masters:Meeting:Update";
        const enum Fields {
            Id = "Id",
            MeetingName = "MeetingName",
            MeetingType = "MeetingType",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Department = "Department",
            Location = "Location",
            OrganizedBy = "OrganizedBy",
            Reporter = "Reporter",
            MeetingTypeName = "MeetingTypeName",
            Department1 = "Department1",
            DepartmentDescription = "DepartmentDescription",
            DepartmentParentDepartmentId = "DepartmentParentDepartmentId",
            DepartmentInsertDate = "DepartmentInsertDate",
            DepartmentInsertUserId = "DepartmentInsertUserId",
            DepartmentUpdateDate = "DepartmentUpdateDate",
            DepartmentUpdateUserId = "DepartmentUpdateUserId",
            DepartmentDeleteDate = "DepartmentDeleteDate",
            DepartmentDeleteUserId = "DepartmentDeleteUserId",
            DepartmentIsActive = "DepartmentIsActive",
            LocationName = "LocationName",
            LocationCountryId = "LocationCountryId",
            LocationStateId = "LocationStateId",
            LocationCityId = "LocationCityId",
            LocationAddress = "LocationAddress",
            LocationLatitude = "LocationLatitude",
            LocationLongitude = "LocationLongitude",
            OrganizedByFirstName = "OrganizedByFirstName",
            OrganizedByLastName = "OrganizedByLastName",
            OrganizedByFullName = "OrganizedByFullName",
            OrganizedByDesignationId = "OrganizedByDesignationId",
            OrganizedByDepartmentId = "OrganizedByDepartmentId",
            OrganizedByRateType = "OrganizedByRateType",
            OrganizedByPhone = "OrganizedByPhone",
            OrganizedByHoureRateSalary = "OrganizedByHoureRateSalary",
            OrganizedByEmail = "OrganizedByEmail",
            OrganizedByBloodGroup = "OrganizedByBloodGroup",
            OrganizedByPicture = "OrganizedByPicture",
            OrganizedByCountryId = "OrganizedByCountryId",
            OrganizedByStateId = "OrganizedByStateId",
            OrganizedByCityId = "OrganizedByCityId",
            OrganizedByZipCode = "OrganizedByZipCode",
            OrganizedByAddress = "OrganizedByAddress",
            OrganizedByUserId = "OrganizedByUserId",
            OrganizedByRegionId = "OrganizedByRegionId",
            OrganizedByTerritoryId = "OrganizedByTerritoryId",
            OrganizedByCnic = "OrganizedByCnic",
            OrganizedByInsertDate = "OrganizedByInsertDate",
            OrganizedByInsertUserId = "OrganizedByInsertUserId",
            OrganizedByUpdateDate = "OrganizedByUpdateDate",
            OrganizedByUpdateUserId = "OrganizedByUpdateUserId",
            OrganizedByDeleteDate = "OrganizedByDeleteDate",
            OrganizedByDeleteUserId = "OrganizedByDeleteUserId",
            OrganizedByIsActive = "OrganizedByIsActive",
            ReporterFirstName = "ReporterFirstName",
            ReporterLastName = "ReporterLastName",
            ReporterFullName = "ReporterFullName",
            ReporterDesignationId = "ReporterDesignationId",
            ReporterDepartmentId = "ReporterDepartmentId",
            ReporterRateType = "ReporterRateType",
            ReporterPhone = "ReporterPhone",
            ReporterHoureRateSalary = "ReporterHoureRateSalary",
            ReporterEmail = "ReporterEmail",
            ReporterBloodGroup = "ReporterBloodGroup",
            ReporterPicture = "ReporterPicture",
            ReporterCountryId = "ReporterCountryId",
            ReporterStateId = "ReporterStateId",
            ReporterCityId = "ReporterCityId",
            ReporterZipCode = "ReporterZipCode",
            ReporterAddress = "ReporterAddress",
            ReporterUserId = "ReporterUserId",
            ReporterRegionId = "ReporterRegionId",
            ReporterTerritoryId = "ReporterTerritoryId",
            ReporterCnic = "ReporterCnic",
            ReporterInsertDate = "ReporterInsertDate",
            ReporterInsertUserId = "ReporterInsertUserId",
            ReporterUpdateDate = "ReporterUpdateDate",
            ReporterUpdateUserId = "ReporterUpdateUserId",
            ReporterDeleteDate = "ReporterDeleteDate",
            ReporterDeleteUserId = "ReporterDeleteUserId",
            ReporterIsActive = "ReporterIsActive",
            Attendees = "Attendees",
            AgendaItems = "AgendaItems",
            AgendaDecisions = "AgendaDecisions",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Meeting {
    namespace MeetingsService {
        const baseUrl = "Meeting/Meetings";
        function Create(request: Serenity.SaveRequest<MeetingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetings/Create",
            Update = "Meeting/Meetings/Update",
            Delete = "Meeting/Meetings/Delete",
            Retrieve = "Meeting/Meetings/Retrieve",
            List = "Meeting/Meetings/List",
            Undelete = "Meeting/Meetings/Undelete"
        }
    }
}
declare namespace SmartERP.Meeting {
}
declare namespace SmartERP.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SmartERP.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SmartERP.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SmartERP.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SmartERP.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SmartERP.Products {
    class BrandsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Products {
    interface BrandsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class BrandsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Products {
    interface BrandsRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace BrandsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Products.Brands";
        const lookupKey = "Products.Brands";
        function getLookup(): Q.Lookup<BrandsRow>;
        const deletePermission = "Inventory:Brand:Delete";
        const insertPermission = "Inventory:Brand:Create";
        const readPermission = "Inventory:Brand:View";
        const updatePermission = "Inventory:Brand:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Products {
    namespace BrandsService {
        const baseUrl = "Products/Brands";
        function Create(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Products/Brands/Create",
            Update = "Products/Brands/Update",
            Delete = "Products/Brands/Delete",
            Retrieve = "Products/Brands/Retrieve",
            List = "Products/Brands/List",
            Undelete = "Products/Brands/Undelete"
        }
    }
}
declare namespace SmartERP.Products {
    class CategoriesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Products {
    interface CategoriesForm {
        ParentCategoryId: CategoriesEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Products {
    interface CategoriesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        ParentCategoryId?: number;
        ParentCategoryName?: string;
        ParentCategoryDescription?: string;
        ParentCategoryParentCategoryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace CategoriesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Products.Categories";
        const lookupKey = "Products.Categories";
        function getLookup(): Q.Lookup<CategoriesRow>;
        const deletePermission = "Inventory:Category:Delete";
        const insertPermission = "Inventory:Category:Create";
        const readPermission = "Inventory:Category:View";
        const updatePermission = "Inventory:Category:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            ParentCategoryId = "ParentCategoryId",
            ParentCategoryName = "ParentCategoryName",
            ParentCategoryDescription = "ParentCategoryDescription",
            ParentCategoryParentCategoryId = "ParentCategoryParentCategoryId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Products {
    namespace CategoriesService {
        const baseUrl = "Products/Categories";
        function Create(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Products/Categories/Create",
            Update = "Products/Categories/Update",
            Delete = "Products/Categories/Delete",
            Retrieve = "Products/Categories/Retrieve",
            List = "Products/Categories/List",
            Undelete = "Products/Categories/Undelete"
        }
    }
}
declare namespace SmartERP.Products {
    class ProductsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Products {
    interface ProductsForm {
        Barcode: Serenity.StringEditor;
        Sn: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.DecimalEditor;
        UnitsOnOrder: Serenity.DecimalEditor;
        ReorderLevel: Serenity.DecimalEditor;
        CategoryId: CategoriesEditor;
        UnitId: Serenity.LookupEditor;
        BrandId: Serenity.LookupEditor;
        Image: Serenity.ImageUploadEditor;
        ProductDetails: Serenity.TextAreaEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Products {
    interface ProductsRow {
        Id?: number;
        Barcode?: string;
        Sn?: string;
        ProductName?: string;
        Model?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        CategoryId?: number;
        UnitId?: number;
        BrandId?: number;
        Image?: string;
        ProductDetails?: string;
        ProductListName?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        UnitName?: string;
        UnitDescription?: string;
        BrandName?: string;
        PurchasePrice?: number;
        QtyOut?: number;
        QtyIn?: number;
        Stock?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ProductsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductListName";
        const localTextPrefix = "Products.Products";
        const lookupKey = "Products.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const deletePermission = "Inventory:Product:Delete";
        const insertPermission = "Inventory:Product:Create";
        const readPermission = "Inventory:Product:View";
        const updatePermission = "Inventory:Product:Update";
        const enum Fields {
            Id = "Id",
            Barcode = "Barcode",
            Sn = "Sn",
            ProductName = "ProductName",
            Model = "Model",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            CategoryId = "CategoryId",
            UnitId = "UnitId",
            BrandId = "BrandId",
            Image = "Image",
            ProductDetails = "ProductDetails",
            ProductListName = "ProductListName",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            BrandName = "BrandName",
            PurchasePrice = "PurchasePrice",
            QtyOut = "QtyOut",
            QtyIn = "QtyIn",
            Stock = "Stock",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Products {
    namespace ProductsService {
        const baseUrl = "Products/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Products/Products/Create",
            Update = "Products/Products/Update",
            Delete = "Products/Products/Delete",
            Retrieve = "Products/Products/Retrieve",
            List = "Products/Products/List",
            Undelete = "Products/Products/Undelete"
        }
    }
}
declare namespace SmartERP.Products {
    class UnitsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Products {
    interface UnitsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class UnitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Products {
    interface UnitsRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace UnitsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Products.Units";
        const lookupKey = "Products.Units";
        function getLookup(): Q.Lookup<UnitsRow>;
        const deletePermission = "Inventory:Unit:Delete";
        const insertPermission = "Inventory:Unit:Create";
        const readPermission = "Inventory:Unit:View";
        const updatePermission = "Inventory:Unit:Update";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Products {
    namespace UnitsService {
        const baseUrl = "Products/Units";
        function Create(request: Serenity.SaveRequest<UnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Products/Units/Create",
            Update = "Products/Units/Update",
            Delete = "Products/Units/Delete",
            Retrieve = "Products/Units/Retrieve",
            List = "Products/Units/List",
            Undelete = "Products/Units/Undelete"
        }
    }
}
declare namespace SmartERP.Purchases {
}
declare namespace SmartERP.Purchases {
    class PurchaseDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Purchases {
    interface PurchaseDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class PurchaseDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Purchases {
    interface PurchaseDetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        UnitName?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        PurchaseId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductQuantityPerUnit?: number;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        PurchaseSupplierId?: number;
        PurchaseInvoiceNo?: string;
        PurchaseDate?: string;
        PurchasePaymentType?: number;
        PurchaseBankId?: number;
        PurchaseDiscount?: number;
        PurchaseTotalDiscount?: number;
        PurchaseVat?: number;
        PurchaseTotalTax?: number;
        PurchaseShippingCost?: number;
        PurchaseGrandTotal?: number;
        PurchaseNetTotal?: number;
        PurchasePaidAmount?: number;
        PurchaseDue?: number;
        PurchaseChange?: number;
        PurchaseDetails?: string;
        UnitUnitName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace PurchaseDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Purchases.PurchaseDetails";
        const deletePermission = "Purchasing:Purchase:Delete";
        const insertPermission = "Purchasing:Purchase:Create";
        const readPermission = "Purchasing:Purchase:View";
        const updatePermission = "Purchasing:Purchase:Update";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            PurchaseId = "PurchaseId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            PurchaseSupplierId = "PurchaseSupplierId",
            PurchaseInvoiceNo = "PurchaseInvoiceNo",
            PurchaseDate = "PurchaseDate",
            PurchasePaymentType = "PurchasePaymentType",
            PurchaseBankId = "PurchaseBankId",
            PurchaseDiscount = "PurchaseDiscount",
            PurchaseTotalDiscount = "PurchaseTotalDiscount",
            PurchaseVat = "PurchaseVat",
            PurchaseTotalTax = "PurchaseTotalTax",
            PurchaseShippingCost = "PurchaseShippingCost",
            PurchaseGrandTotal = "PurchaseGrandTotal",
            PurchaseNetTotal = "PurchaseNetTotal",
            PurchasePaidAmount = "PurchasePaidAmount",
            PurchaseDue = "PurchaseDue",
            PurchaseChange = "PurchaseChange",
            PurchaseDetails = "PurchaseDetails",
            UnitUnitName = "UnitUnitName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Purchases {
    namespace PurchaseDetailsService {
        const baseUrl = "Purchases/PurchaseDetails";
        function Create(request: Serenity.SaveRequest<PurchaseDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchases/PurchaseDetails/Create",
            Update = "Purchases/PurchaseDetails/Update",
            Delete = "Purchases/PurchaseDetails/Delete",
            Retrieve = "Purchases/PurchaseDetails/Retrieve",
            List = "Purchases/PurchaseDetails/List",
            Undelete = "Purchases/PurchaseDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Purchases {
    class PurchasesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Purchases {
    interface PurchasesForm {
        SupplierId: Serenity.LookupEditor;
        InvoiceNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: PurchaseDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
        RowVersion: Serenity.StringEditor;
    }
    class PurchasesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Purchases {
    interface PurchasesRow {
        Id?: number;
        SupplierId?: number;
        InvoiceNo?: string;
        Date?: string;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: PurchaseDetailsRow[];
        HeadCodeName?: string;
        VNo?: number;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        RowVersion?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace PurchasesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Purchases.Purchases";
        const lookupKey = "Purchases.Purchases";
        function getLookup(): Q.Lookup<PurchasesRow>;
        const deletePermission = "Purchasing:Purchase:Delete";
        const insertPermission = "Purchasing:Purchase:Create";
        const readPermission = "Purchasing:Purchase:View";
        const updatePermission = "Purchasing:Purchase:Update";
        const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            InvoiceNo = "InvoiceNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            LineItems = "LineItems",
            HeadCodeName = "HeadCodeName",
            VNo = "VNo",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            RowVersion = "RowVersion",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Purchases {
    namespace PurchasesService {
        const baseUrl = "Purchases/Purchases";
        function Create(request: Serenity.SaveRequest<PurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchases/Purchases/Create",
            Update = "Purchases/Purchases/Update",
            Delete = "Purchases/Purchases/Delete",
            Retrieve = "Purchases/Purchases/Retrieve",
            List = "Purchases/Purchases/List",
            Undelete = "Purchases/Purchases/Undelete"
        }
    }
}
declare namespace SmartERP.Quotations {
    class QuotationDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Quotations {
    interface QuotationDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class QuotationDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Quotations {
    interface QuotationDetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        UnitName?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        UnitUnitName?: string;
        UnitDescription?: string;
        UnitInsertDate?: string;
        UnitInsertUserId?: number;
        UnitUpdateDate?: string;
        UnitUpdateUserId?: number;
        UnitDeleteDate?: string;
        UnitDeleteUserId?: number;
        UnitIsActive?: number;
        QuotationCustomerId?: number;
        QuotationDate?: string;
        QuotationDiscount?: number;
        QuotationTotalDiscount?: number;
        QuotationVat?: number;
        QuotationTotalTax?: number;
        QuotationShippingCost?: number;
        QuotationGrandTotal?: number;
        QuotationNetTotal?: number;
        QuotationDetails?: string;
        QuotationExpiryDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace QuotationDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Quotations.QuotationDetails";
        const deletePermission = "Sales:Quotation:Delete";
        const insertPermission = "Sales:Quotation:Create";
        const readPermission = "Sales:Quotation:View";
        const updatePermission = "Sales:Quotation:Update";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            UnitUnitName = "UnitUnitName",
            UnitDescription = "UnitDescription",
            UnitInsertDate = "UnitInsertDate",
            UnitInsertUserId = "UnitInsertUserId",
            UnitUpdateDate = "UnitUpdateDate",
            UnitUpdateUserId = "UnitUpdateUserId",
            UnitDeleteDate = "UnitDeleteDate",
            UnitDeleteUserId = "UnitDeleteUserId",
            UnitIsActive = "UnitIsActive",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationDate = "QuotationDate",
            QuotationDiscount = "QuotationDiscount",
            QuotationTotalDiscount = "QuotationTotalDiscount",
            QuotationVat = "QuotationVat",
            QuotationTotalTax = "QuotationTotalTax",
            QuotationShippingCost = "QuotationShippingCost",
            QuotationGrandTotal = "QuotationGrandTotal",
            QuotationNetTotal = "QuotationNetTotal",
            QuotationDetails = "QuotationDetails",
            QuotationExpiryDate = "QuotationExpiryDate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Quotations {
    namespace QuotationDetailsService {
        const baseUrl = "Quotations/QuotationDetails";
        function Create(request: Serenity.SaveRequest<QuotationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuotationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Quotations/QuotationDetails/Create",
            Update = "Quotations/QuotationDetails/Update",
            Delete = "Quotations/QuotationDetails/Delete",
            Retrieve = "Quotations/QuotationDetails/Retrieve",
            List = "Quotations/QuotationDetails/List",
            Undelete = "Quotations/QuotationDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Quotations {
    class QuotationsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Quotations {
    interface QuotationsForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        LineItems: QuotationsDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
        RowVersion: Serenity.StringEditor;
    }
    class QuotationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Quotations {
    interface QuotationsRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        Details?: string;
        ExpiryDate?: string;
        LineItems?: QuotationDetailsRow[];
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        RowVersion?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace QuotationsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Date";
        const localTextPrefix = "Quotations.Quotations";
        const lookupKey = "Quotations.Quotations";
        function getLookup(): Q.Lookup<QuotationsRow>;
        const deletePermission = "Sales:Quotation:Delete";
        const insertPermission = "Sales:Quotation:Create";
        const readPermission = "Sales:Quotation:View";
        const updatePermission = "Sales:Quotation:Update";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            Details = "Details",
            ExpiryDate = "ExpiryDate",
            LineItems = "LineItems",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            RowVersion = "RowVersion",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Quotations {
    namespace QuotationsService {
        const baseUrl = "Quotations/Quotations";
        function Create(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Quotations/Quotations/Create",
            Update = "Quotations/Quotations/Update",
            Delete = "Quotations/Quotations/Delete",
            Retrieve = "Quotations/Quotations/Retrieve",
            List = "Quotations/Quotations/List",
            Undelete = "Quotations/Quotations/Undelete"
        }
    }
}
declare namespace SmartERP {
    enum RateKind {
        Hourly = 1,
        Salary = 2
    }
}
declare namespace SmartERP.Reports {
    class CustomerReceivableReportColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Reports {
    class DailyClosingColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Reports {
    interface DailyClosingForm {
        Date: Serenity.DateEditor;
        LastDayClosing: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }
    class DailyClosingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Reports {
    interface DailyClosingRow {
        Id?: number;
        LastDayClosing?: number;
        CashIn?: number;
        CashOut?: number;
        Date?: string;
        Amount?: number;
        Adjustment?: number;
        Status?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        LastClosingAmount?: number;
        TodayCashIn?: number;
        TodayCashOut?: number;
        LastClosingDate?: string;
    }
    namespace DailyClosingRow {
        const idProperty = "Id";
        const localTextPrefix = "Reports.DailyClosing";
        const deletePermission = "Report:Daily Closing Report";
        const insertPermission = "Report:Daily Closing Report";
        const readPermission = "Report:Daily Closing Report";
        const updatePermission = "Report:Daily Closing Report";
        const enum Fields {
            Id = "Id",
            LastDayClosing = "LastDayClosing",
            CashIn = "CashIn",
            CashOut = "CashOut",
            Date = "Date",
            Amount = "Amount",
            Adjustment = "Adjustment",
            Status = "Status",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            LastClosingAmount = "LastClosingAmount",
            TodayCashIn = "TodayCashIn",
            TodayCashOut = "TodayCashOut",
            LastClosingDate = "LastClosingDate"
        }
    }
}
declare namespace SmartERP.Reports {
    namespace DailyClosingService {
        const baseUrl = "Reports/DailyClosing";
        function Create(request: Serenity.SaveRequest<DailyClosingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DailyClosingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DailyClosingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DailyClosingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Reports/DailyClosing/Create",
            Update = "Reports/DailyClosing/Update",
            Delete = "Reports/DailyClosing/Delete",
            Retrieve = "Reports/DailyClosing/Retrieve",
            List = "Reports/DailyClosing/List",
            Undelete = "Reports/DailyClosing/Undelete"
        }
    }
}
declare namespace SmartERP.Reports {
}
declare namespace SmartERP.Reports {
    class StockReportColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Reports {
    class SupplierPayableReportColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Sales {
}
declare namespace SmartERP.Sales {
    class SaleDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Sales {
    interface SaleDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class SaleDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Sales {
    interface SaleDetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        UnitName?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        SaleId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductQuantityPerUnit?: number;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        SaleCustomerId?: number;
        SaleDate?: string;
        SalePaymentType?: number;
        SaleBankId?: number;
        SaleDiscount?: number;
        SaleTotalDiscount?: number;
        SaleVat?: number;
        SaleTotalTax?: number;
        SaleShippingCost?: number;
        SaleGrandTotal?: number;
        SaleNetTotal?: number;
        SalePaidAmount?: number;
        SaleDue?: number;
        SaleChange?: number;
        SaleDetails?: string;
        UnitUnitName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace SaleDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Sales.SaleDetails";
        const deletePermission = "Sales:Sale:Delete";
        const insertPermission = "Sales:Sale:Create";
        const readPermission = "Sales:Sale:View";
        const updatePermission = "Sales:Sale:Update";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            SaleId = "SaleId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
            SalePaymentType = "SalePaymentType",
            SaleBankId = "SaleBankId",
            SaleDiscount = "SaleDiscount",
            SaleTotalDiscount = "SaleTotalDiscount",
            SaleVat = "SaleVat",
            SaleTotalTax = "SaleTotalTax",
            SaleShippingCost = "SaleShippingCost",
            SaleGrandTotal = "SaleGrandTotal",
            SaleNetTotal = "SaleNetTotal",
            SalePaidAmount = "SalePaidAmount",
            SaleDue = "SaleDue",
            SaleChange = "SaleChange",
            SaleDetails = "SaleDetails",
            UnitUnitName = "UnitUnitName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Sales {
    namespace SaleDetailsService {
        const baseUrl = "Sales/SaleDetails";
        function Create(request: Serenity.SaveRequest<SaleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SaleDetails/Create",
            Update = "Sales/SaleDetails/Update",
            Delete = "Sales/SaleDetails/Delete",
            Retrieve = "Sales/SaleDetails/Retrieve",
            List = "Sales/SaleDetails/List",
            Undelete = "Sales/SaleDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Sales {
    class SalesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Sales {
    interface SalesForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: SalesDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
        RowVersion: Serenity.StringEditor;
    }
    class SalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Sales {
    interface SalesRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: SaleDetailsRow[];
        HeadCodeName?: string;
        VNo?: number;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        RowVersion?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace SalesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Date";
        const localTextPrefix = "Sales.Sales";
        const lookupKey = "Sales.Sales";
        function getLookup(): Q.Lookup<SalesRow>;
        const deletePermission = "Sales:Sale:Delete";
        const insertPermission = "Sales:Sale:Create";
        const readPermission = "Sales:Sale:View";
        const updatePermission = "Sales:Sale:Update";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            LineItems = "LineItems",
            HeadCodeName = "HeadCodeName",
            VNo = "VNo",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            RowVersion = "RowVersion",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Sales {
    namespace SalesService {
        const baseUrl = "Sales/Sales";
        function Create(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Sales/Create",
            Update = "Sales/Sales/Update",
            Delete = "Sales/Sales/Delete",
            Retrieve = "Sales/Sales/Retrieve",
            List = "Sales/Sales/List",
            Undelete = "Sales/Sales/Undelete"
        }
    }
}
declare namespace SmartERP {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SmartERP.Services {
}
declare namespace SmartERP.Services {
    class ServiceInvoiceDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Services {
    interface ServiceInvoiceDetailsForm {
        ServiceId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class ServiceInvoiceDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Services {
    interface ServiceInvoiceDetailsRow {
        Id?: number;
        ServiceId?: number;
        ServiceName?: string;
        Description?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        ServiceInvoiceId?: number;
        ServiceServiceName?: string;
        ServiceCharge?: number;
        ServiceDescription?: string;
        ServiceTax?: number;
        ServiceInvoiceCustomerId?: number;
        ServiceInvoiceDate?: string;
        ServiceInvoiceUserId?: number;
        ServiceInvoiceDiscount?: number;
        ServiceInvoiceTotalDiscount?: number;
        ServiceInvoiceVat?: number;
        ServiceInvoiceTotalTax?: number;
        ServiceInvoiceShippingCost?: number;
        ServiceInvoiceGrandTotal?: number;
        ServiceInvoiceNetTotal?: number;
        ServiceInvoicePaidAmount?: number;
        ServiceInvoiceDue?: number;
        ServiceInvoiceChange?: number;
        ServiceInvoiceDetails?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ServiceInvoiceDetailsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Services.ServiceInvoiceDetails";
        const deletePermission = "Services:Service Invoice:Delete";
        const insertPermission = "Services:Service Invoice:Create";
        const readPermission = "Services:Service Invoice:View";
        const updatePermission = "Services:Service Invoice:Update";
        const enum Fields {
            Id = "Id",
            ServiceId = "ServiceId",
            ServiceName = "ServiceName",
            Description = "Description",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            ServiceInvoiceId = "ServiceInvoiceId",
            ServiceServiceName = "ServiceServiceName",
            ServiceCharge = "ServiceCharge",
            ServiceDescription = "ServiceDescription",
            ServiceTax = "ServiceTax",
            ServiceInvoiceCustomerId = "ServiceInvoiceCustomerId",
            ServiceInvoiceDate = "ServiceInvoiceDate",
            ServiceInvoiceUserId = "ServiceInvoiceUserId",
            ServiceInvoiceDiscount = "ServiceInvoiceDiscount",
            ServiceInvoiceTotalDiscount = "ServiceInvoiceTotalDiscount",
            ServiceInvoiceVat = "ServiceInvoiceVat",
            ServiceInvoiceTotalTax = "ServiceInvoiceTotalTax",
            ServiceInvoiceShippingCost = "ServiceInvoiceShippingCost",
            ServiceInvoiceGrandTotal = "ServiceInvoiceGrandTotal",
            ServiceInvoiceNetTotal = "ServiceInvoiceNetTotal",
            ServiceInvoicePaidAmount = "ServiceInvoicePaidAmount",
            ServiceInvoiceDue = "ServiceInvoiceDue",
            ServiceInvoiceChange = "ServiceInvoiceChange",
            ServiceInvoiceDetails = "ServiceInvoiceDetails",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Services {
    namespace ServiceInvoiceDetailsService {
        const baseUrl = "Services/ServiceInvoiceDetails";
        function Create(request: Serenity.SaveRequest<ServiceInvoiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServiceInvoiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceInvoiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceInvoiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Services/ServiceInvoiceDetails/Create",
            Update = "Services/ServiceInvoiceDetails/Update",
            Delete = "Services/ServiceInvoiceDetails/Delete",
            Retrieve = "Services/ServiceInvoiceDetails/Retrieve",
            List = "Services/ServiceInvoiceDetails/List",
            Undelete = "Services/ServiceInvoiceDetails/Undelete"
        }
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoicesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Services {
    interface ServiceInvoicesForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        LineItems: ServiceInvoicesDetailEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        GrandTotal: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class ServiceInvoicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Services {
    interface ServiceInvoicesRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        EmployeeId?: number;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: ServiceInvoiceDetailsRow[];
        HeadCodeName?: string;
        VNo?: number;
        EmployeeFullName?: string;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ServiceInvoicesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Date";
        const localTextPrefix = "Services.ServiceInvoices";
        const lookupKey = "Services.ServiceInvoices";
        function getLookup(): Q.Lookup<ServiceInvoicesRow>;
        const deletePermission = "Services:Service Invoice:Delete";
        const insertPermission = "Services:Service Invoice:Create";
        const readPermission = "Services:Service Invoice:View";
        const updatePermission = "Services:Service Invoice:Update";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            EmployeeId = "EmployeeId",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            LineItems = "LineItems",
            HeadCodeName = "HeadCodeName",
            VNo = "VNo",
            EmployeeFullName = "EmployeeFullName",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Services {
    namespace ServiceInvoicesService {
        const baseUrl = "Services/ServiceInvoices";
        function Create(request: Serenity.SaveRequest<ServiceInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServiceInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Services/ServiceInvoices/Create",
            Update = "Services/ServiceInvoices/Update",
            Delete = "Services/ServiceInvoices/Delete",
            Retrieve = "Services/ServiceInvoices/Retrieve",
            List = "Services/ServiceInvoices/List",
            Undelete = "Services/ServiceInvoices/Undelete"
        }
    }
}
declare namespace SmartERP.Services {
    class ServicesColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Services {
    interface ServicesForm {
        ServiceName: Serenity.StringEditor;
        Charge: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
        Tax: Serenity.DecimalEditor;
    }
    class ServicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Services {
    interface ServicesRow {
        Id?: number;
        ServiceName?: string;
        Charge?: number;
        Description?: string;
        Tax?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace ServicesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ServiceName";
        const localTextPrefix = "Services.Services";
        const lookupKey = "Services.Services";
        function getLookup(): Q.Lookup<ServicesRow>;
        const deletePermission = "Masters:Service:Delete";
        const insertPermission = "Masters:Service:Create";
        const readPermission = "Masters:Service:View";
        const updatePermission = "Masters:Service:Update";
        const enum Fields {
            Id = "Id",
            ServiceName = "ServiceName",
            Charge = "Charge",
            Description = "Description",
            Tax = "Tax",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Services {
    namespace ServicesService {
        const baseUrl = "Services/Services";
        function Create(request: Serenity.SaveRequest<ServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Services/Services/Create",
            Update = "Services/Services/Update",
            Delete = "Services/Services/Delete",
            Retrieve = "Services/Services/Retrieve",
            List = "Services/Services/List",
            Undelete = "Services/Services/Undelete"
        }
    }
}
declare namespace SmartERP.Suppliers {
    class SuppliersColumns {
        static columnsKey: string;
    }
}
declare namespace SmartERP.Suppliers {
    interface SuppliersForm {
        CompanyName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        SupplierGroupId: Serenity.LookupEditor;
        Address: Serenity.TextAreaEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmailAddress: Serenity.StringEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
    }
    class SuppliersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartERP.Suppliers {
    interface SuppliersRow {
        Id?: number;
        CompanyName?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        SupplierPayable?: number;
        SupplierPaid?: number;
        SupplierBalance?: number;
        SupplierGroupId?: number;
        SupplierGroupName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }
    namespace SuppliersRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Suppliers.Suppliers";
        const lookupKey = "Suppliers.Suppliers";
        function getLookup(): Q.Lookup<SuppliersRow>;
        const deletePermission = "Business Partners:Supplier:Delete";
        const insertPermission = "Business Partners:Supplier:Create";
        const readPermission = "Business Partners:Supplier:View";
        const updatePermission = "Business Partners:Supplier:Update";
        const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            SupplierPayable = "SupplierPayable",
            SupplierPaid = "SupplierPaid",
            SupplierBalance = "SupplierBalance",
            SupplierGroupId = "SupplierGroupId",
            SupplierGroupName = "SupplierGroupName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
declare namespace SmartERP.Suppliers {
    namespace SuppliersService {
        const baseUrl = "Suppliers/Suppliers";
        function Create(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Suppliers/Suppliers/Create",
            Update = "Suppliers/Suppliers/Update",
            Delete = "Suppliers/Suppliers/Delete",
            Retrieve = "Suppliers/Suppliers/Retrieve",
            List = "Suppliers/Suppliers/List",
            Undelete = "Suppliers/Suppliers/Undelete"
        }
    }
}
declare namespace SmartERP.Texts {
}
declare namespace SmartERP.Accounts {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountsForm;
        constructor();
        private UpdateAccountfields;
        private setTabIndexSelect2;
        dialogOpen(asPanel?: boolean): void;
    }
}
declare namespace SmartERP.Accounts {
    class AccountsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, AccountsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: AccountsRow, lookup: Q.Lookup<AccountsRow>): string;
    }
}
declare namespace SmartERP.Accounts {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected subDialogDataChange(): void;
        protected usePager(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Accounts {
    class BankTransactionsDialog extends Serenity.EntityDialog<BankTransactionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankTransactionsForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class BankTransactionsGrid extends Serenity.EntityGrid<BankTransactionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankTransactionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class CashAdjustmentDialog extends Serenity.EntityDialog<CashAdjustmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashAdjustmentForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class CashAdjustmentGrid extends Serenity.EntityGrid<CashAdjustmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashAdjustmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class ContraVoucherDialog extends Serenity.EntityDialog<ContraVoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContraVoucherForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class ContraVoucherGrid extends Serenity.EntityGrid<ContraVoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContraVoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class CreditVoucherDialog extends Serenity.EntityDialog<CreditVoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CreditVoucherForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class CreditVoucherGrid extends Serenity.EntityGrid<CreditVoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CreditVoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class CustomerReceiveDialog extends Serenity.EntityDialog<CustomerReceiveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerReceiveForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class CustomerReceiveGrid extends Serenity.EntityGrid<CustomerReceiveRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerReceiveDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class DebitVoucherDialog extends Serenity.EntityDialog<DebitVoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DebitVoucherForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class DebitVoucherGrid extends Serenity.EntityGrid<DebitVoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DebitVoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class JournalVoucherDialog extends Serenity.EntityDialog<JournalVoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JournalVoucherForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class JournalVoucherGrid extends Serenity.EntityGrid<JournalVoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JournalVoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class OpeningBalanceDialog extends Serenity.EntityDialog<OpeningBalanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OpeningBalanceForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class OpeningBalanceGrid extends Serenity.EntityGrid<OpeningBalanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpeningBalanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class SupplierPaymentDialog extends Serenity.EntityDialog<SupplierPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupplierPaymentForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Accounts {
    class SupplierPaymentGrid extends Serenity.EntityGrid<SupplierPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Accounts {
    class TransactionsDialog extends Serenity.EntityDialog<TransactionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransactionsForm;
    }
}
declare namespace SmartERP.Accounts {
    class TransactionsGrid extends Serenity.EntityGrid<TransactionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CitiesForm;
    }
}
declare namespace SmartERP.Administration {
    class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompaniesForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Administration {
    class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountriesForm;
    }
}
declare namespace SmartERP.Administration {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrenciesForm;
    }
}
declare namespace SmartERP.Administration {
    class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrenciesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SmartERP.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SmartERP.Administration {
    class RegionsDialog extends Serenity.EntityDialog<RegionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RegionsForm;
    }
}
declare namespace SmartERP.Administration {
    class RegionsGrid extends Serenity.EntityGrid<RegionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegionsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SmartERP.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SmartERP.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SmartERP.Administration {
    class ShippersDialog extends Serenity.EntityDialog<ShippersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ShippersForm;
    }
}
declare namespace SmartERP.Administration {
    class ShippersGrid extends Serenity.EntityGrid<ShippersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShippersDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class StatesDialog extends Serenity.EntityDialog<StatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatesForm;
    }
}
declare namespace SmartERP.Administration {
    class StatesGrid extends Serenity.EntityGrid<StatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class TerritoriesDialog extends Serenity.EntityDialog<TerritoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TerritoriesForm;
    }
}
declare namespace SmartERP.Administration {
    class TerritoriesGrid extends Serenity.EntityGrid<TerritoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TerritoriesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SmartERP.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SmartERP.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SmartERP.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SmartERP.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SmartERP.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SmartERP.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SmartERP.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SmartERP.Administration {
    class WarehousesDialog extends Serenity.EntityDialog<WarehousesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WarehousesForm;
    }
}
declare namespace SmartERP.Administration {
    class WarehousesGrid extends Serenity.EntityGrid<WarehousesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WarehousesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Banks {
    class BanksDialog extends Serenity.EntityDialog<BanksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BanksForm;
    }
}
declare namespace SmartERP.Banks {
    class BanksGrid extends Serenity.EntityGrid<BanksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BanksDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.LanguageList {
    function getValue(): string[][];
}
declare namespace SmartERP.ScriptInitialization {
}
declare namespace SmartERP.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SmartERP.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SmartERP.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace SmartERP.Customers {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
    }
}
declare namespace SmartERP.Customers {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Expenses {
    class ExpenseTypesDialog extends Serenity.EntityDialog<ExpenseTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpenseTypesForm;
    }
}
declare namespace SmartERP.Expenses {
    class ExpenseTypesGrid extends Serenity.EntityGrid<ExpenseTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpenseTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Expenses {
    class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpensesForm;
    }
}
declare namespace SmartERP.Expenses {
    class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.HumanResource {
    class AttendanceDialog extends Serenity.EntityDialog<AttendanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendanceForm;
    }
}
declare namespace SmartERP.HumanResource {
    class AttendanceGrid extends Serenity.EntityGrid<AttendanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.HumanResource {
    class DepartmentsDialog extends Serenity.EntityDialog<DepartmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartmentsForm;
    }
}
declare namespace SmartERP.HumanResource {
    class DepartmentsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DepartmentsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: DepartmentsRow, lookup: Q.Lookup<DepartmentsRow>): string;
    }
}
declare namespace SmartERP.HumanResource {
    class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.HumanResource {
    class DesignationsDialog extends Serenity.EntityDialog<DesignationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DesignationsForm;
    }
}
declare namespace SmartERP.HumanResource {
    class DesignationsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DesignationsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: DesignationsRow, lookup: Q.Lookup<DesignationsRow>): string;
    }
}
declare namespace SmartERP.HumanResource {
    class DesignationsGrid extends Serenity.EntityGrid<DesignationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.HumanResource {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeesForm;
    }
}
declare namespace SmartERP.HumanResource {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Inventory {
    class DamagedProductsDialog extends Serenity.EntityDialog<DamagedProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DamagedProductsForm;
        constructor();
    }
}
declare namespace SmartERP.Inventory {
    class DamagedProductsGrid extends Serenity.EntityGrid<DamagedProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DamagedProductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsIssueDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: GoodsIssueDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDetailEditor extends Serenity.Extensions.GridEditorBase<GoodsIssueDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof GoodsIssueDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: GoodsIssueDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDialog extends Serenity.EntityDialog<GoodsIssueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsIssueForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueGrid extends Serenity.EntityGrid<GoodsIssueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsIssueDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDetailsDialog extends Serenity.EntityDialog<GoodsIssueDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsIssueDetailsForm;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsIssueDetailsGrid extends Serenity.EntityGrid<GoodsIssueDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsIssueDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsReceiptDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: GoodsReceiptDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDetailEditor extends Serenity.Extensions.GridEditorBase<GoodsReceiptDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof GoodsReceiptDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: GoodsReceiptDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDialog extends Serenity.EntityDialog<GoodsReceiptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsReceiptForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptGrid extends Serenity.EntityGrid<GoodsReceiptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsReceiptDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDetailsDialog extends Serenity.EntityDialog<GoodsReceiptDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsReceiptDetailsForm;
    }
}
declare namespace SmartERP.Inventory {
    class GoodsReceiptDetailsGrid extends Serenity.EntityGrid<GoodsReceiptDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsReceiptDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class AgendaItemTypesDialog extends Serenity.EntityDialog<AgendaItemTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AgendaItemTypesForm;
    }
}
declare namespace SmartERP.Masters {
    class AgendaItemTypesGrid extends Serenity.EntityGrid<AgendaItemTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AgendaItemTypesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class AttendanceStatusesDialog extends Serenity.EntityDialog<AttendanceStatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendanceStatusesForm;
    }
}
declare namespace SmartERP.Masters {
    class AttendanceStatusesGrid extends Serenity.EntityGrid<AttendanceStatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendanceStatusesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class AttendeeTypesDialog extends Serenity.EntityDialog<AttendeeTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendeeTypesForm;
    }
}
declare namespace SmartERP.Masters {
    class AttendeeTypesGrid extends Serenity.EntityGrid<AttendeeTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendeeTypesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class CustomerGroupsDialog extends Serenity.EntityDialog<CustomerGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerGroupsForm;
    }
}
declare namespace SmartERP.Masters {
    class CustomerGroupsGrid extends Serenity.EntityGrid<CustomerGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerGroupsDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class LocationsDialog extends Serenity.EntityDialog<LocationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LocationsForm;
    }
}
declare namespace SmartERP.Masters {
    class LocationsGrid extends Serenity.EntityGrid<LocationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class MeetingTypesDialog extends Serenity.EntityDialog<MeetingTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingTypesForm;
    }
}
declare namespace SmartERP.Masters {
    class MeetingTypesGrid extends Serenity.EntityGrid<MeetingTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingTypesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class ResolutionStatusesDialog extends Serenity.EntityDialog<ResolutionStatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ResolutionStatusesForm;
    }
}
declare namespace SmartERP.Masters {
    class ResolutionStatusesGrid extends Serenity.EntityGrid<ResolutionStatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ResolutionStatusesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Masters {
    class SupplierGroupsDialog extends Serenity.EntityDialog<SupplierGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupplierGroupsForm;
    }
}
declare namespace SmartERP.Masters {
    class SupplierGroupsGrid extends Serenity.EntityGrid<SupplierGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierGroupsDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Meeting {
    class AgendaDecisionsDialog extends Serenity.EntityDialog<AgendaDecisionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AgendaDecisionsForm;
        constructor();
    }
}
declare namespace SmartERP.Meeting {
    class AgendaDecisionsGrid extends Serenity.EntityGrid<AgendaDecisionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AgendaDecisionsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Meeting {
    class AgendaItemsDialog extends Serenity.EntityDialog<AgendaItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AgendaItemsForm;
    }
}
declare namespace SmartERP.Meeting {
    class AgendaItemsGrid extends Serenity.EntityGrid<AgendaItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AgendaItemsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Meeting {
    class MeetingAttendeesDialog extends Serenity.EntityDialog<MeetingAttendeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingAttendeesForm;
    }
}
declare namespace SmartERP.Meeting {
    class MeetingAttendeesGrid extends Serenity.EntityGrid<MeetingAttendeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAttendeesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Meeting {
    class AgendaDecisionsEditDialog extends Serenity.Extensions.GridEditorDialog<AgendaDecisionsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: AgendaDecisionsForm;
        constructor();
        protected beforeLoadEntity(entity: MeetingsRow): void;
        protected loadEntity(entity: MeetingsRow): void;
    }
}
declare namespace SmartERP.Meeting {
    class AgendaDecisionsEditor extends Serenity.Extensions.GridEditorBase<AgendaDecisionsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof AgendaDecisionsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: AgendaDecisionsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Meeting {
    class AgendaItemsEditDialog extends Serenity.Extensions.GridEditorDialog<AgendaItemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: AgendaItemsForm;
        constructor();
    }
}
declare namespace SmartERP.Meeting {
    class AgendaItemsEditor extends Serenity.Extensions.GridEditorBase<AgendaItemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof AgendaItemsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: AgendaItemsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Meeting {
    class MeetingAttendeesEditDialog extends Serenity.Extensions.GridEditorDialog<MeetingAttendeesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: MeetingAttendeesForm;
        constructor();
    }
}
declare namespace SmartERP.Meeting {
    class MeetingAttendeesEditor extends Serenity.Extensions.GridEditorBase<MeetingAttendeesRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof MeetingAttendeesEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: MeetingAttendeesRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Meeting {
    class MeetingsDialog extends Serenity.EntityDialog<MeetingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingsForm;
        constructor();
        protected loadEntity(entity: MeetingsRow): void;
    }
}
declare namespace SmartERP.Meeting {
    class MeetingsGrid extends Serenity.EntityGrid<MeetingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SmartERP.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Products {
    class BrandsDialog extends Serenity.EntityDialog<BrandsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BrandsForm;
    }
}
declare namespace SmartERP.Products {
    class BrandsGrid extends Serenity.EntityGrid<BrandsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BrandsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Products {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesForm;
    }
}
declare namespace SmartERP.Products {
    class CategoriesEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoriesRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: CategoriesRow, lookup: Q.Lookup<CategoriesRow>): string;
    }
}
declare namespace SmartERP.Products {
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected subDialogDataChange(): void;
        protected usePager(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Products {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductsForm;
    }
}
declare namespace SmartERP.Products {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Products {
    class UnitsDialog extends Serenity.EntityDialog<UnitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitsForm;
    }
}
declare namespace SmartERP.Products {
    class UnitsGrid extends Serenity.EntityGrid<UnitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Purchases {
    class PurchaseDetailsDialog extends Serenity.EntityDialog<PurchaseDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseDetailsForm;
    }
}
declare namespace SmartERP.Purchases {
    class PurchaseDetailsGrid extends Serenity.EntityGrid<PurchaseDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Purchases {
    class PurchaseDetailEditDialog extends Serenity.Extensions.GridEditorDialog<PurchaseDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchaseDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Purchases {
    class PurchaseDetailEditor extends Serenity.Extensions.GridEditorBase<PurchaseDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof PurchaseDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: PurchaseDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Purchases {
    class PurchasesDialog extends Serenity.EntityDialog<PurchasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchasesForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace SmartERP.Purchases {
    class PurchasesGrid extends Serenity.EntityGrid<PurchasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Quotations {
    class QuotationDetailsDialog extends Serenity.EntityDialog<QuotationDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationDetailsForm;
    }
}
declare namespace SmartERP.Quotations {
    class QuotationDetailsGrid extends Serenity.EntityGrid<QuotationDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Quotations {
    class QuotationsDetailEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: QuotationDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Quotations {
    class QuotationsDetailEditor extends Serenity.Extensions.GridEditorBase<QuotationDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof QuotationsDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: QuotationDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Quotations {
    class QuotationsDialog extends Serenity.EntityDialog<QuotationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationsForm;
        constructor();
        private updateExpiryDate;
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace SmartERP.Quotations {
    class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Reports {
    class CustomerReceivableReportGrid extends Serenity.EntityGrid<SmartERP.Customers.CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Customers.CustomersDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Reports {
    class DailyClosingDialog extends Serenity.EntityDialog<DailyClosingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DailyClosingForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SmartERP.Reports {
    class DailyClosingGrid extends Serenity.EntityGrid<DailyClosingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DailyClosingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Reports {
    class StockReport extends Serenity.EntityGrid<SmartERP.Products.ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Products.ProductsDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Reports {
    class SupplierPayableReportGrid extends Serenity.EntityGrid<SmartERP.Suppliers.SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Suppliers.SuppliersDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Sales {
    class SaleDetailsDialog extends Serenity.EntityDialog<SaleDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaleDetailsForm;
    }
}
declare namespace SmartERP.Sales {
    class SaleDetailsGrid extends Serenity.EntityGrid<SaleDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Sales {
    class SalesDetailEditDialog extends Serenity.Extensions.GridEditorDialog<SaleDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: SaleDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Sales {
    class SalesDetailEditor extends Serenity.Extensions.GridEditorBase<SaleDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof SalesDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: SaleDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Sales {
    class SalesDialog extends Serenity.EntityDialog<SalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace SmartERP.Sales {
    class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoiceDetailsDialog extends Serenity.EntityDialog<ServiceInvoiceDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ServiceInvoiceDetailsForm;
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoiceDetailsGrid extends Serenity.EntityGrid<ServiceInvoiceDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceInvoiceDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoicesDetailEditDialog extends Serenity.Extensions.GridEditorDialog<ServiceInvoiceDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: ServiceInvoiceDetailsForm;
        constructor();
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoicesDetailEditor extends Serenity.Extensions.GridEditorBase<ServiceInvoiceDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof ServiceInvoicesDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: ServiceInvoiceDetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoicesDialog extends Serenity.EntityDialog<ServiceInvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ServiceInvoicesForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace SmartERP.Services {
    class ServiceInvoicesGrid extends Serenity.EntityGrid<ServiceInvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceInvoicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SmartERP.Services {
    class ServicesDialog extends Serenity.EntityDialog<ServicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ServicesForm;
    }
}
declare namespace SmartERP.Services {
    class ServicesGrid extends Serenity.EntityGrid<ServicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartERP.Suppliers {
    class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliersForm;
    }
}
declare namespace SmartERP.Suppliers {
    class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersDialog;
        protected getIsActiveProperty(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
