import { Account } from "./account.model";

export interface Transaction {
    id: number;
    amount: number;
    type: string;
    description: string;
    date: Date;
    account: Account;
}