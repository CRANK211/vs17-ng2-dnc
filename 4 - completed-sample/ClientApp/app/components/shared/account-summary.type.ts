import { AccountType } from './account-type.enum';

export class AccountSummary {
    accountNumber: string;
    type: AccountType;
    name: string;
    balance: number;

    constructor() {

    }
}