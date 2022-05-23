export default interface Record {
    id: number;
    timestamp: number;
    type: IncomeType;
    categoryId: number;
    amount: number;
    comment?: string;
}

export enum IncomeType {
    INCOME,
    EXPENSES
}
