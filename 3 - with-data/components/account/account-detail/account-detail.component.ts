
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountDetail } from '../../shared/account-detail.type';
import { AccountService } from '../../shared/account.service';

@Component({
    selector: 'account-detail',
    templateUrl: './account-detail.component.html'
})
export class AccountDetailComponent implements OnInit {

    @Input() accountDetail: AccountDetail;

    constructor(
        private accountService: AccountService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'] as string;
        this.accountService.getAccountDetail(id)
            .then(accountDetail => this.accountDetail = accountDetail);
    }
}
