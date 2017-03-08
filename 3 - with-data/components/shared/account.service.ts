
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { AccountSummary } from './account-summary.type';
//import { AccountDetail } from './account-detail.type';
import { AccountType } from './account-type.enum';

@Injectable()
export class AccountService {
    constructor(private http: Http) {

    }

    getAccountSummaries() {
        return this.http.get('api/Bank/GetAccountSummaries')
            .map(response => response.json() as AccountSummary[])
            .toPromise();
    }

    // getAccountDetail(id: string) {
    //     return this.http.get(`api/Bank/GetAccountDetail/${id}`)
    //         .map(response => response.json() as AccountDetail)
    //         .toPromise();
    // }
}
