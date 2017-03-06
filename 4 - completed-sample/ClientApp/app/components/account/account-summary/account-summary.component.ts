
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AccountSummary } from "../../shared/account-summary.type";

@Component({
    selector: 'account-summary',
    templateUrl: './account-summary.component.html',
    styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
    @Input() account: AccountSummary;

    constructor(private router: Router) {
    }

    navigateToDetail() {
        this.router.navigate(['detail', this.account.accountNumber]);
    }
}
    