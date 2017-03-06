
import { Component, Input, OnInit } from '@angular/core';

import { AccountTransaction } from '../../shared/account-transaction.type';
import { AccountService } from '../../shared/account.service';

@Component({
    selector: 'account-activity',
    templateUrl: './account-activity.component.html'
})
export class AccountActivityComponent {
    @Input() accountTransactions: AccountTransaction[];

    constructor() {
    }

}
