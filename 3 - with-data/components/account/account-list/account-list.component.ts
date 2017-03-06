
import { Component, OnInit } from '@angular/core';
import { AccountSummary } from '../../shared/account-summary.type';
import { AccountService } from '../../shared/account.service';
import { AccountType } from '../../shared/account-type.enum';

@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
    cashAccounts: AccountSummary[];
    creditAccounts: AccountSummary[];

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.getAccountSummaries()
            .then(accounts => {
                this.cashAccounts = accounts.filter(v => v.type === AccountType.Checking || v.type === AccountType.Savings);
                this.creditAccounts = accounts.filter(v => v.type === AccountType.Credit);
            });
    }
}
